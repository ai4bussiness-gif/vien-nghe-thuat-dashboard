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
  {
    id: "3",
    title: "Ra mắt Bộ sưu tập Khăn Di sản \"Nghìn Xưa Lưu Dấu\"",
    center: "Viện Nghệ Thuật",
    centerColor: "#E85D3A",
    eventType: "event",
    description:
      "Sự kiện ra mắt BST Khăn Di sản từ tác phẩm của họa sĩ Lê Thị Thanh — Giải Nhất cuộc thi Di sản Văn hoá Việt Nam qua Hội hoạ. Chương trình: Tiếp đón & Tiệc trà (14:00), Giới thiệu BST (15:00), Trải nghiệm & Mini Game (15:30).",
    location: "Tầng 1 — Art Gallery, Viện Nghệ Thuật, ĐH Kiến Trúc HN (129 Trần Phú, Hà Đông)",
    startDate: new Date("2026-06-26T14:00:00"),
    endDate: new Date("2026-06-26T16:30:00"),
  },
  {
    id: "4",
    title: "Khai giảng lớp Xưởng Nhí",
    center: "Trung tâm in và ấn loát nghệ thuật",
    centerColor: "#F59E0B",
    eventType: "class",
    description:
      "Lễ khai giảng lớp mỹ thuật Xưởng Nhí dành cho thiếu nhi — chương trình đào tạo của Trung tâm in và ấn loát nghệ thuật, Viện Nghệ Thuật, ĐH Kiến Trúc HN.",
    location: "Tầng 1 — Không gian triển lãm, Viện Nghệ Thuật, ĐH Kiến Trúc HN",
    startDate: new Date("2026-07-18T09:00:00"),
    endDate: new Date("2026-07-18T11:00:00"),
  },
];
