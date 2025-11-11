

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState({});

  const slides = useMemo(
    () => [
      {
        leftImage: "/hero10.webp",
        rightImage: "/hero9.webp",
        mobileImage: "/hero2.webp",
        leftTitle: "VIMAL LAXMI - BORIVALI(W) ",
        rightTitle: "SHREE VARDHMAN - BORIVALI(W)",
      },
      {
        leftImage: "/hero2.webp",
        rightImage: "/hero1.webp",
        mobileImage: "/hero2.webp",
        leftTitle: "HUM SOLARIS - KANDIVALI(W) ",
        rightTitle: "USD -UNIQUE REGALIA - BORIVALI(W)",
      },
      {
        leftImage: "/hero4.webp",
        rightImage: "/hero5.webp",
        mobileImage: "/hero5.webp",
        leftTitle: "GOYAL ASPIRE - KANDIVALI(W)",
        rightTitle: "AMBIT PRIMORIS - KANDIVALI(W)",
      },
      {
        leftImage: "/hero3.webp",
        rightImage: "/hero7.webp",
        mobileImage: "/hero3.webp",
        leftTitle: "ZIRCON ARENA - PAL - SURAT",
        rightTitle: "CANAL POINT - SURAT",
      },
      {
        leftImage: "/hero6.jpg",
        rightImage: "/hero8.webp",
        mobileImage: "/hero8.webp",
        leftTitle: "SKY RISE - SURAT",
        rightTitle: "VELOCITY - PAL - SURAT",
      },
    ],
    []
  );

  // Preload images
  useEffect(() => {
    const imageUrls = [];
    slides.forEach((slide) => {
      imageUrls.push(slide.leftImage, slide.rightImage, slide.mobileImage);
    });

    const uniqueUrls = [...new Set(imageUrls)];

    const preloadPromises = uniqueUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve({ [url]: true });
        img.onerror = () => resolve({ [url]: false });
      });
    });

    Promise.all(preloadPromises).then((results) => {
      const preloaded = {};
      results.forEach((result) => {
        Object.assign(preloaded, result);
      });
      setPreloadedImages(preloaded);
    });
  }, [slides]);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden -mt-7 max-w-full bg-black">
      {/* ✅ Desktop / Tablet View */}
      <div className="hidden md:flex absolute inset-0">
        {/* Left Half */}
        <div className="w-1/2 h-full flex flex-col items-center relative overflow-hidden group">
          {/* IMAGE */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={slides[currentSlide].leftImage}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 "
              style={{
                backgroundImage: `url(${slides[currentSlide].leftImage})`,
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* TEXT BOX (hidden until hover) */}
          <div className="absolute -bottom-1 w-full flex justify-center z-20 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg flex flex-col items-center shadow-md">
              <h3 className="text-[#171755] text-sm md:text-base lg:text-lg font-semibold drop-shadow-lg text-center">
                {slides[currentSlide].leftTitle}
              </h3>

              {/* underline INSIDE the white box */}
              <div className="w-12 h-[3px] bg-[#ff8c00] mt-1 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ✅ Logo Top Right */}
        <div className="absolute top-4 md:top-6 right-4 md:right-6 z-30">
          <img
            src="/logo1.webp"
            alt="The Goodwill Facades"
            className="h-12 md:h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Right Half */}
         <div className="w-1/2 h-full flex flex-col items-center relative overflow-hidden group">
          {/* IMAGE */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={slides[currentSlide].rightImage}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 "
              style={{
                backgroundImage: `url(${slides[currentSlide].rightImage})`,
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* TEXT BOX (hidden until hover) */}
          <div className="absolute -bottom-1 w-full flex justify-center z-20 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg flex flex-col items-center shadow-md">
              <h3 className="text-[#171755] text-sm md:text-base lg:text-lg font-semibold drop-shadow-lg text-center">
                {slides[currentSlide].rightTitle}
              </h3>

              {/* underline inside the box */}
              <div className="w-12 h-[3px] bg-[#ff8c00] mt-1 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      </div>

      {/* ✅ Mobile View */}
      <div className="flex md:hidden absolute inset-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slides[currentSlide].mobileImage}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].mobileImage})`,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8">
        <button onClick={prevSlide} className="text-white hover:text-[#F37021] transition-colors">
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm hidden sm:block font-medium tracking-wider">PREV</span>
          </div>
        </button>

        <button onClick={nextSlide} className="text-white hover:text-[#F37021] transition-colors">
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
            <span className="text-sm hidden sm:block font-medium tracking-wider">NEXT</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#F37021] scale-110" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
