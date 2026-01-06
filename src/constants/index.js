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

export const HERO_CONTENT = `Ich unterstütze medizinische Einrichtungen mit professionellem IT-Support, schneller Fehlerbehebung und stabilen Systemen. Von Praxissoftware über Netzwerk & Hardware bis zu Sicherheitslösungen – Sie erhalten alles aus einer Hand.`;

export const SERVICES = [ { title: "Praxis-IT Betreuung", description: "Regelmäßige Wartung, Updates, Monitoring und schnelle Unterstützung für einen reibungslosen Praxisbetrieb.", }, { title: "Unterstützung für Praxissoftware", description: "Einrichtung, Updates und Fehlerbehebung für Medistar, Albis, Duria, Tomedo und weitere Praxisverwaltungssysteme.", }, { title: "Netzwerk & WLAN", description: "Stabile und sichere Netzwerke für Empfang, Behandlungsräume und Backoffice - perfekt abgestimmt auf medizinische Anforderungen.", }, { title: "IT-Sicherheit & Datenschutz", description: "Firewall, Antivirus, Backups und DSGVO-konforme IT-Dokumentation für maximale Sicherheit.", }, { title: "Hardware-Service", description: "Beschaffung, Installation und Einrichtung von PCs, Druckern, Scannern und Kartenlesegeräten.", }, { title: "Schneller Support", description: "Fernwartung und Vor-Ort-Service in Stuttgart und Umgebung - zuverlässig und persönlich.", }, ];

export const USPs = [ { title: "Spezialisierung auf medizinische Einrichtungen", description: "Ich kenne die technischen und organisatorischen Anforderungen von Arztpraxen, Apotheken und MVZs.", }, { title: "Schnelle Reaktionszeiten", description: "Bei IT-Problemen zählt jede Minute. Ich bin zuverlässig erreichbar und handle sofort.", }, { title: "Persönlicher Ansprechpartner", description: "Keine Hotline, kein Weiterleiten. Sie sprechen direkt mit mir - klar, schnell und unkompliziert.", }, { title: "Erfahrung mit Praxissoftware", description: "Ich kenne die technischen Anforderungen gängiger Praxisverwaltungssysteme und unterstütze bei Schnittstellen, Anbindungen (z.sB. Röntgensysteme) und grundlegenden technischen Aufgaben rund um die Software.", }, { title: "Sicherheit & Datenschutz", description: "DSGVO-konforme IT-Lösungen, sichere Netzwerke, Backups und moderne Sicherheitskonzepte.", }, { title: "Vor-Ort-Service in Stuttgart", description: "Ich bin schnell bei Ihnen vor Ort - zuverlässig und flexibel.", }, ];


export const PACKAGES = [
  {
    title: "Basis-Paket",
    price: "ab 49 € / Monat",
    features: [
      "Fernwartung",
      "System-Monitoring",
      "Windows-Updates",
      "Basis-Sicherheitschecks",
      "Unterstützung bei kleinen Problemen"
    ],
  },
  {
    title: "Standard-Paket",
    price: "ab 129 € / Monat",
    features: [
      "Alles aus dem Basis-Paket",
      "Vor-Ort-Service (kontingent)",
      "Netzwerk-Betreuung",
      "Backup-Überwachung",
      "Unterstützung bei Praxissoftware-Schnittstellen",
      "Priorisierte Reaktionszeiten"
    ],
  },
  {
    title: "Premium-Paket",
    price: "ab 249 € / Monat",
    features: [
      "Alles aus dem Standard-Paket",
      "Unbegrenzte Fernwartung",
      "Vor-Ort-Service inklusive",
      "Firewall-Management",
      "IT-Dokumentation (DSGVO)",
      "Hardware-Service",
      "Notfall-Support"
    ],
  },
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
  phoneNo: "+49 177 1859667",
  email: "service@rahmani-it.com",
};
