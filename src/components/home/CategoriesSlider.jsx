"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCategories } from "@/hooks/useCategories";
import CategorySliderCard from "@/components/category/CategorySliderCard";
import { Loader, ErrorState } from "@/components/ui/States";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";

export default function CategoriesSliderSection() {
  const { categories, isLoading, error } = useCategories();
  
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#232321] pt-16 md:pt-24 pb-0 overflow-hidden mt-12 md:mt-24">
      <div className="container relative">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            CATEGORIES
          </h2>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#3A3A3A] hover:bg-white text-white hover:text-[#232321] p-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#E5E5E5] hover:bg-white text-[#232321] p-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* States */}
        {isLoading && <Loader />}
        {error && <ErrorState message={error} />}

        {!isLoading && !error && categories.length > 0 && (
          <div className="w-full pb-12"> 
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="rounded-tl-[48px] overflow-hidden bg-[#F3F4F6]"
            >
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <CategorySliderCard category={category} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

      </div>
    </section>
  );
}