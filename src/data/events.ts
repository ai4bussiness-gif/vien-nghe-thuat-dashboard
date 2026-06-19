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
    title: "Họp kế hoạch quý 3",
    center: "Nội Thất",
    centerColor: "#3B82F6",
    eventType: "meeting",
    description: "Lên kế hoạch và phân công nhiệm vụ cho quý 3 năm 2025",
    location: "Phòng họp A",
    startDate: new Date("2025-06-09T09:00:00"),
    endDate: new Date("2025-06-09T11:00:00"),
  },
  {
    id: "2",
    title: "Lớp điêu khắc gỗ cơ bản",
    center: "Điêu Khắc",
    centerColor: "#10B981",
    eventType: "class",
    description:
      "Buổi học đầu tiên trong khóa điêu khắc gỗ cơ bản cho người mới bắt đầu",
    location: "Xưởng Điêu Khắc",
    startDate: new Date("2025-06-10T14:00:00"),
    endDate: new Date("2025-06-10T17:00:00"),
  },
  {
    id: "3",
    title: "Triển lãm in nghệ thuật mùa hè",
    center: "In & Ấn Loát",
    centerColor: "#F59E0B",
    eventType: "event",
    description:
      "Triển lãm các tác phẩm in ấn nghệ thuật của sinh viên và giảng viên",
    location: "Phòng Trưng Bày",
    startDate: new Date("2025-06-12T10:00:00"),
    endDate: new Date("2025-06-12T18:00:00"),
  },
  {
    id: "4",
    title: "Khai giảng khóa thiết kế đồ họa",
    center: "Đào Tạo",
    centerColor: "#8B5CF6",
    eventType: "class",
    description:
      "Khai giảng khóa học thiết kế đồ họa căn bản với phần mềm Adobe Illustrator",
    location: "Phòng Máy Tính",
    startDate: new Date("2025-06-13T09:00:00"),
    endDate: new Date("2025-06-13T12:00:00"),
  },
  {
    id: "5",
    title: "Deadline nộp hồ sơ dự án nội thất",
    center: "Nội Thất",
    centerColor: "#3B82F6",
    eventType: "deadline",
    description:
      "Hạn cuối nộp hồ sơ đăng ký tham gia dự án thiết kế nội thất cộng đồng",
    location: "Online",
    startDate: new Date("2025-06-16T17:00:00"),
    endDate: new Date("2025-06-16T17:00:00"),
  },
  {
    id: "6",
    title: "Khai mạc triển lãm điêu khắc",
    center: "Điêu Khắc",
    centerColor: "#10B981",
    eventType: "event",
    description:
      "Lễ khai mạc triển lãm điêu khắc thường niên với sự tham gia của 20 nghệ sĩ",
    location: "Sảnh Chính",
    startDate: new Date("2025-06-17T08:30:00"),
    endDate: new Date("2025-06-17T11:00:00"),
  },
  {
    id: "7",
    title: "Họp đánh giá quy trình in ấn",
    center: "In & Ấn Loát",
    centerColor: "#F59E0B",
    eventType: "meeting",
    description:
      "Đánh giá hiệu quả quy trình sản xuất và đề xuất cải tiến kỹ thuật",
    location: "Phòng họp B",
    startDate: new Date("2025-06-18T14:00:00"),
    endDate: new Date("2025-06-18T16:00:00"),
  },
  {
    id: "8",
    title: "Hội thảo đào tạo kỹ năng hiện đại",
    center: "Đào Tạo",
    centerColor: "#8B5CF6",
    eventType: "event",
    description:
      "Hội thảo chuyên đề về phương pháp đào tạo hiệu quả trong thời đại số",
    location: "Hội Trường Lớn",
    startDate: new Date("2025-06-20T09:00:00"),
    endDate: new Date("2025-06-20T17:00:00"),
  },
  {
    id: "9",
    title: "Workshop thiết kế nội thất sáng tạo",
    center: "Nội Thất",
    centerColor: "#3B82F6",
    eventType: "class",
    description:
      "Workshop thực hành thiết kế nội thất với vật liệu tái chế và bền vững",
    location: "Xưởng Thực Hành",
    startDate: new Date("2025-07-01T10:00:00"),
    endDate: new Date("2025-07-01T16:00:00"),
  },
  {
    id: "10",
    title: "Deadline nộp tác phẩm thi điêu khắc",
    center: "Điêu Khắc",
    centerColor: "#10B981",
    eventType: "deadline",
    description:
      "Hạn cuối nộp tác phẩm tham dự cuộc thi điêu khắc quốc tế 2025",
    location: "Online",
    startDate: new Date("2025-07-05T23:59:00"),
    endDate: new Date("2025-07-05T23:59:00"),
  },
];
