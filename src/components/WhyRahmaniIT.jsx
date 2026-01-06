import { motion } from "framer-motion";
import { USPs } from "../constants";


const WhyRahmaniIT = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Warum Rahmani IT?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {USPs.map((usp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-400 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              {usp.title}
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              {usp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyRahmaniIT;
