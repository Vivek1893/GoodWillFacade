





import React from "react";
import { motion } from "framer-motion";

const About = () => {
  
  return (
    <>
      {/* 🔹 About Banner */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen max-h-[75vh] -mt-8 overflow-hidden">
        {/* Logo Branding - Top Right */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30">
          <img
            src="/logo.png" 
            alt="The Goodwill Facades Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <img
          src="/project7.webp"
          alt="ACP Cladding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl  md:text-4xl  font-bold text-white mb-3 sm:mb-4 tracking-wide"
          >
            <span className="text-white"> About The </span>{" "}
            <span className="text-orange-400"> Goodwill Facades</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* 🔹 WHO WE ARE */}
      <section
        className="relative bg-cover bg-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20"
        style={{ backgroundImage: `url('/images/about-bg.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-col  lg:flex-row items-center gap-6 sm:gap-8 md:gap-10">
          {/* Left Side - Image - For md and lg screens image comes first */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 md:order-1 lg:order-1">
            <div className="relative group w-full max-w-md">
              <img
                src="/Structural-Glazing-Works.webp"
                alt="Who We Are"
                className="rounded-xl sm:rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Content - For md and lg screens content comes after image */}
          <div className="w-full lg:w-1/2 text-gray-900 space-y-4 sm:space-y-6 order-2 md:order-2 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#171755] leading-tight">
              About Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-[#EC7310]">
                THE GOODWILL FACADE
              </span>
              is A Specialist Facade Design & Engineering Group Providing
              Extensive Services To Developers, Architects, Facade Contactors
              And Main Contactor In The Field Of Architectural Facades &
              Building Maintenance Solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our team brings together innovation, precision, and global
              expertise to deliver high-performance façade systems. We focus on
              design excellence and engineering accuracy to create sustainable,
              durable, and visually striking building envelopes.{" "}
              <span className="font-medium"></span>{" "}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              With a client-centric approach, we provide end-to-end solutions —
              from concept design to execution.{" "}
              <span className="font-medium">
                At THE GOODWILL FACADE, we aim to transform architectural
                visions into reality while maintaining the highest standards of
              </span>{" "}
              and{" "}
              <span className="font-medium">
                safety, quality, and efficiency.
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 OUR STORY */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#171755] ">
              Our Story
            </h2>
            <p className="mt-4 lg:mt-0 max-w-xl text-gray-900 text-sm sm:text-base md:text-lg">
              At THE GOODWILL FACADE, we redefine architectural elegance with
              cutting-edge façade engineering and design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* Left Text */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed">
                Founded with a vision to transform skylines, THE GOODWILL FACADE
                brings together innovation, craftsmanship, and engineering
                precision. Our team specializes in delivering sustainable and
                modern façade systems that enhance both functionality and
                aesthetics.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Who We Are
                </h3>
                <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed">
                  We are a specialist façade design and engineering group
                  committed to providing extensive services to developers,
                  architects, contractors, and builders in the field of
                  architectural façades and building maintenance solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Why We Exist
                </h3>
                <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed">
                  Our mission is to blend design excellence with engineering
                  accuracy — helping clients create iconic structures that stand
                  the test of time while maintaining the highest standards of
                  safety, quality, and efficiency.
                </p>
              </div>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <img
                src="/ourstory1.jpg"
                alt="Team discussion"
                className="object-cover w-full h-32 sm:h-40 md:h-64 lg:h-80 xl:h-[400px] rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl rounded-br-2xl sm:rounded-br-3xl md:rounded-br-4xl"
              />
              <img
                src="/ourstory2.jpg"
                alt="Financial planning meeting"
                className="object-cover w-full h-32 sm:h-40 md:h-64 lg:h-80 xl:h-[400px] mt-4 sm:mt-6 md:mt-12 lg:mt-20 rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl rounded-br-2xl sm:rounded-br-3xl md:rounded-br-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Vision | Mission | Values */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center">
            {/* Vision */}
            <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1">
              <img
                src="/Our-Vision.jpg"
                alt="Vision"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover shadow-md rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl rounded-br-2xl sm:rounded-br-3xl md:rounded-br-4xl"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#171755] uppercase tracking-wide">
                Our Vision
              </h3>
              <div className="w-12 h-[2px] bg-[#F37021] mx-auto"></div>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg text-left leading-relaxed px-2">
                See Farther To Seek Out Competitive Business Advantages For Our
                Clients Through The Innovative Use Of Technology And To Help
                Them Achieve Long-term Success And Prosperity
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1 md:order-last lg:order-none">
              <img
                src="/ourmission.jpg"
                alt="Mission"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover shadow-md rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl rounded-br-2xl sm:rounded-br-3xl md:rounded-br-4xl"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#171755] uppercase tracking-wide">
                Our Mission
              </h3>
              <div className="w-12 h-[2px] bg-[#F37021] mx-auto"></div>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg text-left leading-relaxed px-2">
                To Deliver Best To The Our Clients Through Innovative Use Of New
                Technologies, Support, Services And Customer Referrals; And Also
                To Be The Best Facade Company In Our Markets
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1">
              <img
                src="/ourvalue.jpg"
                alt="Core Values"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover shadow-md rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl rounded-br-2xl sm:rounded-br-3xl md:rounded-br-4xl"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#171755] uppercase tracking-wide">
                Core Values
              </h3>
              <div className="w-12 h-[2px] bg-[#F37021] mx-auto"></div>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg text-left leading-relaxed px-2">
                Our growth and success are based upon ethical practices,
                integrity, respect, responsibility, safety, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;