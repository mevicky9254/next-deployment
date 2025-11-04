// components/ui/PortfolioSlider.tsx
'use client';

import React from 'react';
import Image from 'next/image';

// 1. IMPORT FIX & AUTOPLAY MODULE ADDED
// This is the correct import path for modern Swiper (v9+).
// We've also added 'Autoplay' to the list of imported modules.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper/modules';

import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


// --- PORTFOLIO DATA ---
// Replace with your actual project data
const portfolioItems = [
  {
    logo: '/wow-study-logo.png', // Replace with your logo path
    title: 'WOW STUDY',
    description: 'Developed a student-first platform for WOW Study, helping students turn global study dreams into reality with expert guidance and international university partnerships.',
    image: '/wow-study-screenshot.png', // Replace with your project image path
  },
  {
    logo: '/placeholder-logo-2.png',
    title: 'PROJECT TWO',
    description: 'This is a description for the second amazing project. It showcases our ability to deliver high-quality, scalable solutions for our clients in the tech industry.',
    image: '/placeholder-image-2.png',
  },
  {
    logo: '/placeholder-logo-3.png',
    title: 'PROJECT THREE',
    description: 'The third project involved creating a complex e-commerce platform with a custom backend, demonstrating our expertise in full-stack development and user experience design.',
    image: '/placeholder-image-3.png',
  },
];


const PortfolioSlider = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-cyan-400 font-semibold tracking-wider mb-4">
            A GLIMPSE OF OUR WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
           Your Success is Our Motivation
          </h2>
          <p className="text-gray-400 mt-6 text-base leading-relaxed">
            "Our work speaks for itself. At Zovinity, we’ve partnered with brands across industries, delivering cutting-edge web design and development solutions that drive growth and digital excellence."
          </p>
        </div>

        {/* --- Slider --- */}
        <div className="mt-16 relative">
          <Swiper
            // 2. ADD AUTOPLAY TO THE LIST OF MODULES
            modules={[Navigation, A11y, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            // 3. CONFIGURE AUTOPLAY
            autoplay={{
              delay: 4000, // Time between slides in ms (e.g., 4 seconds)
              disableOnInteraction: false, // Autoplay will resume after manual navigation
              pauseOnMouseEnter: true,     // Autoplay pauses when the user hovers over the slider
            }}
            className="portfolio-swiper"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Column: Text Content */}
                  <div className="text-center lg:text-left">
                    <Image 
                      src={item.logo} 
                      alt={`${item.title} logo`}
                      width={120} 
                      height={120}
                      className="mx-auto lg:mx-0 mb-6"
                    />
                    <h3 className="text-3xl font-bold tracking-wide border-b-2 border-cyan-500 inline-block pb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mt-6 text-lg">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Right Column: Image */}
                  <div className="relative">
                     <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gray-700 rounded-tl-3xl"></div>
                     <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gray-700 rounded-br-3xl"></div>
                    <div className="bg-gray-800 p-4 rounded-2xl shadow-2xl">
                       <Image 
                        src={item.image} 
                        alt={item.title}
                        width={800} 
                        height={600}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 md:left-4 -translate-y-1/2 z-10 cursor-pointer bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-full p-3">
            <ChevronLeft size={32} />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 md:right-4 -translate-y-1/2 z-10 cursor-pointer bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-full p-3">
            <ChevronRight size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;