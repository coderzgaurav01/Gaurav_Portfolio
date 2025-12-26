
import React from 'react';

export const USER_INFO = {
  name: "Gaurav Pathak", // Placeholder for actual name
  role: "Associate Software Developer",
  company: "Nestorbird",
  education: "Btech in Computer Science Specialised in AI&ML at Gulzar Group of Institute",
  year: "Final Year",
  email: "gauravpathak911311@gmail.com",
  linkedin: "https://www.linkedin.com/in/gaurav-pathak-494a2b250/",
  github: "https://github.com"
};

export const PROJECTS = [
  {
    id: '1',
    title: "E-Commerce Cloud Platform",
    description: "A highly scalable microservices-based e-commerce solution with real-time local vendor booking capabilities.",
    techStack: ["React", "Node.js", "MongoDB", "AWS", "Tailwind"],
    imageUrl: "src/assets/images.jpeg",
    github: "https://bookingyard.in"
  },
  {
    id: '2',
    title: "Medical Diagnosis AI",
    description: "Intelligent diagnosis system leveraging machine learning to identify potential health conditions.",
    techStack: ["Python", "TensorFlow", "Docker","Streamlit"],
    imageUrl: "src/assets/Medical.jpg",
    github: "#"
  },
  {
    id: '3',
    title: "Smart Campus Management System",
    description: "Real-time tracking and optimization dashboard for Student and Teacher with RAG Based Question Generator.",
    techStack: ["React", "Frappe", "MariaDB", "Fast API"],
    imageUrl: "src/assets/campuserp.jpg",
    github: "#"
  }
];

export const EXPERIENCES = [
  {
    company: "Nestorbird",
    role: "Associate Software Developer",
    period: "Nov2025 - Present",
    description: [
      "Developing scalable web applications using React and Frappe.",
      "Optimizing database queries to improve application performance by 40%.",
      "Collaborating with cross-functional teams to deliver enterprise-grade software solutions."
    ],
    skills: ["React", "Node.js", "MariaDB", "System Design","Frappe","ERPNext"]
  },
  {
    company: "Nestorbird",
    role: "Software Developer Intern",
    period: "Aug 2025 - Oct 2025",
    description: [
      "Developing scalable web applications using React and Frappe.",
      "Optimizing database queries to improve application performance by 40%.",
      "Collaborating with cross-functional teams to deliver enterprise-grade software solutions."
    ],
    skills: ["React", "Node.js", "MariaDB", "System Design","Frappe","ERPNext"]
  },
  {
    company: "Bluestock Infotech",
    role: "Intern Developer",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Built scalable backend services using Node.js and Express.js, enabling high-performance API communication.",
      "Designed REST APIs and optimized database queries using indexing strategies.",
      "Diagnosed backend bottlenecks and improved response times across major endpoints."
    ],
    skills: ["React", "Node.js","Express.js", "Git", "Unit Testing"]
  }
];

export const EDUCATION = [
  {
    institution: "Gulzar Group of Institute",
    degree: "Bachelor of Technology in Computer Science",
    period: "2022 - 2026",
    location: "Punjab, India",
    highlights: [
      "Currently in Final Year",
      "Specializing in Software Engineering and Artificial Intelligence",
      "Active member of the Coding Club & Placement Cell"
    ]
  },
  {
    institution: "Giridih +2 High School",
    degree: "Intermediate Education (Science Stream)",
    period: "2020 - 2022",
    location: "Giridih, Jharkhand, India",
    highlights: [
      "Got 88% in Higher Secondary Examination",
      "Completed Higher Secondary Education with a focus on Science",
      "Participated in various science fairs and competitions",
      "Active member of the Science Club"
    ]
  }
];

export const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
  { category: "Frameworks", items: ["TensorFlow", "Scikit-learn", "FastAPI", "React", "Frappe","ERPNext"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Jira", "Linux"] }
];
