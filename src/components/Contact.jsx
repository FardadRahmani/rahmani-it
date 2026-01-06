import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Kontakt aufnehmen
      </motion.h2>

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
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            name="name"
            type="text"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Ihr Name"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Praxis / Unternehmen</label>
          <input
            name="company"
            type="text"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Name der Praxis oder Firma"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">E‑Mail</label>
          <input
            name="email"
            type="email"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Ihre E‑Mail-Adresse"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Nachricht</label>
          <textarea
            name="message"
            rows="5"
            className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:border-cyan-400 focus:outline-none"
            placeholder="Wie kann ich Ihnen helfen?"
            required
          ></textarea>
        </div>

        <button



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

