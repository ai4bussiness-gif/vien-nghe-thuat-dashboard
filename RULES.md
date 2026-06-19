# Rules — Dự án Dashboard Viện Nghệ Thuật

## Ngôn ngữ & Đặt tên
- Mọi UI text: TIẾNG VIỆT (có dấu)
- Tên biến, hàm, file: tiếng Anh (camelCase)
- Tên component: PascalCase (VD: EventCard.astro)
- Tên file .astro, .ts: camelCase (VD: eventTimeline.astro)

## Component & Style
- Dùng Tailwind utility classes, KHÔNG CSS riêng
- Layout.astro import global.css — nếu thiếu CSS kiểm tra ngay
- Màu sắc: Nội Thất #3B82F6, Điêu Khắc #10B981, In & Ấn Loát #F59E0B, Đào Tạo #8B5CF6
- Card event: border-left 4px màu trung tâm
- Badge: "Sự kiện" xanh, "Họp" vàng, "Lớp học" tím, "Deadline" đỏ
- Responsive: desktop grid (md:block), mobile cards (md:hidden)

## Dữ liệu
- Data mẫu trong src/data/*.ts
- Import: `import { ten } from '../data/file'`
- Kiểm tra tên biến export — nếu lỗi "undefined" là do import sai tên
- Date trong data: `new Date("2025-06-16T00:00:00Z")` — Date object, KHÔNG string

## Astro
- `output: 'static'` (không dùng adapter server)
- Build: `npm run build` → output ở dist/
- Deploy: `npx wrangler deploy` (static assets, không Worker script)
- Layout luôn import global.css (`@import "tailwindcss"`)
- Lang: `vi` không phải `en`
- Title động qua prop `{title}` trong Layout

## Git
- Commit message: tiếng Anh, dạng "Type: Description"
- Không commit file .wrangler, node_modules, dist (đã có .gitignore)
- Push: `git push origin master`

## Debug
- Nếu build ra HTML trắng: build không có Cloudflare adapter để thấy lỗi thật
- Lỗi "Cannot read properties of undefined (reading 'filter')" → kiểm tra tên biến import
- Lỗi "empty page" → kiểm tra Layout có import global.css không
