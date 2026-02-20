"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bannerImg from "@/assets/images/banner.png";
import thumb1 from "@/assets/images/thumb1.png";
import thumb2 from "@/assets/images/thumb2.png";
import Button from "../ui/Button";

export default function HeroBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mt-8 md:mt-12 mb-16"
    >
      {/* 1. Massive Top Typography */}
      <motion.div variants={itemVariants} className="w-full mb-4 md:mb-6 flex justify-center">
        <h1 className="text-[14.5vw] 2xl:text-[220px] font-black leading-[0.8] uppercase whitespace-nowrap select-none">
          <span className="text-[#232321]">DO IT </span>
          <span className="text-[#4A69E2]">RIGHT</span>
        </h1>
      </motion.div>

      {/* 2. Main Banner Container */}
      <motion.div variants={itemVariants} className="relative w-full h-125 md:h-187.5 rounded-3xl md:rounded-[40px] overflow-hidden shadow-xl">
        
        {/* Background Image */}
        <Image 
          src={bannerImg} 
          alt="Nike Air Max" 
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* 3. Left Vertical Badge (Hidden on mobile for better UX) */}
        <div className="flex absolute top-[10%] left-0 bg-[#232321] text-white p-2 md:p-6 rounded-r-xl shadow-lg items-center justify-center">
          <p 
            className="text-xs md:text-base font-bold uppercase tracking-[0.2em] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Nike product of the year
          </p>
        </div>

        {/* 4. Bottom Left Content (Text & Button) */}
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col gap-3 md:gap-6 z-10">
          <motion.h2 variants={itemVariants} className="text-white text-2xl md:text-7xl font-black tracking-tight">
            NIKE AIR MAX
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-200 text-sm md:text-2xl max-w-50 md:max-w-md font-medium">
            Nike introducing the new air max for everyone&apos;s comfort
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Button>Shop Now</Button>
          </motion.div>
        </div>

        {/* 5. Right Side Thumbnails (Hidden on small mobile screens) */}
        <div className="flex absolute bottom-6 right-6 md:bottom-12 md:right-12 flex-col gap-4 z-10">
          {/* Thumbnail 1 */}
          <motion.div variants={itemVariants} className="relative w-20 h-20 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <Image 
              src={thumb1} 
              alt="Air Max Angle 1" 
              fill 
              className="object-cover"
            />
          </motion.div>
          
          {/* Thumbnail 2 */}
          <motion.div variants={itemVariants} className="relative w-20 h-20 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <Image 
              src={thumb2} 
              alt="Air Max Angle 2" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}