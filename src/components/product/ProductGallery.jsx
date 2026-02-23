"use client";
import Image from "next/image";

export default function ProductGallery({ images }) {
  const displayImages = images?.length > 0 ? images.slice(0, 4) : ["https://placehold.co/600x600"];

  const getBorderRadius = (index) => {
    switch (index) {
      case 0:
        return "rounded-tl-[48px]";
      case 1: 
        return "rounded-tr-[48px]";
      case 2:
        return "rounded-bl-[48px]";
      case 3:
        return "rounded-br-[48px]";
      default:
        return "rounded-[48px]";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
      {displayImages.map((img, index) => {
        const radiusClass = getBorderRadius(index);

        return (
          <div 
            key={index}
            className={`relative w-full aspect-4/5 bg-[#F3F4F6] overflow-hidden shadow-sm ${radiusClass}`}
          >
            <Image
              src={img}
              alt={`Product view ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}