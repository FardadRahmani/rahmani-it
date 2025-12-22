import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import python from "../assets/certificates/python.jpg";
import cpp from "../assets/certificates/Cpp.jpg";
import html from "../assets/certificates/html.jpg";
import android from "../assets/certificates/android.jpg";
import employer from "../assets/certificates/employer.jpg";
import networks from "../assets/certificates/networks.jpg";
import prof from "../assets/certificates/stamp.jpg";

export const HERO_CONTENT = `I am an experienced IT support specialist with a strong background in building reliable and efficient support environments. With 5 years of hands-on experience in IT operations, I have developed a deep understanding of service processes and structured troubleshooting. During my previous roles, I worked extensively with Windows, Linux servers, Microsoft 365, and ticket systems, applying IT service management principles and best practices. My goal is to leverage my expertise in support operations, analytical problem‑solving, and clear communication to design effective support structures and deliver solutions that create measurable impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile IT support specialist with a passion for delivering efficient and user‑friendly solutions. I have worked across various environments, supporting Windows, Linux servers, Microsoft 365, networks, and hardware. What intrigued me the most and kept me motivated was definitely troubleshooting and process optimization. I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and deeply enjoy analyzing complex issues to deliver clear, high‑quality results. I am particularly enthusiastic about customer service excellence and knowledgebase management. Outside of work, I enjoy activities such as playing music, calligraphy, hiking, and yoga.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Developer Trainee",
    company: "Macromedia Academy",
    description: `Learning Software development especially OOP.`,
    technologies: ["C++", "Java", "Python", "PostgreSQL"],
  },
  {
    year: "2022 - 2023",
    role: "IT-Helpdesk",
    company: "Staatliche Lotto-GmbH BW",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["incident management", "Software distribution", "ELO", "site management"],
  },
  {
    year: "2021 - 2022",
    role: "Senior Technician",
    company: "Computacenter AG",
    description: `Support of well-known end customers on-site.Maintenance of customer systems according to IMAC.`,
    technologies: ["Software distribution", "tickets", "", ""],
  },
  {
    year: "2020 - 2021",
    role: "Imaging Process Specialist",
    company: "Examion GmbH",
    description: `Advanced imaging specialist training CT, MRI, X-Ray`,
    technologies: ["XRAY imaging systems", "CT", "MRI", "X-Ray"],
  },
];

export const PROJECTS = [
  {
    title: "Weather App",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Kotlin", "Jetpack Compose", "Co-Routines", "Asynchronous Programming", "Composables"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "PyQt Application",
    image: project4,
    description: "Desktop application developed using PyQt for GUI applications.",
    technologies: ["Python", "PyQt"],
  },
];

export const CERTIFICATES = [
  {
    title: "Python",
    image: python,
    description:
      "Advanced Python programming with focus on data analysis, machine learning, and AI applications in healthcare.",
    technologies: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "OpenCV", "PyTorch"],
  },
  {
    title: "C++",
    image: cpp,
    description:
      "Developed high-performance algorithms and data structures, with applications in Macromedia Academy.",
    technologies: ["OOP", "Pointer", "Arithmetics", "Storage optimization", "lifeCycles"],
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
    title: "IT Courses - LinkedIn Learning",
    image: networks,
    description:
      "Completed courses in AI ethics, medical data privacy, and cutting-edge machine learning techniques.",
    technologies: ["Networks", "GDPR", "HIPAA", "Deep Learning", "Natural Language Processing"],
  },
  {
    title: "Employer References",
    image: employer,
    description: "Positive testimonials highlighting problem-solving skills and ability to work in interdisciplinary teams.",
    technologies: ["Team Collaboration", "Agile Methodologies", "Cross-functional Communication"],
  },
  
  {
    title: "Professor Recommendations",
    image: prof,
    description: "Positive testimonials highlighting my programming and analysing ability from highly successful Professor.",
    technologies: ["Programmin", "OOP", "DB"],
  },
];


export const CONTACT = {
  address: "Bad Cannstatt, Stuttgart ",
  phoneNo: "+49-See CV ",
  email: "rahmanifardad@yahoo.de",
};
