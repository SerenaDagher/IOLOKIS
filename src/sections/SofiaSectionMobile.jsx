import React from "react";
import GlimeringBorderText from "@/components/GlimeringBorderText";
import { motion } from "framer-motion";

const SofiaSectionMobile = () => {
  return (
    <div
      style={{
        position: "relative", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4rem",
        padding: "3rem",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
          style={{
            fontSize: "2rem",
            color: "white",
            transition: "opacity 0.3s ease",
            textAlign: "center",
          }}
        >
          You Talk
        </motion.p>
      </div>

      <div
        style={{
          alignSelf: "flex-end", 
          maxWidth: "70%",
          marginTop: "15vh", 
        }}
      >
        <GlimeringBorderText fontSize="1.2rem" padding="0.5rem 1rem">
          Hey Sofia!
        </GlimeringBorderText>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
        viewport={{ once: false }}
        style={{
          fontSize: "2rem",
          color: "white",
          opacity: 0.5,
          transition: "opacity 0.3s ease",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        She Listens
      </motion.p>

      <div
        style={{
          alignSelf: "flex-start", 
          maxWidth: "70%",
        }}
      >
        <GlimeringBorderText fontSize="1.2rem" padding="0.5rem 1rem">
          Hello Doctor, How can I help you?
        </GlimeringBorderText>
      </div>

      <div
        style={{
          alignSelf: "flex-end", 
          maxWidth: "70%",
        }}
      >
        <GlimeringBorderText fontSize="1.2rem" padding="0.5rem 1rem">
          Can you please open John’s File?
        </GlimeringBorderText>
      </div>
    </div>
  );
};

export default SofiaSectionMobile;