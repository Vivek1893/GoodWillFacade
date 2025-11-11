import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* ✅ TOP FOOTER SECTION */}
      <div
        className="w-full text-white bg-gradient-to-r from-blue-900/20 to-blue-800/60 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8
        border-t-4 border-[#F37021] rounded-tl-[20px] sm:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] sm:rounded-tr-[30px] lg:rounded-tr-[40px]"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8">
          
          {/* LOGO - Responsive sizing */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img
              src="/logo1.webp"
              alt="Goodwill Logo"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto transition-all duration-300"
            />
          </div>

          {/* DESCRIPTION - Responsive text and spacing */}
          <nav className="flex-1 text-center lg:text-left">
            <p className=" text-sm sm:text-base md:text-lg text-left  px-2 font-medium text-gray-800 leading-relaxed sm:leading-loose">
              Leading providers of premium Facade solutions, we transform spaces
              with innovative designs and exceptional craftsmanship, delivering
              durable, weather-resistant, and aesthetically striking finishes that
              redefine modern architectural possibilities for both exterior
              facades and interior applications.
            </p>
          </nav>
        </div>
      </div>

      {/* ✅ BOTTOM FOOTER SECTION */}
      <div className="bg-[#0E2C4C] py-3 sm:py-4 lg:py-5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 text-white gap-3 sm:gap-4 lg:gap-6">
          
          {/* COPYRIGHT - Responsive text and alignment */}
          <div className="w-full lg:w-auto text-center lg:text-left order-1">
            <span className="text-white text-sm sm:text-base md:text-lg text-left leading-relaxed px-2 whitespace-nowrap">
              © 2025 The Goodwill Facade. All Rights Reserved.
            </span>
          </div>

          {/* CONTACT INFO - Responsive layout */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4 lg:gap-6 order-2 lg:order-2">
            
            {/* EMAIL */}
            <a
              href="mailto:thegoodwillfacade@gmail.com"
              className="flex items-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <MdEmail className="text-sm sm:text-base lg:text-lg text-[#dd671d] flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg  leading-relaxed px-2break-all sm:break-normal text-center sm:text-left">
                thegoodwillfacade@gmail.com
              </span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+919892118052"
              className="flex items-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <MdCall className="text-sm sm:text-base lg:text-lg text-[#dd671d] flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg text-left leading-relaxed px-2whitespace-nowrap">
                +91 9892118052
              </span>
            </a>

          </div>

        </div>
      </div>

     

    </footer>
  );
};

export default Footer;