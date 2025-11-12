import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full bg-white">
      {/* 🔹 About Company Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
        {/* Left Side - Images */}
        <motion.div
          className="relative w-full flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="./images/Structural-Glazing-Works.webp"
            alt="Roof House"
            className="shadow-lg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full max-w-[600px] object-cover transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src="./images/pixlr.jpeg"
            alt="Roof Worker"
            className="absolute bottom-[-30px] right-[-15px] sm:bottom-[-40px] sm:right-[-20px] md:bottom-[-50px] md:right-[-30px] lg:bottom-[-60px] lg:right-[-40px] h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px] w-[100px] sm:w-[150px] md:w-[250px] lg:w-[320px] shadow-lg transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="text-center md:text-left mt-8 sm:mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wider mb-2 sm:mb-3">
            ABOUT US
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Trusted Local <br className="hidden sm:block" /> Construction
            Partner in <span className="text-orange-500">India.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-left text-gray-900 mb-6 sm:mb-8">
            THE GOODWILL FACADE is a specialist Facade Design & Engineering
            group providing extensive services to developers, architects, facade
            contractors, and main contractors in the field of architectural
            facades & building maintenance solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
