import { PACKAGES } from "../constants";
import { motion } from "framer-motion";

const Packages = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        IT-Pakete & Preise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {PACKAGES.map((pkg, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-400 transition-colors"
          >
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
              {pkg.title}
            </h3>

            <p className="text-xl font-bold mb-4 text-white">{pkg.price}</p>

            <ul className="text-neutral-300 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
