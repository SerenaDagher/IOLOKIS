import { motion } from "framer-motion";
import React from "react";

const PartnersCard = ({ image }) => {
  return (
    <motion.div
      className="relative overflow-hidden flex justify-center items-center"
      style={{
        height: "clamp(50px, 11vw, 200px)",
        width: "clamp(80px, 12.5vw, 200px)"
      }}
      key={image}
    >
      <img
        src={image}
        alt={image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain", 
        }}
      />
    </motion.div>
  );
};

export default PartnersCard;