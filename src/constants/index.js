import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import python from "../assets/certificates/python.jpg";
import cpp from "../assets/certificates/Cpp.jpg";
import html from "../assets/certificates/html.jpg";
import android from "../assets/certificates/android.jpg";
import ad from "../assets/certificates/ad.jpg";
import ms from "../assets/certificates/ms.jpg";
import employer from "../assets/certificates/employer.jpg";

import networks from "../assets/certificates/networks.jpg";
import prof from "../assets/certificates/stamp.jpg";

export const HERO_CONTENT = `I am an experienced IT support specialist with a strong background in building reliable and efficient support environments. With 5 years of hands-on experience in IT operations, I have developed a deep understanding of service processes and structured troubleshooting. During my previous roles, I worked extensively with Windows, Linux servers, Microsoft 365, and ticket systems, applying IT service management principles and best practices. My goal is to leverage my expertise in support operations, analytical problem‑solving, and clear communication to design effective support structures and deliver solutions that create measurable impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile IT support specialist with a passion for delivering efficient and user‑friendly solutions. I have worked across various environments, supporting Windows, Linux servers, Microsoft 365, networks, and hardware. What intrigued me the most and kept me motivated was definitely troubleshooting and process optimization. I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and deeply enjoy analyzing complex issues to deliver clear, high‑quality results. I am particularly enthusiastic about customer service excellence and knowledgebase management. Outside of work, I enjoy activities such as playing music, calligraphy, hiking, and yoga.`;

export const EXPERIENCES = [
  {
    year: "12/2025 - Present",
    role: "Freelancer",
    company: "Stuttgart",
    description: `Learning Software development especially OOP.`,
    technologies: ["Confluence", "Jira", "AD", "Windows/IOS"],
  },
  {
    year: "08/2022 - 11/2025",
    role: "Servicedesk Management",
    company: "Staatliche Lotto-GmbH",
    description: `Optimized support processes and coordinated both software and hardware deployments. Managed user access and employee schedules across multiple teams. Maintained and expanded the internal knowledge base to improve service quality. Handled incidents proactively and resolved issues to ensure stable and efficient operations.`,
    technologies: ["incident management", "Software distribution", "Confluence", "Regex"],
  },
  {
    year: "2022 - 2022",
    role: "Senior Technician",
    company: "Computacenter AG",
    description: `Support of well-known end customers on-site.Maintenance of customer systems according to IMAC.`,
    technologies: ["CISM Platform Support", "Azure Administration & Support", "Enterprise Access & Identity Management (Azure AD)", "Enterprise Incident Management (CISM, Azure)"],
  },
  {
    year: "12/2025 - Present",
    role: "Imaging Process Specialist",
    company: "Freelancer, Paris",
    description: `Advanced imaging specialist training CT, MRI, X-Ray. Test of newest CT and X-Ray Hardware in imaging aspect for european market.`,
    technologies: ["Confluence", "Jira", "AD", "Windows/IOS"],
  },
  {
    year: "2016 - 2018",
    role: "Helpdesk Level 2 und 3",
    company: "Examion GmbH",
    description: `Optimized support processes and coordinated both software and hardware deployments. Administration of both Linux and Windoes Servers. Managed user access and employee schedules across multiple plattforms. Maintained and expanded the internal knowledge base to improve service quality. Handled incidents proactively and resolved issues to ensure stable and efficient operations. Tested newest hardware for the market in germany.`,
    technologies: ["XRAY imaging systems", "CT", "MRI", "X-Ray"],
  },
];

export const PROJECTS = [
  {
    title: "Zendesk Knowledgebase",
    image: project1,
    description:
      "A fully functional knowledgebase created for both internal employees as well as customers on best uses etc.",
    technologies: ["Zendesk Knowledge Management", "Customer & Internal Documentation", "Self-Service Support Content", "Knowledgebase Architecture & Design", "Technical Writing / User Guidance"],
  },
  {
    title: "Confluence Knowledge Base Management",
    image: project2,
    description:
      "Built and structured Confluence knowledge bases, organized documentation, and improved internal workflows through clear and accessible content.",
    technologies: ["Confluence", "Knowledge Base", "Documentation", "Collaboration"],
  }
  ,
  {
    title: "X-Ray & CT Device Testing and Documentation",
    image: project3,
    description:
      "Tested X-Ray and CT devices for European market compliance, created detailed user guides, and optimized image processing workflows.",
    technologies: ["Medical Devices", "Testing", "Image Processing", "Technical Writing"],
  }
  ,
 
];

/*
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiPython } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiKotlin } from 'react-icons/si';
import { SiTensorflow } from 'react-icons/si';
import { motion } from "framer-motion";
*/
export const CERTIFICATES = [
  {
    title: "Python",
    image: python,
    description:
      "Advanced Python programming with focus on data analysis, machine learning, and AI applications in healthcare.",
    technologies: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "OpenCV", "PyTorch"],
  },
  {
    title: "Web-Development",
    image: html,
    description:
      "Created responsive web applications for visualizing medical data and AI model outputs.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "D3.js", "Flask"],
  },
  {
    title: "Android-App Development",
    image: android,
    description: "Developed mobile health applications for patient monitoring and data collection.",
    technologies: ["Java", "Kotlin", "Android SDK", "Firebase", "HealthKit"],
  },
  {
    title: "Active Directory",
    image: ad,
    description: "Completed a comprehensive Active Directory course covering user, group, and access management.",
    technologies: ["User management", "Group management", "Access control", "Directory services", "Identity management"],
  },
  {
    title: "Microsoft 365",
    image: ms,
    description: "Completed a comprehensive Microsoft 365 course covering administration, security, and cloud services.",
    technologies: ["Microsoft 365 Administration", "Exchange & Outlook Management", "Teams & Collaboration Tools", "User/Access Management ", "M365 Security"],
  },
  {
    title: "IT Courses - LinkedIn Learning",
    image: networks,
    description:
      "Completed a 72-hour LinkedIn training in network administration, covering routing, switching, security, and hands-on infrastructure management.",
    technologies: ["Network Administration", "Routing & Switching", "Network Security Fundamentals", "Infrastructure Management", "TCP/IP & Troubleshooting"],
  },
  {
    title: "Employer References",
    image: employer,
    description: "Administered Linux servers, integrated CT/X-ray devices with proprietary software, validated new medical systems, created user guides, and optimized image processing.",
    technologies: ["Linux Server Administration", "Medical Imaging Systems (CT/X-ray)", "Device Integration", "Image Processing Optimization"],
  },
  
  {
    title: "Employer References 2",
    image: employer,
    description: "Provided Windows client/server support, resolved printer issues, managed incidents, and delivered reliable technical assistance.",
    technologies: ["Windows Client & Server Support", "Incident Management", "Hardware/Software Troubleshooting", "Active Directory"],
  },
];


export const CONTACT = {
  address: "Stuttgart ",
  email: "rahmanifardad@yahoo.de",
};
