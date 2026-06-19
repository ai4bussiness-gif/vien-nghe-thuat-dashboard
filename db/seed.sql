-- Dữ liệu mẫu cho Viện Nghệ Thuật
-- 3 trung tâm | 5 không gian | 5 sự kiện | 5 đặt phòng

-- ============================================================
-- Không gian (spaces)
-- ============================================================
INSERT INTO spaces (id, name, floor, type, capacity, description, is_active) VALUES
    ('a1b2c3d4-0001-0001-0001-000000000001', 'P.201',   2, 'classroom',  30, 'Phòng học nhạc cụ, có đàn piano và hệ thống âm thanh', true),
    ('a1b2c3d4-0002-0002-0002-000000000002', 'P.301',   3, 'classroom',  25, 'Phòng học vũ đạo, sàn gỗ chuyên dụng và gương toàn thân', true),
    ('a1b2c3d4-0003-0003-0003-000000000003', 'Sảnh A',  1, 'event',     150, 'Sảnh lớn tầng 1, phù hợp biểu diễn và triển lãm nhỏ', true),
    ('a1b2c3d4-0004-0004-0004-000000000004', 'Gallery', 2, 'exhibition',  80, 'Phòng trưng bày tranh và tác phẩm nghệ thuật thị giác', true),
    ('a1b2c3d4-0005-0005-0005-000000000005', 'Studio',  3, 'event',      60, 'Studio thu âm và quay phim mini, cách âm hoàn toàn', true);

-- ============================================================
-- Sự kiện (events) — 3 trung tâm: Âm Nhạc, Mỹ Thuật, Vũ Đạo
-- ============================================================
INSERT INTO events (title, center, center_color, event_type, description, location, start_date, end_date) VALUES
    (
        'Hòa nhạc mùa hè 2026',
        'Trung tâm Âm Nhạc',
        '#3B82F6',
        'event',
        'Đêm hòa nhạc với các tiết mục piano, violin và thanh nhạc của học viên',
        'Sảnh A',
        '2026-07-15 18:30:00+07',
        '2026-07-15 21:00:00+07'
    ),
    (
        'Triển lãm "Sắc màu Việt"',
        'Trung tâm Mỹ Thuật',
        '#10B981',
        'event',
        'Trưng bày 50 tác phẩm hội họa và điêu khắc của các nghệ sĩ trẻ',
        'Gallery',
        '2026-07-20 09:00:00+07',
        '2026-07-25 17:00:00+07'
    ),
    (
        'Workshop vũ đạo đương đại',
        'Trung tâm Vũ Đạo',
        '#F59E0B',
        'class',
        'Khóa học cuối tuần với giảng viên quốc tế về vũ đạo đương đại',
        'P.301',
        '2026-07-26 09:00:00+07',
        '2026-07-27 17:00:00+07'
    ),
    (
        'Họp Ban Giám đốc tháng 7',
        'Trung tâm Âm Nhạc',
        '#3B82F6',
        'meeting',
        'Họp định kỳ đánh giá kết quả hoạt động và kế hoạch quý 3',
        'P.201',
        '2026-07-05 14:00:00+07',
        '2026-07-05 16:00:00+07'
    ),
    (
        'Nộp báo cáo học kỳ I',
        'Trung tâm Mỹ Thuật',
        '#10B981',
        'deadline',
        'Hạn cuối nộp báo cáo kết quả học tập học kỳ I năm học 2025-2026',
        NULL,
        '2026-07-31 17:00:00+07',
        NULL
    );

-- ============================================================
-- Đặt phòng (bookings)
-- ============================================================
INSERT INTO bookings (space_id, center, title, date, start_time, end_time, status) VALUES
    ('a1b2c3d4-0001-0001-0001-000000000001', 'Trung tâm Âm Nhạc',  'Lớp piano cơ bản K5',        '2026-07-07', '08:00', '10:00', 'approved'),
    ('a1b2c3d4-0002-0002-0002-000000000002', 'Trung tâm Vũ Đạo',   'Tập luyện ballet nâng cao',  '2026-07-07', '09:00', '11:30', 'approved'),
    ('a1b2c3d4-0003-0003-0003-000000000003', 'Trung tâm Âm Nhạc',  'Tổng duyệt hòa nhạc hè',    '2026-07-14', '14:00', '18:00', 'approved'),
    ('a1b2c3d4-0004-0004-0004-000000000004', 'Trung tâm Mỹ Thuật', 'Lắp đặt triển lãm Sắc màu', '2026-07-19', '08:00', '17:00', 'pending'),
    ('a1b2c3d4-0005-0005-0005-000000000005', 'Trung tâm Vũ Đạo',   'Quay clip showcase vũ đạo', '2026-07-28', '13:00', '17:00', 'pending');
