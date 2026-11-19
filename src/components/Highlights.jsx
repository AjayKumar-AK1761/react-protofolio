import { HIGHLIGHTS } from "../constants/index";
import { motion } from "framer-motion";

const Highlights = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Key <span className="text-neutral-500">Work</span>
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map((item, index) => (
          <motion.div
            key={item.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="mb-3 font-semibold">{item.title}</h3>
            <p className="mb-4 text-neutral-400">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
