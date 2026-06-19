-- Bảng lưu trữ các sự kiện, cuộc họp, lớp học của các trung tâm nghệ thuật

CREATE TABLE IF NOT EXISTS events (
    id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
    title         text        NOT NULL,
    center        text        NOT NULL,               -- Tên trung tâm tổ chức
    center_color  text        NOT NULL DEFAULT '#3B82F6', -- Màu đại diện trung tâm (hex)
    event_type    text        CHECK (event_type IN ('event', 'meeting', 'class', 'deadline')),
    description   text,                               -- Mô tả chi tiết sự kiện
    location      text,                               -- Địa điểm tổ chức
    start_date    timestamptz NOT NULL,               -- Thời gian bắt đầu
    end_date      timestamptz,                        -- Thời gian kết thúc (không bắt buộc)
    image_url     text,                               -- Ảnh chụp sau sự kiện
    created_at    timestamptz NOT NULL DEFAULT now()
);

-- Bật Row Level Security để kiểm soát quyền truy cập theo người dùng
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Cho phép đọc công khai (điều chỉnh lại khi có hệ thống xác thực)
CREATE POLICY "Cho phép đọc events" ON events
    FOR SELECT USING (true);

CREATE POLICY "Cho phép chèn events" ON events
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Cho phép cập nhật events" ON events
    FOR UPDATE USING (true);

CREATE POLICY "Cho phép xóa events" ON events
    FOR DELETE USING (true);
