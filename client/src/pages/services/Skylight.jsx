import React, { useState } from "react";

import {
  FaSun,
  FaBolt,
  FaStar,
  FaWind,
  FaThermometerHalf,
  FaShieldAlt,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Skylight = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const benefits = [
    {
      text: "Natural Daylight — Skylights fill interiors with abundant natural sunlight, reducing dependence on artificial lighting and creating vibrant living spaces.",
      icon: <FaSun className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Energy Efficiency — Reduced artificial lighting and improved heat control help lower electricity consumption and enhance sustainability.",
      icon: <FaBolt className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Modern Architectural Elegance — Aluminium fins and skylights elevate building aesthetics with sleek, contemporary design appeal.",
      icon: <FaStar className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Improved Ventilation — Skylights can support fresh airflow, promoting a healthier and naturally ventilated environment.",
      icon: <FaWind className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Shading & Heat Control — Aluminium fins help regulate direct sunlight, reducing glare and controlling internal temperature without blocking brightness.",
      icon: <FaThermometerHalf className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Durable & Low Maintenance — Aluminium fins and skylight systems are corrosion-resistant, weatherproof, and require minimal upkeep for long-lasting performance.",
      icon: <FaShieldAlt className="text-[#F37021] text-xl sm:text-lg" />,
    },
  ];

  const projectData = [
    {
      id: 1,
      title: "SKYLIGHT ",
      img: "/servicesimg/skylight/skylight 2.jpg",
    },
    {
      id: 2,
      title: "ALUMINIUM FINS",
      img: "/servicesimg/skylight/aluminium fins 1.jpg",
    },
    {
      id: 3,
      title: "ALUMINIUM FINS",
      img: "/servicesimg/skylight/aluminium fins 2.jpg",
    },
    {
      id: 4,
      title: "ALUMINIUM FINS",
      img: "/servicesimg/skylight/aluminium fins 3.jpg",
    },
    {
      id: 5,
      title: "SKYLIGHT ",
      img: "/servicesimg/skylight/skylight 1.jpg",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const openImageModal = (img) => setSelectedImage(img);
  const closeImageModal = () => setSelectedImage(null);

  return (
    <div className="w-full font-sans -mt-8 bg-white">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-screen max-h-[75vh] overflow-hidden">
        <div className="absolute top-6 right-6 z-30">
          <img
            src="/logo1.webp"
            alt="The Goodwill Facades Logo"
            className="h-18 md:h-25 w-auto"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <img
          src="/servicesimg/skylight/skylight.jpg"
          alt="Skylight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-wide"
          >
            <span className="text-white"> Skylight</span>{" "}
            <span className="text-orange-400">& Aluminium Fins</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base text-white/90 max-w-xl mx-auto mb-8"
          >
            Premium architectural solutions with innovative Skylight & Aluminium
            Fins composite panels
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* 🔹 Benefits Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Why Choose{" "}
            <span className="text-orange-600">Skylight & Aluminium Fins?</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-700 text-base sm:text-xl">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-tl-4xl rounded-br-4xl overflow-hidden">
                <img
                  src="/servicesimg/skylight/skylight.jpg"
                  alt="MS_Structure"
                  className="w-full h-[600px] object-fill transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-medium text-lg">
                    Modern Skylight & Aluminium Fins Installation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 Replaced Section — Projects Style Grid */}
      {/* ✅ NEW — SAME AS Projects Page STYLE */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 bg-gray-50 text-center">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{
              background:
                "linear-gradient(90deg, #E86C0C 0%, #001F5F 70%, #C4C4C4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Skylight & Aluminium Fins
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto mt-4">
            Explore our range of modern architectural Skylight & Aluminium Fins
            installations.
          </p>
        </div>

        {/* ✅ SAME GRID STYLE AS PROJECT PAGE */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative overflow-hidden rounded-tl-4xl rounded-br-4xl group 
        bg-white shadow-md hover:shadow-lg transition h-auto
        ${index === 0 ? "sm:col-span-2 md:col-span-2" : ""}`}
              variants={cardVariants}
              onClick={() => openImageModal(project.img)}
            >
              {/* Image */}
              <div className="w-full h-[250px] sm:h-[320px] md:h-[450px] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center brightness-90 
            transform transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title BELOW image — TEXT + UNDERLINE */}
              {/* <div className="py-4 px-3 text-left">
                <div className="inline-block">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0B3558]">
                    {project.title}
                  </h3>
                  <div className="w-10 h-[3px] bg-[#F37021] mt-2 mx-auto rounded-full"></div>
                </div>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
        {/* 🔹 View All Projects Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/projects/detail_project"
            className="px-6 sm:px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-[#F37021] to-[#001F5F] text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white hover:bg-white/20 text-black p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skylight;
