"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaCheck, FaPlus } from "react-icons/fa6";
import kicksLogo from "@/assets/images/kicks-logo.png";
import Image from "next/image";

export default function NewsletterSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Successfully subscribed:", data.email);
      reset();
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };

  return (
    <section>
      <div className="bg-[#4A69E2] rounded-t-4xl md:rounded-t-[48px] p-8 md:p-16 pb-20 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side: Text and Form */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          
          {/* Headings */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tighter">
              JOIN OUR KICKSPLUS <br className="hidden md:block" />
              CLUB & GET 15% OFF
            </h2>
            <p className="text-white/80 text-sm md:text-xl font-medium">
              Sign up for free! Join the community.
            </p>
          </div>

          {/* React Hook Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2 max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                disabled={isSubmitting}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                className="flex-1 bg-transparent border border-white/40 rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
              />
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                type="submit"
                className="bg-[#232321] text-white text-xs md:text-sm font-bold uppercase px-6 py-3 rounded-lg hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-w-[100px] flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "SUBMIT"
                )}
              </motion.button>
            </div>

            {/* Error and Success UI States */}
            <div className="min-h-5">
              {errors.email && (
                <span className="text-[#FFA52F] text-xs font-bold drop-shadow-sm">
                  * {errors.email.message}
                </span>
              )}
              {isSubmitSuccessful && !errors.email && (
                <span className="text-green-300 text-xs font-bold drop-shadow-sm flex items-center gap-1.5">
                  <FaCheck className="w-3 h-3" /> Successfully joined the club!
                </span>
              )}
            </div>
          </form>

        </div>

        {/* Right Side: KICKS+ Logo Recreation */}
        <div className="w-full lg:w-1/2 flex justify-start md:justify-center select-none mt-8 lg:mt-0">
           <div className="relative inline-block">
             {/* Your Logo Image */}
             <Image 
               src={kicksLogo} 
               alt="Kicks Logo"
               width={400} 
               height={150} 
               className="object-contain w-50 md:w-87.5 h-auto drop-shadow-sm" 
               priority 
             />
             
             {/* The badge */}
             <span className="absolute -top-4 -right-4 md:-top-7 md:-right-6 bg-[#FFA52F] text-white rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center shadow-md">
               <FaPlus className="w-3 h-3 md:w-5 md:h-5" />
             </span>

           </div>
        </div>
      </div>
    </section>
  );
}