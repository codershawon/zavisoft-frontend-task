"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import bigKicksLogo from "@/assets/images/kicks-huge-logo.png"; 
import NewsletterSection from "../common/Newsletter";

const FOOTER_CATEGORIES = [
  { label: "Runners", href: "/categories/runners" },
  { label: "Sneakers", href: "/categories/sneakers" },
  { label: "Basketball", href: "/categories/basketball" },
  { label: "Outdoor", href: "/categories/outdoor" },
  { label: "Golf", href: "/categories/golf" },
  { label: "Hiking", href: "/categories/hiking" },
];

const FOOTER_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="container">
      {/* Newsletter Section */}
      <NewsletterSection/>
      <div className="bg-[#232321] rounded-4xl md:rounded-[48px] pt-12 md:pt-20 px-8 md:px-16 -mt-12 overflow-hidden relative flex flex-col justify-between min-h-125">
        
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-20 z-10">
          
          {/* About Us */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-[#FFA52F] text-2xl font-black">About us</h3>
            <p className="text-white/80 text-sm md:text-xl font-medium leading-relaxed max-w-md">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* Column 2: Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#FFA52F] text-2xl font-black">Categories</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_CATEGORIES.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white font-medium text-sm md:text-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#FFA52F] text-2xl font-black">Company</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white font-medium text-sm md:text-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#FFA52F] text-2xl font-black">Follow us</h3>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <Link 
                    key={social.label} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full mt-16 md:mt-24 translate-y-[10%] md:translate-y-[15%] z-0 flex justify-center pointer-events-none select-none">
          <Image 
            src={bigKicksLogo} 
            alt="Kicks Huge Logo" 
            width={1200}
            height={400}
            className="w-full h-auto object-contain opacity-90"
          />
        </div>
      </div>
      <div className="w-full text-center py-6 md:py-8 text-[#232321]/70 font-medium text-sm md:text-base">
        © All rights reserved
      </div>
    </footer>
  );
}