"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoryCard({ category }) {
  return (
    <div className="flex flex-col gap-4 group">
      {/* Image Container with Grey Background */}
      <div className="relative bg-[#F3F4F6] rounded-3xl p-6 aspect-square flex items-center justify-center overflow-hidden">
        {/* Blue 'New' Badge */}
        <div className="absolute top-4 left-4 bg-[#4A69E2] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full z-10">
          New
        </div>
        
        {/* Category Image */}
        <div className="relative w-full h-full hover:scale-110 transition-transform duration-500 ease-out">
          <Image 
            src={category.image} 
            alt={category.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>

      {/* Category Info */}
      <div className="flex flex-col gap-3">
        <h3 className="font-black text-lg text-[#232321] uppercase leading-tight">
          {category.name}
        </h3>
        
        {/* Dark Action Button matching the design */}
        <Link href={`/categories/${category.id}`} className="w-full">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#232321] text-white text-xs font-bold uppercase py-4 rounded-xl hover:bg-black transition-colors"
          >
            View Category
          </motion.button>
        </Link>
      </div>
    </div>
  );
}