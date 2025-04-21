import React from "react";
import IconBenefits from "../components/IconBenefits";
import { motion } from "framer-motion";

function BenefitsSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen px-5 overflow-hidden gap-20 lg:gap-40 " >
      <motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: false, margin: "100px" }}
          className="text-xl sm:text-3xl lg:text-4xl font-semibold m-0 text-center sm:leading-[3rem] lg:leading-[3.5rem]"
        >
          A platform that goes beyond meeting
          <span className="hidden sm:inline">
            {" "}
            <br />
          </span>{" "}
          your practice needs
          <span className="inline sm:hidden"> — <br/></span>
          <span className="hidden sm:inline"> —</span>
          <span className="text-[#32B2A2]"> it anticipates them.</span>
        </motion.p>

      </motion.div>

      <div className="flex flex-row justify-center items-start gap-[clamp(3rem,6vw,12rem)] w-full flex-wrap">
        <motion.div
          className="flex-1 max-w-[300px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, margin: "300px" }}
        >
          <IconBenefits
            img="clock"
            text="2 hours saved per day per provider"
          />
        </motion.div>
        <motion.div
          className="flex-1 max-w-[300px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
          viewport={{ once: false, margin: "300px" }}
        >
          <IconBenefits
            img="shield-check"
            text="60% less cross-contamination risk"
          />
        </motion.div>
        <motion.div
          className="flex-1 max-w-[300px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
          viewport={{ once: false, margin: "300px" }}
        >
          <IconBenefits
            img="universal-access-circle"
            text="90% less burnout"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default BenefitsSection;
