export interface Space {
  id: string;
  name: string;
  floor: number;
  type: "exhibition" | "event" | "class";
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
    id: "p101",
    name: "P.101",
    floor: 1,
    type: "exhibition",
    capacity: 50,
    description: "Phòng triển lãm tầng 1, khu A",
    isActive: true,
  },
  {
    id: "p102",
    name: "P.102",
    floor: 1,
    type: "exhibition",
    capacity: 40,
    description: "Phòng triển lãm tầng 1, khu B",
    isActive: true,
  },
  {
    id: "p201",
    name: "P.201",
    floor: 2,
    type: "event",
    capacity: 100,
    description: "Hội trường sự kiện tầng 2",
    isActive: true,
  },
  {
    id: "p202",
    name: "P.202",
    floor: 2,
    type: "event",
    capacity: 80,
    description: "Phòng hội thảo tầng 2",
    isActive: true,
  },
  {
    id: "p301",
    name: "P.301",
    floor: 3,
    type: "class",
    capacity: 30,
    description: "Phòng học thực hành tầng 3",
    isActive: true,
  },
];

// Week: 2026-06-16 (Mon) → 2026-06-22 (Sun)
export const spaceBookings: SpaceBooking[] = [
  {
    id: "sb1",
    spaceId: "p101",
    center: "Trung tâm thiết kế nội ngoại thất",
    title: "Triển lãm nội thất đương đại",
    date: new Date("2026-06-16T00:00:00Z"),
    startTime: "09:00",
    endTime: "17:00",
    status: "approved",
  },
  {
    id: "sb2",
    spaceId: "p102",
    center: "Trung tâm điêu khắc",
    title: "Trưng bày điêu khắc",
    date: new Date("2026-06-16T00:00:00Z"),
    startTime: "10:00",
    endTime: "16:00",
    status: "approved",
  },
  {
    id: "sb3",
    spaceId: "p201",
    center: "Trung tâm quản lý và đào tạo",
    title: "Hội thảo kỹ năng hiện đại",
    date: new Date("2026-06-17T00:00:00Z"),
    startTime: "08:30",
    endTime: "11:30",
    status: "approved",
  },
  {
    id: "sb4",
    spaceId: "p301",
    center: "Trung tâm điêu khắc",
    title: "Lớp điêu khắc cơ bản",
    date: new Date("2026-06-18T00:00:00Z"),
    startTime: "14:00",
    endTime: "17:00",
    status: "approved",
  },
  {
    id: "sb6",
    spaceId: "p202",
    center: "Trung tâm thiết kế nội ngoại thất",
    title: "Họp dự án nội thất",
    date: new Date("2026-06-19T00:00:00Z"),
    startTime: "14:00",
    endTime: "16:00",
    status: "approved",
  },
  {
    id: "sb8",
    spaceId: "p201",
    center: "Trung tâm in và ấn loát nghệ thuật",
    title: "Triển lãm in nghệ thuật",
    date: new Date("2026-06-21T00:00:00Z"),
    startTime: "10:00",
    endTime: "18:00",
    status: "approved",
  },
];
