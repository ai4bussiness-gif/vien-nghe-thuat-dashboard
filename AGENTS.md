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
- [ ] Vòng 3: Claude — Component EventCard + filter
- [ ] Vòng 4: Claude — Component lịch không gian
- [x] Vòng 5: Git + Deploy Cloudflare (✅ GitHub + Worker live)

## Cycle 1 — Kết quả
- Dashboard: https://vien-nghe-thuat.ai4bussiness.workers.dev
- GitHub: https://github.com/ai4bussiness-gif/vien-nghe-thuat-dashboard
- Deploy: Cloudflare Worker (static assets)
- Dùng: 10/10 Claude calls, ~$0.97 token cost

## Center colors
- Nội thất: #3B82F6 (xanh dương)
- Điêu khắc: #10B981 (xanh lá)
- In & Ấn loát: #F59E0B (cam)
- Đào tạo: #8B5CF6 (tím)
