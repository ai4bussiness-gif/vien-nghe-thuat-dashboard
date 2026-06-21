export interface Space {
  id: string;
  name: string;
  floor: number;
  type: "exhibition" | "event" | "class" | "office";
  capacity: number;
  description: string;
  isActive: boolean;
}

export interface SpaceBooking {
  id: string;
  spaceId: string;
  center: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: "pending" | "approved";
}

export const spaces: Space[] = [
  {
    id: "tang1-phong",
    name: "Phòng Viện",
    floor: 1,
    type: "office",
    capacity: 15,
    description: "Phòng làm việc chính của Viện Nghệ Thuật",
    isActive: true,
  },
  {
    id: "tang1-trienlam",
    name: "Không gian triển lãm Tầng 1",
    floor: 1,
    type: "exhibition",
    capacity: 80,
    description: "Không gian triển lãm, trưng bày tầng 1",
    isActive: true,
  },
  {
    id: "tang2",
    name: "Không gian thông tầng 2",
    floor: 2,
    type: "event",
    capacity: 150,
    description: "Tầng thông suốt 300m² — dùng cho sự kiện, triển lãm, hội thảo",
    isActive: true,
  },
  {
    id: "tang3",
    name: "Không gian thông tầng 3",
    floor: 3,
    type: "class",
    capacity: 100,
    description: "Tầng thông suốt — dùng cho lớp học, workshop, thực hành",
    isActive: true,
  },
];

// Week: 2026-06-22 (Mon) → 2026-06-28 (Sun)
export const spaceBookings: SpaceBooking[] = [
  {
    id: "sb1",
    spaceId: "tang1-phong",
    center: "Viện Nghệ Thuật",
    title: "Họp toàn trung tâm",
    date: new Date("2026-06-26T00:00:00Z"),
    startTime: "10:00",
    endTime: "11:30",
    status: "approved",
  },
];
