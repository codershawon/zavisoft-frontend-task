"use client";

import { useParams } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import { ErrorState, Loader } from "@/components/ui/States";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetailsPage() {
  const params = useParams();
  const { product, isLoading, error } = useProduct(params.id);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader /></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center"><ErrorState message={error} /></div>;
  if (!product) return null;

  return (
    <main className="bg-[#EAEAEA] min-h-screen pb-24">
      <div className="container pt-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Images */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} />
          </div>

          {/* Right Side: Product Information */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </div>
    </main>
  );
}