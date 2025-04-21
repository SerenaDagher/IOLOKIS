import React, { useEffect, useState, forwardRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import PartnersCard from "@/components/PartnersCard";

const partnerLogos = [
  "/partners/microsoft.png",
  "/partners/berytech.svg",
  "/partners/stationf.svg",
  "/partners/fmd.svg",
  "/partners/smartesa.svg",
  "/partners/usjec2.svg",
  "/partners/airfrance.svg",
  "/partners/lafrenchtech.svg",
  "/partners/lorient.svg",
  "/partners/esa.svg",
  "/partners/hec.svg",
];

const PartnersSection = forwardRef((props, outerRef) => {
  const FAST_DURATION = 65;
  const SLOW_DURATION = 85;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [innerRef, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          xTranslation.set(0);
        },
      });
    }

    return () => controls?.stop();
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <main className="flex flex-col items-center justify-center w-screen overflow-hidden">
      <motion.div
        className="text-center font-semibold text-xl sm:text-3xl lg:text-4xl mb-20 px-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: false, margin: "300px" }}
      >
        We Thank them for Their Trust
      </motion.div>

      <motion.div
        className="relative w-full max-w-[1150px] mx-auto overflow-hidden"
        ref={outerRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: false, margin: "300px" }}
      >
        <motion.div
          className="flex gap-16 w-max"
          style={{ x: xTranslation }}
          ref={innerRef}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <PartnersCard image={`${logo}`} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
});
export default PartnersSection;
