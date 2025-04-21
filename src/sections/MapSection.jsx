import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextReveal from "../components/ui/TextReveal";
import { TechMap } from "@/components/TechMap";

export default function MapSection() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const isMobile = dimensions.width < 768;

    return (
        <div className="flex flex-col items-center justify-center w-screen px-5 overflow-hidden gap-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="text-center px-4 md:px-0"
            >
                <motion.p
                    className="text-xl sm:text-3xl lg:text-4xl font-semibold m-0 p-5 text-center"
                >
                    A Unified Intuitive Interface
                </motion.p>
                <motion.p className="text-sm sm:text-lg lg:text-xl font-normal m-0 p-0 opacity-50">
                    View, Create, Edit and Share data using conversational AI
                </motion.p>
            </motion.div>

            <TechMap isMobile={isMobile} />
        </div>
    );
}
