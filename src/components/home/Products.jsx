
"use client";


import { Loader, ErrorState } from "@/components/ui/States";
import Button from "../ui/Button";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "../product/ProductCard";

export default function NewDropsSection() {
  const { products, isLoading, error } = useProducts();

  return (
    <section className="container py-12 md:py-20">
      
      {/* Top Header: Title & Button */}
      <div className="flex justify-between items-start md:items-end mb-10 gap-6">
        <h2 className="text-2xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter md:tracking-normal text-[#232321]">
          DON&apos;T MISS OUT <br />
          <span className="text-[#232321]">NEW DROPS</span>
        </h2>
        
        <Button className="px-6 py-3 text-xs md:text-sm">
          Shop New Drops
        </Button>
      </div>

      {/* Dynamic Content Rendering based on State */}
      {isLoading && <Loader />}
      
      {error && <ErrorState message={error} />}
      
      {!isLoading && !error && products.length === 0 && (
        <p className="text-center py-10 text-gray-500">No products available right now.</p>
      )}

      {/* The 4-Column Grid mapping over products */}
      {!isLoading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </section>
  );
}