"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SecondSection = () => {
  const [language, setLanguage] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/languages/`);

        // Shuffle and slice 4 random items
        const shuffled = res.data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);

        setLanguage(selected);
      } catch (err) {
        console.log(err);
      }
    };
    loadLanguages();
  }, []);

  const handleClick = (id: string) => {
    router.push(`/question/${id}`);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8"
    >
      {/* Title Section */}
      <motion.div
        className="text-center max-w-xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <b className="text-center text-muted-foreground font-semibold text-base">
          We&apos;re helping!
        </b>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          See Question & Answer
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          Our mission is simple — curate real-world interview questions,
          provide expert insights, and help you confidently crack top tech
          interviews.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="mt-20 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-screen-lg mx-auto">
        {language.map((language: any, index: number) => (
          <motion.div
            key={language?.id}
            className="text-center cursor-pointer"
            onClick={() => handleClick(language.id)}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_URL}/${language.icon}`}
              alt={language.name}
              className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
              width={120}
              height={120}
            />
            <h3 className="mt-4 text-lg font-semibold">{language.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Button Section */}
      <motion.div
        className="mt-[50px]"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <a href="/question">
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition cursor-pointer">
            View all
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default SecondSection;
