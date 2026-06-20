"""
Booking Manager — quản lý đăng ký không gian Viện Nghệ Thuật
Usage:
  python booking.py check <date>            # Xem không gian trống trong ngày
  python booking.py check <date> <spaceId>  # Xem giờ trống của 1 phòng
  python booking.py add <date> <spaceId> <center> <title> <start> <end>
                                            # Đặt phòng
  python booking.py list                    # Danh sách booking sắp tới
  python booking.py cancel <id>             # Hủy booking

Examples:
  python booking.py check 2026-06-25
  python booking.py add 2026-06-25 p201 "Nội Thất" "Họp giao ban tháng 7" 14:00 16:00
"""

import json, sys, os
from datetime import datetime, date

DB_PATH = os.path.join(os.path.dirname(__file__), 'bookings.json')

def load():
    with open(DB_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)

def save(data):
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def get_space_name(space_id, spaces):
    for s in spaces:
        if s['id'] == space_id:
            return f"{s['name']} (Tầng {s['floor']} — {s['description']})"
    return space_id

def is_overlap(new_start, new_end, exist_start, exist_end):
    """Check if two time ranges overlap."""
    def to_min(t):
        h, m = t.split(':')
        return int(h) * 60 + int(m)
    ns = to_min(new_start)
    ne = to_min(new_end)
    es = to_min(exist_start)
    ee = to_min(exist_end)
    return ns < ee and ne > es

def cmd_check(args):
    data = load()
    if len(args) < 1:
        print("Usage: check <YYYY-MM-DD> [spaceId]")
        return

    target_date = args[0]
    space_filter = args[1] if len(args) > 1 else None

    # Validate date
    try:
        datetime.strptime(target_date, '%Y-%m-%d')
    except ValueError:
        print(f"❌ Sai định dạng ngày: {target_date} (cần YYYY-MM-DD)")
        return

    # Bookings on that date
    day_bookings = [b for b in data['bookings'] if b['date'] == target_date]

    if space_filter:
        day_bookings = [b for b in day_bookings if b['spaceId'] == space_filter]
        space = get_space_name(space_filter, data['spaces'])
        print(f"\n📋 {space} — {target_date}")
    else:
        print(f"\n📋 Không gian Viện — {target_date}")
        print(f"{'Phòng':<20} {'Giờ':<20} {'Đơn vị':<15} {'Trạng thái':<12} {'Sự kiện'}")
        print('─' * 90)

    if not day_bookings:
        print("   ✅ Trống cả ngày")
        return

    for b in sorted(day_bookings, key=lambda x: (x['spaceId'], x['startTime'])):
        space = get_space_name(b['spaceId'], data['spaces'])
        status_icon = '✅' if b['status'] == 'approved' else '⏳'
        print(f"{space[:19]:<20} {b['startTime']}-{b['endTime']:<15} {b['center']:<15} {status_icon} {b['status']:<10} {b['title']}")

    # Show free slots if checking one space
    if space_filter:
        occupied = [(b['startTime'], b['endTime']) for b in day_bookings]
        occupied.sort()
        print(f"\n   ⏰ Giờ trống:")
        prev_end = "00:00"
        for start, end in occupied:
            if prev_end < start:
                print(f"      {prev_end} – {start}  ✅ Trống")
            prev_end = end
        if prev_end < "23:59":
            print(f"      {prev_end} – 23:59 ✅ Trống")

def cmd_add(args):
    """add <date> <spaceId> <center> <title> <start> <end>"""
    if len(args) < 6:
        print("Usage: add <YYYY-MM-DD> <spaceId> <center> <title> <HH:MM> <HH:MM>")
        print("Example: add 2026-06-25 p201 'Nội Thất' 'Họp giao ban' 14:00 16:00")
        return

    target_date = args[0]
    space_id = args[1]
    center = args[2]
    title = args[3]
    start_time = args[4]
    end_time = args[5]

    data = load()

    # Validate space exists
    space = None
    for s in data['spaces']:
        if s['id'] == space_id:
            space = s
            break
    if not space:
        print(f"❌ Không tìm thấy phòng: {space_id}")
        print(f"   Các phòng: {', '.join(s['id'] + ' - ' + s['name'] for s in data['spaces'])}")
        return

    # Check conflict
    conflicts = []
    for b in data['bookings']:
        if b['spaceId'] == space_id and b['date'] == target_date and b['status'] == 'approved':
            if is_overlap(start_time, end_time, b['startTime'], b['endTime']):
                conflicts.append(b)

    if conflicts:
        print(f"❌ Xung đột lịch! {space['name']} ({space_id}) ngày {target_date} đã có:")
        for c in conflicts:
            print(f"   {c['startTime']}-{c['endTime']} | {c['center']} | {c['title']}")
        return False

    # Add booking
    booking = {
        "id": data['nextId'],
        "spaceId": space_id,
        "center": center,
        "title": title,
        "date": target_date,
        "startTime": start_time,
        "endTime": end_time,
        "status": "approved",
        "createdBy": "telegram"
    }
    bid = data['nextId']
    data['nextId'] += 1
    data['bookings'].append(booking)
    save(data)

    print(f"✅ ĐÃ ĐẶT | #{bid}")
    print(f"   Phòng:  {space['name']} (Tầng {space['floor']})")
    print(f"   Ngày:   {target_date}")
    print(f"   Giờ:    {start_time} – {end_time}")
    print(f"   Đơn vị: {center}")
    print(f"   Sự kiện: {title}")
    return True

def cmd_list(args):
    data = load()
    today = date.today().isoformat()
    upcoming = [b for b in data['bookings'] if b['date'] >= today]
    upcoming.sort(key=lambda x: (x['date'], x['startTime']))

    if not upcoming:
        print("📭 Không có booking nào sắp tới.")
        return

    print(f"\n📅 DANH SÁCH BOOKING (từ {today})")
    print(f"{'ID':<4} {'Ngày':<12} {'Phòng':<10} {'Giờ':<16} {'Đơn vị':<15} {'Trạng thái':<10} {'Sự kiện'}")
    print('─' * 95)
    for b in upcoming:
        space = get_space_name(b['spaceId'], data['spaces']).split(' (')[0]
        status_icon = '✅' if b['status'] == 'approved' else '⏳'
        print(f"#{b['id']:<2} {b['date']:<12} {space:<10} {b['startTime']}-{b['endTime']:<10} {b['center']:<15} {status_icon} {b['status']:<8} {b['title'][:25]}")

def cmd_cancel(args):
    if len(args) < 1:
        print("Usage: cancel <booking_id>")
        return
    try:
        bid = int(args[0])
    except ValueError:
        print(f"❌ ID không hợp lệ: {args[0]}")
        return

    data = load()
    for i, b in enumerate(data['bookings']):
        if b['id'] == bid:
            removed = data['bookings'].pop(i)
            save(data)
            print(f"🗑️ Đã hủy booking #{bid}: {removed['title']} ({removed['date']} {removed['startTime']}-{removed['endTime']})")
            return
    print(f"❌ Không tìm thấy booking #{bid}")

def cmd_export(args):
    """Export bookings to update spaces.ts format"""
    data = load()
    today = date.today()
    from datetime import timedelta
    # Find current Monday
    monday = today - timedelta(days=today.weekday())
    sunday = monday + timedelta(days=6)

    week_bookings = [b for b in data['bookings'] if monday.isoformat() <= b['date'] <= sunday.isoformat() and b['status'] == 'approved']

    print(f"📊 Bookings được duyệt trong tuần {monday} – {sunday}: {len(week_bookings)}")
    for b in week_bookings:
        print(f"   {b['date']} | {b['spaceId']} | {b['startTime']}-{b['endTime']} | {b['center']} | {b['title']}")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(0)

    cmd = sys.argv[1]
    args = sys.argv[2:]

    commands = {
        'check': cmd_check,
        'add': cmd_add,
        'list': cmd_list,
        'cancel': cmd_cancel,
        'export': cmd_export,
    }

    if cmd in commands:
        commands[cmd](args)
    else:
        print(f"❌ Lệnh không hợp lệ: {cmd}")
        print(f"   Các lệnh: {', '.join(commands.keys())}")
