"use client";

import tipsData from "./tipData/tips.json";
import { motion } from "framer-motion";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const TipsList = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.h1
        className="text-center text-4xl font-bold mb-8"
        variants={fadeInUp}
        custom={0}
      >
        Interview & Resume Tips
      </motion.h1>

      {/* Resume Tips */}
      <section className="mb-12">
        <motion.h2
          className="text-2xl font-semibold mb-4 border-b pb-2"
          variants={fadeInUp}
          custom={1}
        >
          Resume Tips
        </motion.h2>
        <ul className="space-y-3 bg-green-50 rounded-lg p-4">
          {tipsData.resumeTips.map((tip, i) => (
            <motion.li
              key={i}
              className="text-lg bg-white p-3 rounded shadow-sm hover:shadow-md transition cursor-default"
              variants={fadeInUp}
              custom={i + 2}
            >
              {tip}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Interview Tips */}
      <section className="mb-12">
        <motion.h2
          className="text-2xl font-semibold mb-4 border-b pb-2"
          variants={fadeInUp}
          custom={1}
        >
          Interview Tips
        </motion.h2>
        <ul className="space-y-3 bg-blue-50 rounded-lg p-4">
          {tipsData.interviewTips.map((tip, i) => (
            <motion.li
              key={i}
              className="text-lg bg-white p-3 rounded shadow-sm hover:shadow-md transition cursor-default"
              variants={fadeInUp}
              custom={i + 2}
            >
              {tip}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* HR Tips */}
      <section className="mb-12">
        <motion.h2
          className="text-2xl font-semibold mb-4 border-b pb-2"
          variants={fadeInUp}
          custom={1}
        >
          HR Tips
        </motion.h2>
        <ul className="space-y-3 bg-yellow-50 rounded-lg p-4">
          {tipsData.hrTips.map((tip, i) => (
            <motion.li
              key={i}
              className="text-lg bg-white p-3 rounded shadow-sm hover:shadow-md transition cursor-default"
              variants={fadeInUp}
              custom={i + 2}
            >
              {tip}
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default TipsList;
