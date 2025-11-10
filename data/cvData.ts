// src/data/cvData.ts

// --- ĐỊNH NGHĨA CÁC KIỂU DỮ LIỆU ---

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface EducationInfo {
  school: string;
  major: string;
  graduation: string;
}

export interface AwardInfo {
  title: string;
  organization: string;
  year: string;
}

export interface SkillsInfo {
  languages: string;
  backend: string;
  frontend: string;
  databases: string;
  tools: string;
}

export interface CertificationsInfo {
  language: string;
  // each professional certification can optionally include a URL to the certificate file or page
  professional: {
    title: string;
    url?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  tech: string[];
  description: string[];
}

// --- DỮ LIỆU CỦA BẠN (ĐÃ ĐƯỢC GÁN KIỂU) ---

export const personalInfo: PersonalInfo = {
  name: "Đường Quang Minh",
  title: "Kỹ sư Phát triển Phần mềm (Software Engineer)",
  location: "Hà Nội",
  phone: "0329792204",
  email: "minhduong190224@gmail.com",
  linkedin: "https://www.linkedin.com/in/minhduong1902/",
  github: "https://github.com/MinhAnime",
};

export const summary: string = `
  Sinh viên Công nghệ Thông tin với định hướng trở thành kỹ sư phát triển phần mềm,
  đam mê xây dựng các giải pháp công nghệ hoàn chỉnh từ ý tưởng ban đầu.
  Luôn chủ động học hỏi và áp dụng công nghệ mới thông qua các dự án cá nhân và nhóm.
`;

export const education: EducationInfo = {
  school: "Trường Đại học Xây Dựng Hà Nội",
  major: "Chuyên ngành Công nghệ phần mềm",
  graduation: "Dự kiến tốt nghiệp: 06/2026",
};

export const awards: AwardInfo[] = [
  {
    title: 'Giải Ba Cuộc thi "Robot Dò Line"',
    organization: "Do Khoa CNTT, Trường ĐH Xây Dựng tổ chức",
    year: "2024",
  },
  {
    title: 'Giải Nhì Cuộc thi "Robot Dò Line"',
    organization: "Do Khoa CNTT, Trường ĐH Xây Dựng tổ chức",
    year: "2023",
  },
];

export const skills: SkillsInfo = {
  languages: "Python, Java, C++, SQL, JavaScript",
  backend: "Django, Django REST Framework, Thiết kế CSDL",
  frontend: "React.js, Next.js",
  databases: "PostgreSQL, MySQL, SQLite, Redis, MongoDB",
  tools: "Linux (Ubuntu, Ubuntu Server), Git, Docker, Nginx",
};

export const certifications: CertificationsInfo = {
  language: "Tiếng Anh – Giao tiếp và làm việc chuyên nghiệp (TOEIC 865/990)",
  professional: [
    {
      title: "Google IT Automation with Python Specialization",
      // replace this example URL with your real certificate link or a path to a file in /public
      url: "https://coursera.org/share/a2441d41c3b6f9be5fa2b770d7ca9d5d",
    },
    {
      title: "Google AI Essentials",
      // no url provided: this will render as plain text until you add a link
      url: "https://coursera.org/share/59aa6d62f569ac24449ad3931ec30876"
    },
  ],
};

export const projects: Project[] = [
  {
    id: "project-3",
    title: "Plugin Xác thực Người chơi cho Server Minecraft",
    role: "Dự án cá nhân",
    date: "06/2025 - Hiện tại",
    tech: ["Java", "Fabric API", "MySQL", "Linux", "Bash Script"],
    description: [
      "Phát triển plugin bảo mật bằng Java, sử dụng Fabric API để xác thực người chơi Minecraft.",
      "Thiết kế cơ chế đăng ký/đăng nhập với các lệnh tùy chỉnh trong game (/register, /login).",
      "Kết nối và lưu trữ thông tin người chơi trong MySQL database (hash + salt password).",
      "Triển khai server Minecraft trên Ubuntu Server, cấu hình tường lửa và bảo mật SSH.",
      "Giám sát hiệu năng và tự động khởi động lại dịch vụ bằng bash script.",
    ],
  },
  {
    id: "project-2",
    title: "Hệ thống Quản lý Kho",
    role: "TC Software - Thực tập sinh Backend",
    date: "06/2025 - 08/2025",
    tech: ["Python", "Django", "DRF", "PostgreSQL"],
    description: [
      "Tham gia từ giai đoạn phân tích yêu cầu đến hoàn thiện triển khai backend.",
      "Thiết kế kiến trúc hệ thống và mô hình cơ sở dữ liệu (PostgreSQL) cho sản phẩm, nhà cung cấp, đơn hàng.",
      "Phát triển các RESTful API bằng Django REST Framework để quản lý nhập – xuất – tồn kho.",
    ],
  },
  {
    id: "project-1",
    title: "Ứng dụng Focus Mode (Android)",
    role: "Dự án nhóm (2 người)",
    date: "03/2025",
    tech: ["Java", "Firebase Realtime Database", "MVVM", "Data Binding"],
    description: [
      "Đảm nhiệm vai trò lập trình viên Android chính, chịu trách nhiệm phát triển luồng chức năng chính.",
      "Xây dựng màn hình Focus Timer sử dụng CountDownTimer, lưu dữ liệu tập trung lên Firebase.",
      "Hiển thị thống kê thời gian tập trung bằng biểu đồ (BarChart) lấy dữ liệu từ Firebase.",
      "Thiết kế màn hình Onboarding bằng ViewPager2, kiến trúc MVVM và Data Binding.",
      "Tối ưu hiệu suất, đảm bảo trải nghiệm người dùng mượt mà và ổn định.",
    ],
  },
];