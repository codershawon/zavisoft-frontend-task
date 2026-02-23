import CategoriesSliderSection from "@/components/home/CategoriesSlider";
import HeroBanner from "@/components/home/HereBanner";
import NewDropsSection from "@/components/home/Products";
import ReviewsSection from "@/components/home/Reviews";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <NewDropsSection/>
      <CategoriesSliderSection/>
      <ReviewsSection/>
    </div>
  );
}
