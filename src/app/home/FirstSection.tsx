"use client"

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";

const FirstSection = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-[url('/images/c.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl animate-fade-up">
              Your Gateway to Cracking Top Tech Interviews
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
              <TextAnimate animation="blurInUp" by="character" duration={5}>
                Master Real-World Questions. Land Your Dream Job.
              </TextAnimate>
              <TextAnimate animation="blurInUp" by="character" duration={5}>
                Ace Every Interview with Confidence
              </TextAnimate>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <Button size="lg" className="px-6 py-2 text-base cursor:pointer">
              Get started
            </Button>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

export default FirstSection;