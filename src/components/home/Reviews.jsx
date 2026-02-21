// "use client";

// import ReviewCard from "@/components/reviews/ReviewCard";
// import Button from "../ui/Button";

// const REVIEWS_DATA = [
//   {
//     id: 1,
//     title: "Good Quality",
//     comment: "I highly recommend shopping from kicks",
//     rating: 5.0,
//     userAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop", 
//     reviewImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Good Quality",
//     comment: "I highly recommend shopping from kicks",
//     rating: 5.0,
//     userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
//     reviewImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Good Quality",
//     comment: "I highly recommend shopping from kicks",
//     rating: 5.0,
//     userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
//     reviewImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop",
//   }
// ];

// export default function ReviewsSection() {
//   return (
//     <section className="container py-16 md:py-24">
      
//       {/* Top Header: Title & Button */}
//       <div className="flex justify-between items-end mb-10 gap-4">
//         <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#232321] leading-none">
//           REVIEWS
//         </h2>
        
//         {/* We use the custom Button component you built earlier! */}
//         <Button className="px-6 py-3 text-xs md:text-sm whitespace-nowrap">
//           SEE ALL
//         </Button>
//       </div>

//       {/* Grid: 1 column on mobile, 3 columns on desktop */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {REVIEWS_DATA.map((review) => (
//           <ReviewCard key={review.id} review={review} />
//         ))}
//       </div>

//     </section>
//   );
// }