export interface Event {
  id: string;
  title: string;
  center: string;
  centerColor: string;
  eventType: "event" | "meeting" | "class" | "deadline";
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Hoàn thành kế hoạch tổng Viện Nghệ Thuật",
    center: "Viện Nghệ Thuật",
    centerColor: "#6366F1",
    eventType: "deadline",
    description:
      "Hạn chót hoàn thành và nộp kế hoạch tổng thể của Viện Nghệ Thuật năm học 2026–2027.",
    location: "Viện Nghệ Thuật",
    startDate: new Date("2026-06-24T17:00:00"),
    endDate: new Date("2026-06-24T17:00:00"),
  },
  {
    id: "2",
    title: "Họp toàn trung tâm Viện Nghệ Thuật",
    center: "Viện Nghệ Thuật",
    centerColor: "#6366F1",
    eventType: "meeting",
    description:
      "Cuộc họp toàn thể các trung tâm (Nội Thất, Điêu Khắc, In & Ấn Loát, Đào Tạo) — cập nhật tiến độ và triển khai kế hoạch tổng.",
    location: "Tầng 1 — Viện Nghệ Thuật, ĐH Kiến Trúc HN",
    startDate: new Date("2026-06-26T10:00:00"),
    endDate: new Date("2026-06-26T11:30:00"),
  },
];
