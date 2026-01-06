import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Über mich
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center px-6"
      >
        <p className="text-neutral-300 leading-relaxed text-lg">
          Ich bin IT-Support-Spezialist mit fünf Jahren Erfahrung in der Betreuung 
          von Windows- und Linux-Systemen, Netzwerken und Microsoft-365-Umgebungen. 
          In meiner bisherigen Arbeit habe ich eng mit medizinischen Einrichtungen 
          zusammengearbeitet, technische Schnittstellen eingerichtet 
          (z. B. zwischen Praxissoftware und Röntgensystemen) und stabile 
          IT-Infrastrukturen aufgebaut.
          <br /><br />
          Ich arbeite strukturiert, lösungsorientiert und lege großen Wert auf 
          klare Kommunikation. Mein Ziel ist es, Arztpraxen und Apotheken 
          zuverlässig zu unterstützen, damit sie sich auf das Wesentliche 
          konzentrieren können: ihre Patienten.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
