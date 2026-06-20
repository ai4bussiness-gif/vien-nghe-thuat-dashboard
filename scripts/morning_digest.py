"""
Morning Digest — gửi bản tin sáng cho Dashboard Viện Nghệ Thuật
Usage: python morning-digest.py
Output: Markdown text suitable for Telegram
"""

import json, os
from datetime import date, datetime

DB_PATH = os.path.join(os.path.dirname(__file__), 'bookings.json')

def load():
    with open(DB_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)

def main():
    today = date.today()
    weekday_vn = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật']
    today_str = today.isoformat()
    day_name = weekday_vn[today.weekday()]

    data = load()

    # Bookings today
    today_bookings = [b for b in data['bookings'] if b['date'] == today_str and b['status'] == 'approved']
    today_bookings.sort(key=lambda x: x['startTime'])

    lines = []
    lines.append(f"🌅 **Bản tin sáng — {day_name}, {today.strftime('%d/%m/%Y')}**")
    lines.append("")

    # Today's events
    if today_bookings:
        lines.append(f"**📅 Hôm nay có {len(today_bookings)} sự kiện:**")
        lines.append("")
        for b in today_bookings:
            space_name = "?"
            for s in data['spaces']:
                if s['id'] == b['spaceId']:
                    space_name = s['name']
                    break
            lines.append(f"• **{b['startTime']}–{b['endTime']}** | {b['title']}")
            lines.append(f"  📍 {space_name} | 🏢 {b['center']}")
        lines.append("")
    else:
        lines.append("✅ **Hôm nay không có sự kiện nào.**")
        lines.append("")

    # Upcoming (next 7 days excluding today)
    from datetime import timedelta
    week_end = today + timedelta(days=7)
    upcoming = [b for b in data['bookings'] if today_str < b['date'] <= week_end.isoformat() and b['status'] == 'approved']
    upcoming.sort(key=lambda x: (x['date'], x['startTime']))

    if upcoming:
        lines.append(f"**📆 Sắp tới ({len(upcoming)} sự kiện trong 7 ngày):**")
        lines.append("")
        for b in upcoming:
            d = datetime.strptime(b['date'], '%Y-%m-%d')
            d_name = weekday_vn[d.weekday()]
            space_name = "?"
            for s in data['spaces']:
                if s['id'] == b['spaceId']:
                    space_name = s['name']
                    break
            lines.append(f"• **{d_name}, {b['date']}** | {b['startTime']}–{b['endTime']}")
            lines.append(f"  {b['title']} — {b['center']} ({space_name})")
        lines.append("")
    else:
        lines.append("📭 **7 ngày tới trống.**")
        lines.append("")

    # Spaces available today
    booked_space_ids = set(b['spaceId'] for b in today_bookings)
    free_spaces = [s for s in data['spaces'] if s['id'] not in booked_space_ids]
    if free_spaces:
        lines.append(f"**🏛️ Không gian trống hôm nay:**")
        for s in free_spaces:
            floor_label = {1: "Triển lãm", 2: "Sự kiện", 3: "Lớp học"}.get(s['floor'], '')
            lines.append(f"• {s['name']} — Tầng {s['floor']} ({floor_label}) — {s['capacity']} người")
        lines.append("")

    lines.append("— *Bản tin tự động từ Hermes Agent* 📡")

    return '\n'.join(lines)

if __name__ == '__main__':
    print(main())
