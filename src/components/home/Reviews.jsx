"use client";

import ReviewCard from "@/components/reviews/ReviewCard";
import Button from "../ui/Button";
import avatar1 from "@/assets/images/avatar1.png";
import avatar2 from "@/assets/images/avatar2.png";
import avatar3 from "@/assets/images/avatar3.png";

import reviewImg1 from "@/assets/images/review1.png";
import reviewImg2 from "@/assets/images/review2.png";
import reviewImg3 from "@/assets/images/review3.png";

const REVIEWS_DATA = [
  {
    id: 1,
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    userAvatar: avatar1, 
    reviewImage: reviewImg1,
  },
  {
    id: 2,
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    userAvatar: avatar2,
    reviewImage: reviewImg2,
  },
  {
    id: 3,
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    userAvatar: avatar3,
    reviewImage: reviewImg3,
  }
];

export default function ReviewsSection() {
  return (
    <section className="container py-16 md:py-24">
      
      {/* Top Header: Title & Button */}
      <div className="flex justify-between items-end mb-10 gap-4">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#232321] leading-none">
          REVIEWS
        </h2>
        
        <Button className="px-6 py-3 text-xs md:text-sm whitespace-nowrap">
          SEE ALL
        </Button>
      </div>

      {/* Grid: 1 column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS_DATA.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

    </section>
  );
}