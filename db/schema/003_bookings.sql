-- Bảng lưu trữ lịch đặt phòng / không gian của các trung tâm

CREATE TABLE IF NOT EXISTS bookings (
    id          uuid    PRIMARY KEY DEFAULT gen_random_uuid(),
    space_id    uuid    NOT NULL REFERENCES spaces (id) ON DELETE CASCADE,
    center      text    NOT NULL,                    -- Trung tâm thực hiện đặt phòng
    title       text    NOT NULL,                    -- Tên mục đích sử dụng
    date        date    NOT NULL,                    -- Ngày sử dụng
    start_time  time    NOT NULL,                    -- Giờ bắt đầu
    end_time    time    NOT NULL,                    -- Giờ kết thúc
    status      text    NOT NULL DEFAULT 'pending'
                        CHECK (status IN ('pending', 'approved', 'cancelled')),
    created_at  timestamptz NOT NULL DEFAULT now(),

    -- Đảm bảo giờ kết thúc luôn sau giờ bắt đầu
    CONSTRAINT bookings_time_check CHECK (end_time > start_time)
);

-- Index để tra cứu nhanh theo không gian và ngày
CREATE INDEX IF NOT EXISTS bookings_space_date_idx ON bookings (space_id, date);

-- Bật Row Level Security để kiểm soát quyền truy cập theo người dùng
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cho phép đọc bookings" ON bookings
    FOR SELECT USING (true);

CREATE POLICY "Cho phép chèn bookings" ON bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Cho phép cập nhật bookings" ON bookings
    FOR UPDATE USING (true);

CREATE POLICY "Cho phép xóa bookings" ON bookings
    FOR DELETE USING (true);
