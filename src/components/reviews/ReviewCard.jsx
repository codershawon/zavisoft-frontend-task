"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <div className="flex flex-col bg-white rounded-4xl overflow-hidden shadow-sm group h-full">
      
      {/* Top Info Section */}
      <div className="p-6 md:p-8 flex flex-col grow">
        
        {/* Header: Title & Avatar */}
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="font-black text-xl md:text-2xl text-[#232321] leading-tight">
            {review.title}
          </h3>
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 bg-gray-200">
            <Image 
              src={review.userAvatar} 
              alt="User profile" 
              fill 
              className="object-cover" 
              sizes="56px"
            />
          </div>
        </div>

        {/* Comment */}
        <p className="text-gray-500 text-sm md:text-base font-medium mb-6 line-clamp-3">
          {review.comment}
        </p>

        <div className="flex items-center gap-2 mt-auto">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#FFA52F] w-4 h-4 md:w-5 md:h-5" />
            ))}
          </div>
          <span className="font-bold text-[#232321] text-sm md:text-base">
            {review.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="relative w-full h-62.5 md:h-75 overflow-hidden">
        <Image
          src={review.reviewImage}
          alt="Product review"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      
    </div>
  );
}