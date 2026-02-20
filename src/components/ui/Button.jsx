"use client";

import { motion } from "framer-motion";

export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  className = "" 
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.95 }} 
      className={`
        bg-[#4A69E2] text-white text-sm md:text-base font-bold uppercase 
        tracking-wide px-8 py-3 w-max rounded-lg transition-all duration-300 
        shadow-lg hover:bg-[#232321] hover:shadow-black/30 
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}