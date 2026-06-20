"""
Sync bookings.json → spaces.ts for dashboard build
Usage: python sync_bookings.py
Updates src/data/spaces.ts with real booking data from bookings.json
"""

import json, os
from datetime import datetime, timedelta, date

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(PROJECT_DIR, 'scripts', 'bookings.json')
SPACES_TS_PATH = os.path.join(PROJECT_DIR, 'src', 'data', 'spaces.ts')

def load_bookings():
    with open(DB_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)

def find_monday(d):
    return d - timedelta(days=d.weekday())

def main():
    data = load_bookings()
    today = date.today()
    monday = find_monday(today)
    sunday = monday + timedelta(days=6)

    # Filter approved bookings in this week
    week_bookings = [
        b for b in data['bookings']
        if monday.isoformat() <= b['date'] <= sunday.isoformat()
        and b['status'] == 'approved'
    ]

    # Read existing spaces.ts to preserve non-data parts
    with open(SPACES_TS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generate the spaceBookings array
    lines = []
    lines.append('export const spaceBookings: SpaceBooking[] = [')
    for b in sorted(week_bookings, key=lambda x: (x['date'], x['startTime'])):
        lines.append(f"""  {{
    id: "sb{b['id']}",
    spaceId: "{b['spaceId']}",
    center: "{b['center']}",
    title: "{b['title']}",
    date: new Date("{b['date']}T00:00:00Z"),
    startTime: "{b['startTime']}",
    endTime: "{b['endTime']}",
    status: "approved",
  }},""")
    lines.append('];')

    # Replace the spaceBookings section
    import re
    new_content = re.sub(
        r'export const spaceBookings: SpaceBooking\[\] = \[.*?\];',
        '\n'.join(lines),
        content,
        flags=re.DOTALL
    )

    with open(SPACES_TS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"✅ Synced {len(week_bookings)} bookings to spaces.ts (week {monday} – {sunday})")

if __name__ == '__main__':
    main()
