import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlimeringBorderText from "@/components/GlimeringBorderText";

const SofiaSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const textOpacityHeySofia = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.5, 0]);

  const textOpacityHelloDoctor = useTransform(
    scrollYProgress,
    [0.2, 0.35], 
    [0, 0.5] 
  );

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "300vh",
       
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "0",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          zIndex: 1
        }}
      >
        <img
          src="imageContactUs.png"
          alt="Background"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "auto",
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            top: "28vh",
            right: "28vw",
          }}
        >
          <GlimeringBorderText
            scrollYProgress={scrollYProgress}
            scrollRange={[0, 0.3]}
          >
            Hey Sofia!
          </GlimeringBorderText>
        </motion.div>

        <motion.p
          style={{
            position: "absolute",
            top: "20vh",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "2.2rem",
            color: "white",
            opacity: textOpacityHeySofia,
            transition: "opacity 0.3s ease",
            textAlign: "center",
          }}
        >
          You Talk
        </motion.p>

        <div
          style={{
            position: "absolute",
            top: "29vh",
            right: "20vw",
            width: "8vh",
            height: "8vh",
            borderRadius: "50%",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <img
            src="doctor.jpg"
            alt="Avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <GlimeringBorderText
          position={{ position: "absolute", top: "47vh", left: "28vw" }}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.2, 0.5]}
        >
          Hello Doctor, How can I help you?
        </GlimeringBorderText>

        <motion.p
          style={{
            position: "absolute",
            top: "20vh", 
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "2.2rem",
            color: "white",
            opacity: textOpacityHelloDoctor,
            transition: "opacity 0.3s ease",
            textAlign: "center",
          }}
        >
          She Listens
        </motion.p>

        <div
          style={{
            position: "absolute",
            top: "48vh",
            left: "21vw",
            width: "8vh",
            height: "8vh",
            borderRadius: "50%",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <img
            src="logo.svg"
            alt="Avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <GlimeringBorderText
          position={{ position: "absolute", top: "65vh", right: "26vw" }}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.4, 0.8]}
        >
          Can you please open John’s File?
        </GlimeringBorderText>

        <div
          style={{
            position: "absolute",
            top: "66vh",
            right: "20vw",
            width: "8vh",
            height: "8vh",
            borderRadius: "50%",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <img
            src="doctor.jpg"
            alt="Avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SofiaSection;