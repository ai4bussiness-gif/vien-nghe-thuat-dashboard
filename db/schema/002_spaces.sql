-- Bảng lưu trữ thông tin các không gian, phòng có thể đặt lịch sử dụng

CREATE TABLE IF NOT EXISTS spaces (
    id          uuid    PRIMARY KEY DEFAULT gen_random_uuid(),
    name        text    NOT NULL,                    -- Tên không gian (VD: "P.201", "Sảnh A")
    floor       int     CHECK (floor BETWEEN 1 AND 10), -- Tầng trong tòa nhà
    type        text    CHECK (type IN ('exhibition', 'event', 'classroom')), -- Loại không gian
    capacity    int     CHECK (capacity > 0),        -- Sức chứa tối đa (người)
    description text,                                -- Mô tả tiện ích, đặc điểm
    is_active   boolean NOT NULL DEFAULT true        -- Trạng thái hoạt động
);

-- Bật Row Level Security để kiểm soát quyền truy cập theo người dùng
ALTER TABLE spaces ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cho phép đọc spaces" ON spaces
    FOR SELECT USING (true);

CREATE POLICY "Cho phép chèn spaces" ON spaces
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Cho phép cập nhật spaces" ON spaces
    FOR UPDATE USING (true);

CREATE POLICY "Cho phép xóa spaces" ON spaces
    FOR DELETE USING (true);
