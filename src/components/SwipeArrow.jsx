import React from "react";
import { motion } from "framer-motion";

const SwipeArrow = ({ icon = "chevron-down.svg", size = 40, color = "white" }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <img
        src={icon}
        alt="Scroll Down"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          filter: color === "white" ? "brightness(0) invert(1)" : "none",
        }}
      />
    </motion.div>
  );
};

export default SwipeArrow;