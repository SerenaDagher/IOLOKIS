import React, { forwardRef } from "react";
import ReviewCard from "../components/ReviewCard";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewsSection = forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "4rem",
        }}
      >
        <motion.p
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: 600,
            margin: 0,
            padding: 0,
          }}
        >
          Designed by Dentists, for Dentists.
        </motion.p>
        <motion.p
          style={{
            fontSize: "clamp(1rem, 4vw, 1.625rem)",
            fontWeight: 500,
            margin: 0,
            padding: 0,
            opacity: 0.5,
            marginBottom: "60px",
          }}
        >
          This is what our early testers have to say
        </motion.p>
      </motion.div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl relative"
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-11 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <ReviewCard
                name="Dr. John Doe"
                review="I really enjoy how multiple problems from a disorganized
                 and fragmented history can be quickly organized."
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="hidden sm:flex sm:absolute sm:left-[-40px]
           sm:transform sm:-translate-y-1/2 sm:top-1/2 sm:bg-white sm:border 
           sm:border-gray-300 sm:rounded-full sm:p-2 sm:hover:bg-gray-100"
          style={{ color: "#000000" }}
        />
        <CarouselNext
          className="hidden sm:flex sm:absolute 
          sm:right-[-40px] sm:transform sm:-translate-y-1/2 
          sm:top-1/2 sm:bg-white sm:border sm:border-gray-300 sm:rounded-full sm:p-2 sm:hover:bg-gray-100"
          style={{ color: "#000000" }}
        />
      </Carousel>
    </motion.div>
  );
});

export default ReviewsSection;