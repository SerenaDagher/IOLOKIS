"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

export default function FeaturesSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const isMobile = dimensions.width < 768

  const sofiaX = dimensions.width / 2
  const sofiaY = dimensions.height / 2

  const leftX = sofiaX - dimensions.width * 0.2
  const rightX = sofiaX + dimensions.width * 0.2

 
  const topY = isMobile ? 
    sofiaY - dimensions.height * 0.25 : 
    sofiaY - dimensions.height * 0.2
  const middleY = sofiaY
  const bottomY = isMobile ? 
    sofiaY + dimensions.height * 0.25 : 
    sofiaY + dimensions.height * 0.2

  const curves = [
    `M ${sofiaX - dimensions.width * 0.07} ${sofiaY - 30} Q ${sofiaX - dimensions.width * 0.12} ${sofiaY - dimensions.height * 0.07}, ${leftX + dimensions.width * 0.04} ${topY}`,
    `M ${sofiaX - dimensions.width * 0.07} ${sofiaY} Q ${sofiaX - dimensions.width * 0.09} ${sofiaY}, ${leftX + dimensions.width * 0.04} ${middleY}`,
    `M ${sofiaX - dimensions.width * 0.07} ${sofiaY + 30} Q ${sofiaX - dimensions.width * 0.12} ${sofiaY + dimensions.height * 0.07}, ${leftX + dimensions.width * 0.04} ${bottomY}`,
    `M ${sofiaX + dimensions.width * 0.07} ${sofiaY - 30} Q ${sofiaX + dimensions.width * 0.12} ${sofiaY - dimensions.height * 0.07}, ${rightX - dimensions.width * 0.02} ${topY}`,
    `M ${sofiaX + dimensions.width * 0.07} ${sofiaY} Q ${sofiaX + dimensions.width * 0.09} ${sofiaY}, ${rightX - dimensions.width * 0.02} ${middleY}`,
    `M ${sofiaX + dimensions.width * 0.07} ${sofiaY + 30} Q ${sofiaX + dimensions.width * 0.12} ${sofiaY + dimensions.height * 0.07}, ${rightX - dimensions.width * 0.02} ${bottomY}`,
  ]

  return (
    <motion.div className="flex flex-col items-center justify-center text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
        className="text-center px-4 md:px-0"
      >
        <motion.p className="text-[clamp(1.25rem,5vw,2rem)] font-semibold m-0 p-0">Intuitive, Fast and Secure</motion.p>
        <motion.p className="text-[clamp(0.875rem,4vw,1.625rem)] font-medium m-0 p-0 opacity-50">
          Support +10 more languages
        </motion.p>
      </motion.div>
      <motion.div 
        className="flex flex-col items-center justify-center text-center relative min-h-[80vh] w-screen overflow-hidden" 
        style={{ marginTop: isMobile ? "-50px" : "-100px" }}
      >
        {/* Curves */}
        <svg className="absolute top-0 left-0 z-[2]" width="100%" height="100%">
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="gray" stopOpacity="0.2" />
              <stop offset="25%" stopColor="gray" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#32B2A2" />
              <stop offset="55%" stopColor="#32B2A2" />
              <stop offset="75%" stopColor="gray" stopOpacity="0.2" />
              <stop offset="100%" stopColor="gray" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {curves.map((curve, index) => (
            <AnimatedPath key={index} d={curve} />
          ))}
        </svg>

        {/* Sofia Logo - Now behind the lines */}
        <div
          className="absolute z-[1] flex items-center justify-center text-center bg-[url('/backgroundlogo.png')] bg-cover bg-center opacity-50"
          style={{
            top: middleY - (isMobile ? 50 : 100),
            left: sofiaX - (isMobile ? 50 : 100),
            width: "clamp(6rem, 12.5vw, 12.5rem)",
            height: "clamp(6rem, 12.5vw, 12.5rem)",
            fontSize: "clamp(1.5rem, 4vw, 4rem)",
          }}
        >
          Sofia
        </div>

        {/* Features Container */}
        <div className="absolute z-[3] w-full h-full">
          {/* Top Features */}
          <div 
            className={`absolute flex flex-row items-center ${isMobile ? 'gap-[80px]' : 'gap-[800px]'}`}
            style={{ 
              top: topY - (isMobile ? 40 : 50), 
              left: isMobile ? 10 : leftX - 200, 
              right: isMobile ? 0 : rightX + 200 
            }}
          >
            <FeatureItemLeft icon="patients_insights.svg" label="Patient Insights" isMobile={isMobile} />
            <FeatureItemRight icon="ask_ai.svg" label="Ask AI Anything" isMobile={isMobile} />
          </div>

          {/* Middle Features */}
          <div 
            className={`absolute flex flex-row items-center ${isMobile ? 'justify-between px-6' : 'gap-[800px]'}`}
            style={{ 
              top: middleY - (isMobile ? 17.5 : 35), 
              left: isMobile ? 0 : leftX - 250, 
              right: isMobile ? 0 : rightX + 200 
            }}
          >
            <FeatureItemLeft icon="documentation_tools.svg" label="Documentation Tools" isMobile={isMobile} />
            <FeatureItemRight icon="ehr_integration.svg" label="EHR Integration" isMobile={isMobile} />
          </div>

          {/* Bottom Features */}
          <div 
            className={`absolute flex flex-row items-center ${isMobile ? 'justify-between px-6' : 'gap-[800px]'}`}
            style={{ 
              top: bottomY - (isMobile ? 17.5 : 35), 
              left: isMobile ? 0 : leftX - 240, 
              right: isMobile ? 0 : rightX + 250 
            }}
          >
            <FeatureItemLeft icon="realtime_labeling.svg" label="Real Time Labeling" isMobile={isMobile} />
            <FeatureItemRight icon="treatment_support.svg" label="Treatment Support" isMobile={isMobile} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function AnimatedPath(props) {
  const controls = useAnimation()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    let timeoutId

    const animate = async () => {
      if (isAnimating) return

      setIsAnimating(true)
      
      try {
        await controls.start({
          strokeDashoffset: -1000,
          transition: { 
            duration: 3, 
            ease: "linear"
          },
        })

        await controls.set({
          strokeDashoffset: 1000,
          opacity: 0
        })

        await controls.start({
          opacity: 1,
          transition: { duration: 0.1 }
        })

        setIsAnimating(false)
        timeoutId = setTimeout(animate, Math.random() * 1000 + 500)
      } catch (error) {
        setIsAnimating(false)
      }
    }

    timeoutId = setTimeout(animate, Math.random() * 1000)

    return () => {
      clearTimeout(timeoutId)
      setIsAnimating(false)
    }
  }, [controls])

  return (
    <>
      <path
        d={props.d}
        fill="none"
        stroke="gray"
        strokeWidth="2"
        strokeOpacity="0.2"
        strokeLinecap="round"
      />
      <motion.path
        d={props.d}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={controls}
      />
    </>
  )
}

function FeatureItemLeft({ icon, label, isMobile }) {
  return (
    <div 
      style={{
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "0.5rem" : "clamp(1rem, 3vw, 2rem)",
        width: isMobile ? "45%" : "clamp(200px, 40vw, 500px)",
      }}
    >
      <img
        src={icon}
        alt="icon for feature item"
        style={{
          width: isMobile ? "clamp(2rem, 6vw, 3rem)" : "clamp(2.5rem, 6vw, 4rem)",
          height: isMobile ? "clamp(2rem, 6vw, 3rem)" : "clamp(2.5rem, 6vw, 4rem)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: isMobile ? "clamp(0.75rem, 2vw, 1rem)" : "clamp(0.9rem, 2vw, 1.2rem)",
          fontWeight: "400",
          whiteSpace: isMobile ? "normal" : "nowrap",
          lineHeight: isMobile ? "1.2" : "normal",
        }}
      >
        {label}
      </span>
    </div>
  )
}

function FeatureItemRight({ icon, label, isMobile }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "0.5rem" : "clamp(1rem, 3vw, 2rem)",
        width: isMobile ? "45%" : "clamp(200px, 40vw, 500px)",
      }}
    >
      <span
        style={{
          fontSize: isMobile ? "clamp(0.75rem, 2vw, 1rem)" : "clamp(0.9rem, 2vw, 1.2rem)",
          fontWeight: "400",
          whiteSpace: isMobile ? "normal" : "nowrap",
          lineHeight: isMobile ? "1.2" : "normal",
          textAlign: isMobile ? "right" : "left",
        }}
      >
        {label}
      </span>
      <img
        src={icon}
        alt="icon for feature item"
        style={{
          width: isMobile ? "clamp(2rem, 6vw, 3rem)" : "clamp(2.5rem, 6vw, 4rem)",
          height: isMobile ? "clamp(2rem, 6vw, 3rem)" : "clamp(2.5rem, 6vw, 4rem)",
          flexShrink: 0,
        }}
      />
    </div>
  )
}