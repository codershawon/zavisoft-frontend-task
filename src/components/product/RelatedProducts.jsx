"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/product/ProductCard";
import { Loader, ErrorState } from "@/components/ui/States";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

export default function RelatedProducts() {
  const { products, isLoading, error } = useProducts();
  const mobileSwiperRef = useRef(null);
  const desktopSwiperRef = useRef(null);

  const handlePrev = () => {
    mobileSwiperRef.current?.slidePrev();
    desktopSwiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    mobileSwiperRef.current?.slideNext();
    desktopSwiperRef.current?.slideNext();
  };

  if (isLoading) return <div className="py-12"><Loader /></div>;
  if (error) return <div className="py-12"><ErrorState message={error} /></div>;
  if (!products || products.length === 0) return null;

  return (
    <section className="related-products mt-6 md:mt-32 w-full">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-[#232321] tracking-tight">
          You may also like
        </h2>
        
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            className="bg-[#8c8c8c] hover:bg-[#232321] text-white w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="bg-[#232321] hover:bg-black text-white w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative">
        <Swiper
          onBeforeInit={(swiper) => {
            mobileSwiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Grid]}
          grid={{ rows: 2, fill: "row" }}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={12} 
          pagination={{ clickable: true }}
          className="pb-6!"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Slider*/}
      <div className="hidden md:block relative">
        <Swiper
          onBeforeInit={(swiper) => {
            desktopSwiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24, slidesPerGroup: 2 },
          }}
          className="pb-10!"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}