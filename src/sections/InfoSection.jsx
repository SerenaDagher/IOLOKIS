import React from "react";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <motion.div
      className="items-center justify-center w-screen overflow-hidden px-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: false, margin: "100px" }}
    >
      <h2 className="text-center text-xl sm:text-3xl lg:text-4xl font-semibold pb-20">
        Where to Find us
      </h2>

      <div className="flex justify-center">
      <div className="flex flex-col md:flex-col lg:flex-row gap-16 items-center max-w-full">

          <div className="flex-1 flex justify-center">
            <img
              src="stationFpic.png"
              alt="Info Section"
              className="w-full max-w-xs rounded-lg"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6 min-w-[300px]">
            <div className="w-full text-center">
              <div className="text-md sm:text-lg lg:text-lg font-medium mb-2">
                We are Located at the <br />
                World’s Largest Startup Campus
              </div>
              <p className="text-base leading-9 opacity-50 font-light">
                5 Parv. Alan Turing, 75013 Paris
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoSection;
