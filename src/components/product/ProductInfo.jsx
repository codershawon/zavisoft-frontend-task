"use client";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

const SIZES = [
  { val: "38", available: true }, { val: "39", available: false }, { val: "40", available: false },
  { val: "41", available: true }, { val: "42", available: true }, { val: "43", available: true },
  { val: "44", available: true }, { val: "45", available: true }, { val: "46", available: true },
  { val: "47", available: true }
];

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState("bg-[#2B303A]");
  const [selectedSize, setSelectedSize] = useState("38");

  return (
    <div className="flex flex-col gap-6 lg:pl-10">
      
      {/* Category / Title / Price */}
      <div className="flex flex-col gap-3">
        <span className="bg-[#4A69E2] text-white text-xs font-bold px-3 py-1.5 rounded-md w-fit">
          {product.category?.name || "New Release"}
        </span>
        <h1 className="text-xl md:text-[32px] font-black text-[#232321] uppercase">
          {product.title}
        </h1>
        <span className="text-2xl font-black text-[#4A69E2]">
          ${product.price}.00
        </span>
      </div>

      {/* Colors */}
      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold text-[#232321]">COLOR</span>
        <div className="flex gap-4">
          {["bg-[#2B303A]", "bg-[#7A8B76]"].map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full transition-all ${color} ${
                selectedColor === color 
                  ? "ring-2 ring-[#232321] ring-offset-[6px] ring-offset-[#EAEAEA]" 
                  : "ring-2 ring-transparent ring-offset-4 ring-offset-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* SIZES SECTION */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-end">
          <span className="text-sm font-bold text-[#232321]">SIZE</span>
          <button className="text-xs font-bold underline text-[#232321]/70 hover:text-[#232321] transition-colors">
            SIZE CHART
          </button>
        </div>
        
        {/* Grid for the size buttons */}
        <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
          {SIZES.map((size) => (
            <button
              key={size.val}
              disabled={!size.available}
              onClick={() => setSelectedSize(size.val)}
              className={`py-3 text-sm font-bold rounded-lg transition-colors border ${
                !size.available
                  ? "bg-[#E5E5E5] text-[#232321]/30 cursor-not-allowed border-transparent"
                  : selectedSize === size.val
                  ? "bg-[#232321] text-white border-[#232321]"
                  : "bg-white text-[#232321] border-transparent hover:border-[#232321]"
              }`}
            >
              {size.val}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex gap-3">
          <button className="flex-1 bg-[#232321] text-white font-bold text-sm uppercase py-4 rounded-xl hover:bg-black transition-colors">
            ADD TO CART
          </button>
          <button className="w-14 h-14 bg-[#232321] text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors shrink-0">
            <FaRegHeart className="w-5 h-5" />
          </button>
        </div>
        <button className="w-full bg-[#4A69E2] text-white font-bold text-sm uppercase py-4 rounded-xl hover:bg-[#232321] hover:shadow-black/30 transition-colors">
          BUY IT NOW
        </button>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-3 mt-4">
        <h3 className="font-bold text-[#232321] uppercase">About the product</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

    </div>
  );
}