"use client"

import { motion } from "framer-motion"

interface ShinyTextProps {
  text: string
  className?: string
}

export const ShinyText = ({ text, className = "" }: ShinyTextProps) => {
  return (
    <motion.span
      initial={{ backgroundPosition: "-200% 0" }}
      animate={{ backgroundPosition: "200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }}
      style={{
        backgroundImage:
          "linear-gradient(100deg, #7AE7FF 0%, #7AE7FF 40%, #ffffff 50%, #7AE7FF 60%, #7AE7FF 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  )
}
