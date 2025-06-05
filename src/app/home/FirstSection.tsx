"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageFade = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const FirstSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      className="bg-[url('/images/c.jpg')] bg-cover bg-center"
      variants={imageFade}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        {/* Title */}
        <motion.div
          className="mx-auto mt-5 max-w-2xl text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl">
            Your Gateway to Cracking Top Tech Interviews
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mx-auto mt-5 max-w-3xl text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TextAnimate animation="blurInUp" by="character" duration={5}>
            Master Real-World Questions. Land Your Dream Job.
          </TextAnimate>
          <TextAnimate animation="blurInUp" by="character" duration={5}>
            Ace Every Interview with Confidence
          </TextAnimate>
        </motion.div>

        {/* Button */}
        <motion.div
          className="mt-8 flex justify-center gap-3"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button size="lg" className="px-6 py-2 text-base">
            Get started <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FirstSection;
