export interface ResearchProject {
  id: string;
  title: string;
  leadCenter: 'Nội Thất' | 'Điêu Khắc' | 'In & Ấn Loát' | 'Đào Tạo';
  collaboratingCenters: string[];
  period: string;
  progress: number; // 0–100
  status: 'Đang thực hiện' | 'Hoàn thành' | 'Đề xuất';
  shortDesc: string;
  detailedDesc: string;
  pdfUrl?: string;
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'nt-01',
    title: 'Nghiên cứu vật liệu tái chế trong thiết kế nội thất đương đại',
    leadCenter: 'Nội Thất',
    collaboratingCenters: ['In & Ấn Loát'],
    period: '03/2026 – 12/2026',
    progress: 65,
    status: 'Đang thực hiện',
    shortDesc: 'Đánh giá và ứng dụng các vật liệu tái chế (nhựa, gỗ công nghiệp, vải thừa) vào sản phẩm nội thất — hướng tới thiết kế bền vững.',
    detailedDesc: `Dự án nhằm hệ thống hóa các nguồn vật liệu tái chế khả dụng tại Việt Nam, đánh giá tính năng cơ lý và thẩm mỹ, đồng thời xây dựng bộ mẫu thiết kế thử nghiệm cho 5 sản phẩm nội thất (bàn, ghế, kệ, đèn, vách ngăn). Kết quả dự kiến: 1 báo cáo khoa học, 5 prototype sản phẩm, 1 triển lãm giới thiệu.`,
    pdfUrl: '/research/plan-vat-lieu-tai-che.pdf',
  },
  {
    id: 'dk-01',
    title: 'Ứng dụng AI trong điêu khắc tạo hình — thực nghiệm với generative modeling',
    leadCenter: 'Điêu Khắc',
    collaboratingCenters: ['Đào Tạo'],
    period: '01/2026 – 08/2026',
    progress: 20,
    status: 'Đang thực hiện',
    shortDesc: 'Khám phá khả năng kết hợp thuật toán sinh 3D với kỹ thuật điêu khắc truyền thống để tạo ra các tác phẩm lai ghép.',
    detailedDesc: `Dự án thử nghiệm sử dụng mô hình sinh 3D (NeRF, Gaussian Splatting) để tạo ra các hình khối gợi ý, sau đó nghệ sĩ can thiệp bằng tay để hoàn thiện tác phẩm. Mục tiêu: không thay thế nghệ sĩ mà mở rộng vốn từ vựng tạo hình. Giai đoạn 1: huấn luyện mô hình trên 500 tác phẩm điêu khắc kinh điển. Giai đoạn 2: sáng tác 3 tác phẩm thực nghiệm.`,
  },
  {
    id: 'in-01',
    title: 'Bảo tồn và phát triển kỹ thuật in khắc gỗ tranh dân gian Đông Hồ',
    leadCenter: 'In & Ấn Loát',
    collaboratingCenters: ['Nội Thất', 'Đào Tạo'],
    period: '09/2025 – 09/2026',
    progress: 85,
    status: 'Đang thực hiện',
    shortDesc: 'Số hóa quy trình in khắc gỗ truyền thống, kết hợp thiết kế nội thất ứng dụng cho không gian đương đại.',
    detailedDesc: `Hợp tác cùng làng tranh Đông Hồ (Bắc Ninh), dự án ghi lại và số hóa toàn bộ quy trình in khắc gỗ: từ chọn ván, khắc bản, pha màu đến in tay. Đồng thời nghiên cứu ứng dụng họa tiết tranh dân gian vào các sản phẩm nội thất (screens, giấy dán tường, gối tựa) nhằm tạo đầu ra thị trường cho nghệ nhân. Sản phẩm: 1 bộ tư liệu số, 1 triển lãm, 1 catalogue thiết kế.`,
  },
  {
    id: 'dt-01',
    title: 'Xây dựng khung năng lực đào tạo mỹ thuật ứng dụng cho thế kỷ 21',
    leadCenter: 'Đào Tạo',
    collaboratingCenters: ['Nội Thất', 'Điêu Khắc', 'In & Ấn Loát'],
    period: '06/2025 – 06/2026',
    progress: 100,
    status: 'Hoàn thành',
    shortDesc: 'Đề xuất khung chương trình đào tạo mới tích hợp kỹ năng số, tư duy phản biện và thực hành liên ngành.',
    detailedDesc: `Rà soát toàn bộ chương trình đào tạo hiện tại của 4 trung tâm, đối chiếu với 12 chương trình quốc tế (Nhật Bản, Pháp, Hàn Quốc, Úc) để đề xuất khung năng lực mới. Kết quả: 1 báo cáo phân tích so sánh, 1 khung chương trình mẫu, 3 đề xuất môn học mới (Thiết kế số, Nghệ thuật AI, Quản lý dự án sáng tạo).`,
    pdfUrl: '/research/plan-khung-nang-luc.pdf',
  },
  {
    id: 'nt-02',
    title: 'Thiết kế không gian học tập linh hoạt cho đào tạo nghệ thuật thế hệ mới',
    leadCenter: 'Nội Thất',
    collaboratingCenters: ['Đào Tạo'],
    period: '01/2026 – 03/2026',
    progress: 100,
    status: 'Hoàn thành',
    shortDesc: 'Đề xuất mô hình không gian xưởng thực hành đa năng có thể tái cấu hình linh hoạt.',
    detailedDesc: `Nghiên cứu và thiết kế mô hình không gian học tập có thể chuyển đổi giữa 3 chế độ: giảng dạy lý thuyết, thực hành cá nhân, và làm việc nhóm. Sử dụng nội thất module, vách di động, và hệ thống chiếu sáng thông minh. Kết quả: 1 bản vẽ concept, 1 mô hình tỷ lệ 1:20, 1 báo giá thi công.`,
  },
  {
    id: 'dk-02',
    title: 'Điêu khắc công cộng trong đô thị Hà Nội — từ ý tưởng đến triển khai',
    leadCenter: 'Điêu Khắc',
    collaboratingCenters: ['Đào Tạo', 'In & Ấn Loát'],
    period: '10/2025 – 05/2026',
    progress: 100,
    status: 'Hoàn thành',
    shortDesc: 'Khảo sát và đề xuất quy trình tích hợp tác phẩm điêu khắc vào không gian công cộng tại Hà Nội.',
    detailedDesc: `Khảo sát 15 địa điểm công cộng tại Hà Nội (hồ Hoàn Kiếm, phố đi bộ, công viên), phân tích hiện trạng điêu khắc đô thị và đề xuất quy trình từ thiết kế → xin phép → thi công → bảo trì. Kết quả: 1 báo cáo khảo sát, 1 bộ tiêu chí thiết kế, 5 concept tác phẩm cho khu vực phố cổ.`,
    pdfUrl: '/research/plan-dieu-khac-cong-cong.pdf',
  },
  {
    id: 'in-02',
    title: 'Phát triển chất liệu in trên nền vải tự nhiên kết hợp kỹ thuật nhuộm thực vật',
    leadCenter: 'In & Ấn Loát',
    collaboratingCenters: [],
    period: '04/2026 – 10/2026',
    progress: 40,
    status: 'Đang thực hiện',
    shortDesc: 'Nghiên cứu quy trình in ấn trên vải lanh, tơ tằm bằng mực nhuộm từ thực vật — hướng tới thời trang bền vững.',
    detailedDesc: `Dự án thử nghiệm kết hợp kỹ thuật in lụa truyền thống với màu nhuộm chiết xuất từ 10 loại thực vật (củ nâu, chàm, nghệ, bông giấy...) trên các chất liệu vải tự nhiên. Xây dựng thư viện màu thực vật và hướng dẫn kỹ thuật. Kết quả: 1 thư viện mẫu in, 1 bộ sưu tập 15 tác phẩm, 1 workshop trình diễn.`,
  },
  {
    id: 'dt-02',
    title: 'Thiết lập chương trình cư trú nghệ thuật quốc tế tại Viện',
    leadCenter: 'Đào Tạo',
    collaboratingCenters: ['Điêu Khắc', 'In & Ấn Loát', 'Nội Thất'],
    period: '05/2026 – 12/2026',
    progress: 15,
    status: 'Đề xuất',
    shortDesc: 'Xây dựng đề án chương trình artist-in-residence cho nghệ sĩ trong nước và quốc tế.',
    detailedDesc: `Đề xuất mô hình chương trình cư trú nghệ thuật kéo dài 1-3 tháng tại Viện, dành cho nghệ sĩ và nhà thiết kế trong nước và quốc tế. Bao gồm: cơ sở vật chất (xưởng, phòng ở), chương trình trao đổi, triển lãm cuối kỳ, và hợp tác với các viện đối tác (Pháp, Nhật, Hàn). Ngân sách dự kiến và kế hoạch gây quỹ.`,
    pdfUrl: '/research/plan-artist-residence.pdf',
  },
];

export const centerColors: Record<string, { hex: string; bg: string; border: string }> = {
  'Nội Thất': { hex: '#3B82F6', bg: 'bg-blue-50 dark:bg-blue-950/40', border: 'border-blue-300 dark:border-blue-800' },
  'Điêu Khắc': { hex: '#10B981', bg: 'bg-emerald-50 dark:bg-emerald-950/40', border: 'border-emerald-300 dark:border-emerald-800' },
  'In & Ấn Loát': { hex: '#F59E0B', bg: 'bg-amber-50 dark:bg-amber-950/40', border: 'border-amber-300 dark:border-amber-800' },
  'Đào Tạo': { hex: '#8B5CF6', bg: 'bg-purple-50 dark:bg-purple-950/40', border: 'border-purple-300 dark:border-purple-800' },
};
