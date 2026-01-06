import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      
      {/* Überschrift */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Kontakt aufnehmen
      </motion.h2>

      {/* Einleitung */}
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Ich unterstütze Arztpraxen, Apotheken und kleine Unternehmen in Stuttgart 
        und Umgebung mit zuverlässigem IT‑Service. Kontaktieren Sie mich gerne 
        für ein unverbindliches Erstgespräch.
      </motion.p>

      {/* FORMULAR MIT FORMSPREE */}
      <motion.form
        action="https://formspree.io/f/mykzqaok"
        method="POST"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Ihr Name"
          />
        </div>

        {/* Praxis / Unternehmen */}
        <div>
          <label className="block mb-2 text-sm font-medium">Praxis / Unternehmen</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Name der Praxis oder Firma"
          />
        </div>

        {/* E-Mail */}
        <div>
          <label className="block mb-2 text-sm font-medium">E‑Mail</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Ihre E‑Mail-Adresse"
          />
        </div>

        {/* Nachricht */}
        <div>
          <label className="block mb-2 text-sm font-medium">Nachricht</label>
          <textarea
            rows="5"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Wie kann ich Ihnen helfen?"
          ></textarea>
        </div>

        {/* Absenden Button */}
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded transition-colors"
        >
          Absenden
        </button>
      </motion.form>

      {/* Alternative Kontaktinfos */}
      <div className="text-center tracking-tight space-y-4 mt-12">
        <p>📍 Stuttgart</p>
        <p>
          📞{" "}
          <a href="tel:+491771859667" className="hover:text-cyan-400">
            +49 177 1859667
          </a>
        </p>
        <p>
          ✉️{" "}
          <a
            href="mailto:service@rahmani-it.com"
            className="border-b border-neutral-600 hover:text-cyan-400 hover:border-cyan-400"
          >
            service@rahmani-it.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;




/*
import { CONTACT } from "../constants"
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
      
    </div>
  )
}

export default Contact
*/

