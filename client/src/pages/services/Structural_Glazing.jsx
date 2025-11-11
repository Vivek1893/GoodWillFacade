




import React, { useState } from "react";
import {
  FaCheck,
  FaBolt,
  FaLeaf,
  FaShieldAlt,
  FaCubes,
  FaStar,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Structural_Glazing = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Benefits with icons
  const benefits = [
    {
      text: "Seamless & Modern Appearance — Experience a smooth, uninterrupted glass surface that gives your project a premium and contemporary look.",
      icon: <FaStar className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Energy Efficient — Structural glazing helps maintain indoor temperature by reducing heat transfer, lowering air-conditioning and energy costs.",
      icon: <FaBolt className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Enhanced Natural Light — Maximizes daylight inside the building, reducing dependency on artificial lighting and creating a bright environment.",
      icon: <FaLeaf className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Weather & Noise Protection — Airtight sealing prevents dust, water leakage, and noise intrusion—ideal for buildings located in busy or harsh environments.",
      icon: <FaShieldAlt className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Strong, Safe & Durable — High-strength silicone absorbs pressure caused by wind, temperature changes, and environmental vibrations, ensuring long life.",
      icon: <FaCubes className="text-[#F37021] text-xl sm:text-lg" />,
    },
    {
      text: "Flexible Design Options — Can be customized to fit various shapes and designs, making it suitable for commercial spaces, offices, showrooms, and modern homes.",
      icon: <FaCheck className="text-[#F37021] text-xl sm:text-lg" />,
    },
  ];

  const projectData = [
    {
      id: 1,
      title: "MAPLE SQUARE",
      img: "/servicesimg/structural_img/MAPLE SQUARE - BHARUCH.jpg",
    },
    {
      id: 2,
      title: "CANAL POINT",
      img: "/servicesimg/structural_img/CANAL POINT - SURAT.jpg",
    },
    {
      id: 3,
      title: "MILESTONE INDIGO",
      img: "/servicesimg/structural_img/MILESTONE INDIGO - SURAT.jpg",
    },
    {
      id: 4,
      title: "VELOCITY",
      img: "/servicesimg/structural_img/VELOCITY - SURAT.webp",
    },
    {
      id: 5,
      title: "ZIRCONE ARENEA",
      img: "/servicesimg/structural_img/ZIRCONE ARENEA - SURAT.webp",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const openImageModal = (img) => setSelectedImage(img);
  const closeImageModal = () => setSelectedImage(null);

  return (
    <div className="w-full font-sans -mt-8 bg-white">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-screen max-h-[75vh] overflow-hidden">
        <div className="absolute top-6 right-6 z-30">
          <img src="/logo1.webp" alt="Logo" className="h-18 md:h-25 w-auto" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <img
          src="/servicesimg/structural_img/Structural-Glazing-side-bg.jpg"
          alt="Structural Glazing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide"
          >
            <span className="text-white">Structural</span>{" "}
            <span className="text-orange-400">Glazing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base text-white/90 max-w-xl mx-auto mb-8"
          >
            Premium architectural solutions with innovative Structural Glazing composite panels
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          />
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
            Why Choose <span className="text-orange-600">Structural Glazing?</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List with Icons */}
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
                  <p className="text-gray-700 text-base sm:text-xl">{benefit.text}</p>
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
                  src="/servicesimg/structural_img/Structural-Glazing-side-bg.jpg"
                  alt="Structural Glazing Installation"
                  className="w-full h-[600px] object-fill transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-medium text-lg">
                    Modern Structural Glazing Installation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 Projects Grid */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 bg-gray-50 text-center">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{
              background: "linear-gradient(90deg, #E86C0C 0%, #001F5F 70%, #C4C4C4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Structural Glazing
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto mt-4">
            Explore our range of modern architectural Structural Glazing installations.
          </p>
        </div>

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
                bg-white shadow-md hover:shadow-lg transition h-auto ${
                  index === 0 ? "sm:col-span-2 md:col-span-2" : ""
                }`}
              variants={cardVariants}
              onClick={() => openImageModal(project.img)}
            >
              <div className="w-full h-[250px] sm:h-[320px] md:h-[450px] overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center brightness-90 transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <Link
            to="/projects/detail_project"
            className="px-6 sm:px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-[#F37021] to-[#001F5F] text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* 🔹 Image Modal */}
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

export default Structural_Glazing;

