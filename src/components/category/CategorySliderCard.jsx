"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CategorySliderCard({ category }) {
  const imageUrl = category.image?.replace(/[\[\]"]/g, '') || "https://placehold.co/600x600";

  return (
    <div className="bg-[#F3F4F6] flex flex-col justify-between h-100 md:h-125 p-6 group cursor-pointer relative">
      
      {/* Category Image - Centered */}
      <div className="relative w-full h-[70%] flex items-center justify-center">
        <Image
          src={imageUrl} 
          alt={category.name}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Bottom Content: Title & Arrow Button */}
      <div className="flex justify-between items-end w-full mt-4">
        <h3 className="font-black text-xl md:text-2xl text-[#232321] uppercase leading-tight max-w-[70%]">
          {category.name}
        </h3>
        
        <Link href={`/categories/${category.id}`}>
          <button className="bg-[#232321] text-white p-3 md:p-4 rounded-xl hover:bg-black transition-colors">
            <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}