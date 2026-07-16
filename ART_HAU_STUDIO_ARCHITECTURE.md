# ART HAU STUDIO — Kiến trúc Hệ sinh thái

> Tổng thể: 5 mảng hoạt động liên kết như thế nào, dòng chảy khách hàng ra sao.

---

## 🧠 Tư duy hệ thống

ART HAU STUDIO không phải 5 mảng riêng lẻ — mà là **1 hệ sinh thái với 5 cửa ngõ vào**, mỗi cửa đưa khách vào sâu hơn trong hệ thống.

```
                    ┌─────────────────────────────────┐
                    │                                 │
    [LỚP HỌC] ─────┤    ART HAU STUDIO               │
                    │    Ecosystem                     │
    [WORKSHOP] ─────┤                                 │
                    │    ┌──────────────────────┐      │
    [TRẢI NGHIỆM] ──┤    │   LỚP BỒI DƯỠNG     │      │
                    │    │   (Khách hàng core)  │      │
    [TRIỂN LÃM] ────┤    └──────────┬───────────┘      │
                    │               │                  │
    [CUỘC THI] ─────┤               ▼                  │
                    │    ┌──────────────────────┐      │
                    │    │  TRẢI NGHIỆM CN      │      │
                    │    │  (Tần suất cao,      │      │
                    │    │   biên lợi nhuận cao) │      │
                    │    └──────────────────────┘      │
                    │                                 │
                    └─────────────────────────────────┘
```

---

## 🔄 Dòng chảy khách hàng (Customer Flow)

### Con đường #1: Người mới → Khách quen

```
TRẢI NGHIỆM (lần 1) 
  → Thích → Mua vé cả ngày 
  → Thích hơn → Đăng ký WORKSHOP 
  → Muốn học bài bản → Đăng ký LỚP BỒI DƯỠNG 
  → Trở thành khách quen của TRẢI NGHIỆM cuối tuần
  → Rủ bạn bè → Vòng lặp mới
```

### Con đường #2: Phụ huynh → Học viên nhí

```
Phụ huynh nghe về LỚP THIẾU NHI qua bạn bè
  → Cho con học thử → Con thích
  → Đăng ký khóa chính thức
  → Đến đón con → Thấy không gian trải nghiệm
  → Đăng ký trải nghiệm cho cả nhà cuối tuần
  → Con tham gia CUỘC THI "Cây Bút Nhỏ"
```

### Con đường #3: Người đi làm → Workshop khách quen

```
Thấy bài workshop trên TikTok/Facebook
  → Đăng ký workshop cuối tuần (500k)
  → Thích không khí → Đăng ký TRẢI NGHIỆM
  → Trở thành regular khách cuối tuần
  → Đăng ký LỚP BỒI DƯỠNG để học bài bản
```

### Con đường #4: Sinh viên → Cộng tác viên → Giảng viên

```
SV Kiến Trúc đến TRIỂN LÃM/TALKSHOW miễn phí
  → Thích không gian → Apply làm HDV cuối tuần
  → Có kinh nghiệm → Làm trợ giảng lớp thiếu nhi
  → Tốt nghiệp → Trở thành giảng viên part-time
```

---

## 🎯 Ma trận cross-sell (bán chéo giữa các mảng)

| Khách đã dùng | Nên bán thêm | Tỉ lệ success kỳ vọng |
|--------------|-------------|:--------------------:|
| Lớp bồi dưỡng | Vé trải nghiệm cuối tuần | Cao (đã quen studio) |
| Lớp thiếu nhi | Combo gia đình CN | Cao (phụ huynh đi cùng) |
| Workshop | Lớp bồi dưỡng khóa tiếp | Trung bình |
| Trải nghiệm | Workshop chuyên đề | Cao (đã trả tiền cho trải nghiệm) |
| Triển lãm | Talkshow | Trung bình |
| Talkshow | Trải nghiệm | Trung bình |
| Cuộc thi | Lớp bồi dưỡng (thí sinh được tặng 1 buổi học thử) | Thấp-nhưng-cần-thử |

### Tỉ lệ kỳ vọng cross-sell

- **Người mới → Mua lại lần 2**: 30%
- **Khách mua lần 2 → Đăng ký lớp**: 20%
- **Khách học → Trải nghiệm cuối tuần thường xuyên**: 40%
- **Khách trải nghiệm → Rủ bạn**: 15% (mỗi khách giới thiệu 0.5-1 người mới)

---

## 📈 Vòng đời giá trị khách hàng (CLV dự kiến)

| Loại khách | Lần 1 | Lần 2-5 | Lần 6+ | CLV 12 tháng |
|-----------|:-----:|:-------:|:------:|:------------:|
| **Học viên bồi dưỡng** | 1.440k (khóa) | 1.440k (khóa 2) | 1.440k + trải nghiệm | ~4.000k |
| **Học viên thiếu nhi** | 1.440k | 1.440k | 1.440k + thi | ~3.500k |
| **Khách workshop** | 500k | 500k × 3 | 500k + trải nghiệm | ~3.000k |
| **Khách trải nghiệm** | 100k | 100k × 5 | 100k × 12 + workshop | ~2.500k |
| **Khách talkshow/triển lãm** | 0-50k | 0-50k × 2 | 0-50k + trải nghiệm | ~500k |

---

## 📊 Dự báo dòng tiền hệ sinh thái

```
Tháng 8-10/2026 (Giai đoạn Khởi Động)
  Doanh thu: ~100-150tr (lớp + WS #1 + trải nghiệm #2 tháng)
  Chi phí:    ~147tr (49tr/th × 3 + đầu tư 346tr phân bổ)
  Dòng tiền: Âm (đang đầu tư)

Tháng 11/2026-1/2027 (Tăng Tốc)
  Doanh thu: ~180-220tr 
  Chi phí:    ~147tr
  Dòng tiền: Dương nhẹ

Tháng 2-7/2027 (Mở Rộng + Bứt Phá)
  Doanh thu: ~220-280tr/tháng
  Chi phí:    ~147tr
  Dòng tiền: Dương mạnh
```

---

## 🔗 Kết nối file

| File | Nội dung |
|------|----------|
| `ART_HAU_STUDIO_OFFERS.md` | Phân tích offer + giá |
| `ART_HAU_STUDIO_WORKFLOWS.md` | Quy trình vận hành từng mảng |
| **`ART_HAU_STUDIO_ARCHITECTURE.md`** | File này |
| `ART_HAU_STUDIO_CHECKLIST.md` | Checklist thực thi A-Z |
