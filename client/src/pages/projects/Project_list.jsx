

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../../utils/contentful";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Modal image state
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProjects()
      .then((data) => {
        const ongoingProjects = data.filter((p) => p.status === "ongoing");
        setProjectData(ongoingProjects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full">
      {/* ✅ SEO FOR ONGOING PROJECTS PAGE */}
      <Helmet>
        <title>
          Projects List | Façade Glazing, ACP Cladding & Aluminium Systems
        </title>

        <meta
          name="description"
          content="View our ongoing façade projects featuring structural glazing, ACP cladding, aluminium window systems, suspended glass facades, and curtain wall installations across India."
        />

        <meta
          name="keywords"
          content="ongoing facade projects, facade glazing contractors, ACP cladding work in progress, aluminum facade systems, commercial facade projects, structural glazing work"
        />

        <link
          rel="canonical"
          href="https://thegoodwillfacade.com/projects/Project_list"
        />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph (Social Media Preview) */}
        <meta
          property="og:title"
          content=" Projects List | The Goodwill Facades"
        />
        <meta
          property="og:description"
          content="See Live Ongoing Projects - Structural Glazing, ACP Cladding, Curtain Wall Facades by The Goodwill Facades."
        />
        <meta
          property="og:image"
          content="https://thegoodwillfacade.com/images/project.webp"
        />
        <meta
          property="og:url"
          content="https://thegoodwillfacade.com/projects/Project_list"
        />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "List Facade Projects",
      "description": "List of ongoing facade projects including ACP cladding, structural glazing and aluminium systems.",
      "url": "https://thegoodwillfacade.com/projects/Project_list",
      "itemListOrder": "Ascending"
    }
  `}
        </script>
      </Helmet>

      {/* 🔹 Hero Section (unchanged / original) */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen max-h-[75vh] -mt-8 overflow-hidden">
        {/* Logo Branding - Top Right */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30">
          <img
            src="/images/logo1.webp"
            alt="The Goodwill Facades Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>

        <img
          src="/images/project.webp"
          alt="ACP Cladding"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-wide"
          >
            <span className="text-white"> Project </span>{" "}
            <span className="text-orange-400">Lists</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base text-white/90 max-w-xl mx-auto mb-8"
          >
            Find here our all lastest projects
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* 🔹 Ongoing Projects */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 bg-white text-center">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base">
                Loading projects...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <p className="text-red-600 mb-4 text-sm sm:text-base">
                Error loading projects: {error}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Please check your Contentful configuration.
              </p>
            </div>
          </div>
        ) : projectData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-base sm:text-lg">
              No ongoing projects found.
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Please add some projects in Contentful with status "ongoing".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl rounded-br-2xl sm:rounded-br-3xl md:rounded-br-4xl shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col group"
              >
                {/* ✅ Image Hover Zoom + Click to Open Modal */}
                <div
                  className="h-48 sm:h-64 md:h-80 lg:h-96 w-full overflow-hidden cursor-pointer "
                  onClick={() => setSelectedImage(project.img)}
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 "
                    onError={(e) => (e.target.src = "/fallback.jpg")}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                {/* ✅ Title section */}
                <div className="bg-white w-full text-center p-4 sm:p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl text-[#0B3558] font-semibold mb-2">
                      {project.name}
                    </h3>
                    <div className="flex justify-center">
                      <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-[#F37021] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ✅ MODAL IMAGE VIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/100 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected Project Image"
            className="max-w-3xl max-h-[90vh] object-contain rounded-lg shadow-xl"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
