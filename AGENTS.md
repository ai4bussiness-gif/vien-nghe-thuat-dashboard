# Dashboard Viện Nghệ Thuật — AGENTS.md

## Dự án
Dashboard nội bộ cho Viện Nghệ Thuật, ĐH Kiến Trúc HN. Hiển thị lịch sự kiện, kế hoạch, không gian của các trung tâm (Nội thất, Điêu khắc, In & Ấn loát, Đào tạo).

## Công nghệ
- Frontend: Astro + Tailwind CSS (TypeScript)
- Database: Supabase (PostgreSQL)
- Deploy: Cloudflare Pages
- Source: GitHub (token đã cài)
- Ảnh: Supabase Storage

## Cycle 1 — "Dashboard cơ bản + không gian"
Appetite: 10 Claude calls
Scope cốt lõi:
1. Astro project + Tailwind + deploy config
2. Schema Supabase: bảng events, spaces, bookings
3. Timeline sự kiện (card, filter theo trung tâm)
4. Hiển thị không gian trống (dạng grid lịch)
5. Git init + commit + push → Cloudflare deploy

Out of bounds:
- Đăng ký/booking qua form (chỉ hiển thị)
- Zalo notification
- Lớp học (cycle 2)
- Gallery ảnh (cycle 2)
- Admin panel đăng nhập

## Quyết định thiết kế
- Màu sắc: trung tính, trang nhã (Viện Nghệ Thuật)
- Filter trung tâm: 4 màu khác nhau (Xanh dương, Cam, Tím, Xanh lá)
- Responsive: xem được trên mobile
- Font rõ, thoáng, không phức tạp

## Task tracking
- [x] PHASE 1: SHAPE
- [x] Vòng 1: Claude — Tạo Astro project + Tailwind (✅ build OK)
- [x] Vòng 2: Claude — Schema Supabase SQL (✅ events, spaces, bookings)
- [x] Vòng 3: Claude — Component EventCard + filter (✅ filter 4 trung tâm, timeline, dark mode)
- [x] Vòng 4: Claude — Component lịch không gian (✅ weekly grid + mobile cards + dark mode)
- [x] Vòng 4.1: Claude — Update data lên tuần 15-21/06/2026
- [x] Vòng 4.2: Claude — About page + CenterCard tích hợp nội dung từ VIEN_PROFILE.md
- [x] Vòng 5: Git + Deploy Cloudflare (✅ GitHub + Worker live)

## Cycle 1 — Kết quả
- Dashboard: https://vien-nghe-thuat.ai4bussiness.workers.dev
- GitHub: https://github.com/ai4bussiness-gif/vien-nghe-thuat-dashboard
- Deploy: Cloudflare Worker (static assets)
- Dùng: 10/10 Claude calls, ~$0.97 token cost

## Cycle 2 — "Nghiên cứu + Booking + Cron"
Appetite: Tự động (Hermes scripts)
Scope:
1. Trang Nghiên cứu với 8 dự án + filter + tiến độ + phối hợp
2. Header: bỏ #events/#spaces, thêm Nghiên cứu
3. Mobile menu: hamburger + dropdown (trang chủ, giới thiệu, nghiên cứu)
4. Hệ thống booking không gian qua Telegram (scripts/booking.py)
5. Cron job bản tin sáng 8:00 (scripts/morning_digest.py + Hermes cron)
6. DNS: hướng dẫn trỏ dashboard.viennghethuat.edu.vn → Cloudflare

## Scripts (thư mục scripts/)
| File | Chức năng | Cách dùng |
|------|-----------|-----------|
| `booking.py` | Quản lý đặt phòng | `python booking.py add/check/list/cancel` |
| `bookings.json` | CSDL booking dạng JSON | Booking script tự cập nhật |
| `morning_digest.py` | Bản tin sáng hôm nay | Cron job chạy 8:00 sáng |
| `sync_bookings.py` | Đồng bộ booking.json → spaces.ts | Chạy trước khi build deploy |

## Booking workflow (qua Telegram)
Khi anh nhắn đặt phòng:
1. Tôi kiểm tra trống: `python booking.py check <date> <spaceId>`
2. Nếu trống → đặt: `python booking.py add <date> <spaceId> <center> <title> <start> <end>`
3. Đồng bộ: `python sync_bookings.py` + build + deploy để dashboard cập nhật

## Cron jobs
- **8:00 sáng hàng ngày** → Bản tin sáng (sự kiện hôm nay + 7 ngày tới + không gian trống)
  Job ID: `1a85beb7f019` | Type: `no_agent=true` (script chạy độc lập)
  **Script path:** `~/AppData/Local/hermes/scripts/morning_digest.py`
  **Data đọc từ:** `projects/vien-nghe-thuat/scripts/bookings.json` (hardcode DB_PATH)

## 📍 File map — Biết chính xác file nào ở đâu

| File | Vị trí chính | Vai trò | Cron dùng? |
|------|-------------|---------|-----------|
| `booking.py` | `projects/vien-nghe-thuat/scripts/` | Quản lý đặt phòng (Telegram) | ❌ |
| `bookings.json` | `projects/vien-nghe-thuat/scripts/` | **Single source of truth** cho booking | ✅ (đọc qua DB_PATH) |
| `morning_digest.py` | `projects/vien-nghe-thuat/scripts/` | Script bản tin sáng (bản dev) | ❌ |
| `morning_digest.py` | `~/AppData/Local/hermes/scripts/` | **Bản cron chạy** (copy từ project ra) | ✅ |
| `sync_bookings.py` | `projects/vien-nghe-thuat/scripts/` | Đồng bộ booking.json → spaces.ts | ❌ |

**Nguyên tắc:** Chỉ `bookings.json` là 1 file duy nhất (single source of truth). Mọi thứ khác đều đọc từ đó. Không tạo thêm bản sao `bookings.json` ở đâu khác.

## ⚠️ Bài học — Nguyên tắc đồng bộ data

**Vấn đề đã gặp (24/06/2026):** Script `morning_digest.py` ở `hermes/scripts/` và `projects/scripts/` bị lệch nhau. Cron dùng bản cũ → bản tin sáng mất.

**Quy tắc cứng:**

1. **1 source of truth duy nhất** — Mọi dữ liệu (`bookings.json`, config, ...) chỉ ở 1 chỗ duy nhất trong project. Script cron/Khác phải hardcode DB_PATH trỏ về đó.
2. **Không copy data — chỉ reference** — Không copy `bookings.json` hay data nào ra ngoài thư mục project. Dùng absolute path để đọc xuyên từ project.
3. **Khi update data → verify cron** — Sau khi sửa `bookings.json`, test cron script chạy thủ công: `python ~/AppData/Local/hermes/scripts/morning_digest.py`
4. **Script cron là bản sao → phải đồng bộ** — Nếu sửa code `morning_digest.py` trong project, copy ra hermes/scripts/ luôn:
   ```
   cp projects/vien-nghe-thuat/scripts/morning_digest.py ~/AppData/Local/hermes/scripts/
   ```
5. **Trước khi tạo cron job mới** — Xác định rõ script ở đâu, data ở đâu, có drift không.

## DNS
- Domain chính: `dashboard.viennghethuat.edu.vn`
- Hiện tại: `vien-nghe-thuat.ai4bussiness.workers.dev`
- Cần trỏ: CNAME `dashboard` → `vien-nghe-thuat.ai4bussiness.workers.dev` (tại nhanhhoa.com)

## Loại bỏ khỏi scope
- ❌ Gallery ảnh sự kiện
- ❌ Zalo notification
- ❌ Hiển thị khóa học
- ❌ Đăng ký qua form (chỉ qua Telegram)

## Center colors
- Nội thất: #3B82F6 (xanh dương)
- Điêu khắc: #10B981 (xanh lá)
- In & Ấn loát: #F59E0B (cam)
- Đào tạo: #8B5CF6 (tím)
