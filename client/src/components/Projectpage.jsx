

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "SHIVEN ARISE",
      img: "./SHIVEN ARISE.webp",
      path: "/projects/Detail_project/GodrejPlatinum",
    },
    {
      id: 2,
      title: "ATHARV HEIGHTS",
      img: "./project1.jpg",
    },
    {
      id: 3,
      title: "MILESTONE INDIGO",
      img: "./project3.jpg",
    },
    {
      id: 4,
      title: "EVOQ",
      img: "./project4.png",
    },
    {
      id: 5,
      title: "VIVIANA VESU",
      img: "./project2.png",
    },
  ];

  // 🔹 Animation Variants
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

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 bg-white text-center">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <h2
          className="text-2xl text-[#0E2C4C] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4"
          // style={{
          //   background:
          //     "linear-gradient(90deg, #E86C0C 0%, #001F5F 70%, #C4C4C4 100%)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          //   backgroundClip: "text",
          //   color: "transparent",
          // }}
        >
          Our Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-900 max-w-5xl text-center sm:text-left mx-auto mt-3 sm:mt-4 px-2 sm:px-4">
          From high-end homes to modern office spaces, each project is a
          reflection of quality, detail, and dedication.
        </p>
      </div>

      {/* 🔹 Animated Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative overflow-hidden rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl rounded-br-2xl sm:rounded-br-3xl md:rounded-br-4xl group 
            bg-white shadow-md hover:shadow-lg transition h-auto
            ${index === 0 ? "sm:col-span-2 md:col-span-2" : ""}`}
            variants={cardVariants}
          >
            {/* Image */}
            <div className="w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-[450px] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-center brightness-90 
                transform transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title Below Image */}
            {/* Title Below Image */}
            <div className="py-3 sm:py-4 px-3 flex flex-col items-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#0B3558] text-center">
                {project.title}
              </h3>

              {/* underline centered */}
              <div className="w-8 sm:w-10 h-[2px] sm:h-[3px] bg-[#F37021] mt-2 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <Link to="/projects/Project_list">
        <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 hover:bg-[#001F5F] hover:text-white cursor-pointer text-white text-sm sm:text-base font-medium rounded-full transition">
          View All Projects
        </button>
      </Link>
    </section>
  );
};

export default Projects;
