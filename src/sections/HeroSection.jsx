import React, { useState, useRef } from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import { motion, useScroll, useTransform } from "framer-motion";
import SwipeArrow from "@/components/SwipeArrow";
import { Button } from "@/components/ui/button";

function HeroSection({ scrollToContactUs }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const iconOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden z-20 px-2"
    >
      <motion.div
        style={{ y: yBackground }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <BackgroundVideo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, transform: "translate(-50%, calc(-50% + 50px))" }}
        whileInView={{
          opacity: 1,
          transform: "translate(-50%, -50%)",
          transition: { delay: 0.4, duration: 0.3 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        style={{ y: yText }}
        className="absolute z-10 top-1/2 left-1/2 text-center text-white w-[90%] max-w-[1200px] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="m-0 text-2xl sm:text-4xl lg:text-5xl font-semibold">
          All-in-One Dental Intelligence
        </h1>

        <p className="font-normal text-sm sm:text-lg lg:text-2xl mt-4 text-white/80">
          Meet <span className="text-[var(--main-color)]">Sofia,</span> your
          personalized AI Assistant
        </p>
        <Button
          variant="primary"
          size="xl"
          className="mt-20 px-8 py-4 text-sm sm:text-base lg:text-lg"
          onClick={() => scrollToContactUs()}
        >
          Book a Demo
        </Button>
      </motion.div>

      <motion.div
        style={{ opacity: iconOpacity }}
        className="absolute bottom-20 left-0 right-0 flex justify-center items-center z-10"
      >
        <SwipeArrow />
      </motion.div>
    </div>
  );
}

export default HeroSection;
