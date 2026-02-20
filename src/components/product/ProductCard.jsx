"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductCard({ product }) {
  const imageUrl = product.images[0]?.replace(/[\[\]"]/g, '') || "https://placehold.co/600x400";

  return (
    <div className="flex flex-col gap-4 group">
      {/* Image Container */}
      <div className="relative bg-[#F3F4F6] rounded-[28px] p-2 aspect-square flex items-center justify-center overflow-hidden">
        
        <div className="absolute top-0 left-0 bg-[#4A69E2] text-white text-[9px] md:text-[11px] font-bold uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-tl-[12px] rounded-br-[13px] md:rounded-tl-none md:rounded-br-2xl z-10">
          New
        </div>
        
        {/* Product Image */}
        <div className="relative w-full h-full hover:scale-110 transition-transform duration-500 ease-out rounded-[28px] overflow-hidden">
          <Image
            src={imageUrl} 
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3">
        {/* product.title */}
        <h3 className="font-black text-[11px] md:text-lg text-[#232321] uppercase leading-tight line-clamp-3 md:line-clamp-2 min-h-9.5 md:min-h-11">
          {product.title}
        </h3>
        
        <Link href={`/products/${product.id}`} className="w-full">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#232321] text-white text-[8px] md:text-xs font-bold uppercase py-2.5 md:py-4 rounded-lg md:rounded-xl hover:bg-black transition-colors flex justify-center items-center gap-1"
          >
            {/* product.price */}
            VIEW PRODUCT - <span className="text-[#FFA52F]">${product.price}</span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
}