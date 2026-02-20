import CategoriesSliderSection from "@/components/home/CategoriesSlider";
import HeroBanner from "@/components/home/HereBanner";
import NewDropsSection from "@/components/home/Products";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <NewDropsSection/>
      <CategoriesSliderSection/>
    </div>
  );
}
