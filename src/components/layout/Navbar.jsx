// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FiSearch, FiUser, FiChevronDown } from "react-icons/fi";
// import { FaCaretDown } from "react-icons/fa6";
// import { useCart } from "@/context/CartContext";
// import logoImg from "@/assets/images/logo.png";

// export default function Navbar() {
//   const { cartCount } = useCart();

//   // Subtle entrance animation for the header
//   const navVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { type: "spring", stiffness: 100, damping: 15 } 
//     },
//   };

//   return (
//     <motion.header 
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//       className="pt-6 w-full relative z-50"
//     >
//       <div className="container">
//         <nav className="bg-[#FAFAFA] h-24 rounded-4xl px-8 flex items-center justify-between shadow-sm">
          
//           {/* Left Section: Navigation Links */}
//           <div className="flex items-center gap-8 font-medium text-gray-900">
//             <Link href="/" className="hover:text-gray-600 transition-colors">
//               New Drops 🔥
//             </Link>
            
//             <button className="flex items-center gap-1 hover:text-gray-600 transition-colors group">
//               Men
//               <FaCaretDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
//             </button>
            
//             <button className="flex items-center gap-1 hover:text-gray-600 transition-colors group">
//               Women
//               <FaCaretDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
//             </button>
//           </div>

//           {/* Center Section: Image Logo */}
//           <div className="absolute left-1/2 -translate-x-1/2">
//             <Link href="/">
//               <Image 
//                 src={logoImg}
//                 alt="Kicks Logo" 
//                 className="w-32 h-auto object-contain hover:scale-105 transition-transform"
//                 priority              
//               />
//             </Link>
//           </div>

//           {/* Right Section: React Icons & Cart Badge */}
//           <div className="flex items-center gap-6 text-gray-900">
//             <button aria-label="Search" className="hover:scale-110 transition-transform">
//               <FiSearch className="w-6 h-6" />
//             </button>
            
//             <button aria-label="User Profile" className="hover:scale-110 transition-transform">
//               <FiUser className="w-6 h-6" />
//             </button>

//             <Link href="/cart" className="relative hover:scale-105 transition-transform">
//               <div className="bg-[#FFA52F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
//                 {cartCount}
//               </div>
//             </Link>
//           </div>

//         </nav>
//       </div>
//     </motion.header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi"; // Added FiX for the close button
import { FaCaretDown } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import logoImg from "@/assets/images/logo.png";

export default function Navbar() {
  const { cartCount } = useCart();
  
  // 1. State to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="pt-6 w-full relative z-50"
    >
      <div className="container relative">
        <nav className="bg-[#FAFAFA] h-20 md:h-24 rounded-3xl md:rounded-4xl px-4 md:px-8 flex items-center justify-between shadow-sm relative z-50">
          
          {/* MOBILE LEFT SECTION: Hamburger Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu" 
              className="hover:scale-110 transition-transform text-gray-900"
            >
              {/* Toggle between Menu and X icon based on state */}
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* DESKTOP LEFT SECTION: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-gray-900">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              New Drops 🔥
            </Link>
            
            <button className="flex items-center gap-1 hover:text-gray-600 transition-colors group">
              Men
              <FaCaretDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            
            <button className="flex items-center gap-1 hover:text-gray-600 transition-colors group">
              Women
              <FaCaretDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
          </div>

          {/* Center Section: Image Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image 
                src={logoImg}
                alt="Kicks Logo" 
                className="w-24 md:w-32 h-auto object-contain hover:scale-105 transition-transform"
                priority              
              />
            </Link>
          </div>

          {/* Right Section: React Icons & Cart Badge */}
          <div className="flex items-center gap-4 md:gap-6 text-gray-900">
            <button aria-label="Search" className="hidden lg:block hover:scale-110 transition-transform">
              <FiSearch className="w-6 h-6" />
            </button>
            
            <button aria-label="User Profile" className="hover:scale-110 transition-transform">
              <FiUser className="w-6 h-6" />
            </button>

            <Link href="/cart" className="relative hover:scale-105 transition-transform">
              <div className="bg-[#FFA52F] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm">
                {cartCount}
              </div>
            </Link>
          </div>
        </nav>

        {/* 2. MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-24 left-4 right-4 bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-6 lg:hidden z-40 border border-gray-100"
            >
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                New Drops 🔥
              </Link>
              
              <div className="w-full h-px bg-gray-100"></div>
              
              <button className="flex items-center justify-between text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
                Men
                <FaCaretDown className="w-4 h-4" />
              </button>
              
              <div className="w-full h-px bg-gray-100"></div>

              <button className="flex items-center justify-between text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
                Women
                <FaCaretDown className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}