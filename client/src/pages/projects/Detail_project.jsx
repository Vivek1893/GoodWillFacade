import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjects } from "../../utils/contentful";
import "../../App.css";
import { Helmet } from "react-helmet-async";

const Residential = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProjects()
      .then((data) => {
        const completedProjects = data.filter((p) => p.status === "completed");
        setProjects(completedProjects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading projects: {error}</p>
          <p className="text-gray-600">
            Please check your Contentful configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ✅ SEO FOR RESIDENTIAL PROJECTS PAGE */}
      <Helmet>
        <title>
          Residential Projects | ACP Cladding & Facade Glazing | The Goodwill
          Facades
        </title>

        <meta
          name="description"
          content="Explore completed residential façade projects including ACP cladding, structural glazing, aluminium windows, and curtain wall facades. Delivered by The Goodwill Facades  India's leading facade company."
        />

        <meta
          name="keywords"
          content="residential facade projects, ACP cladding residential, structural glazing contractors, aluminium facade projects, residential elevation design, facade company Mumbai, facade company Surat, completed facade works"
        />

        <link
          rel="canonical"
          href="https://thegoodwillfacade.com/projects/Detail_project"
        />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Residential Projects | ACP Cladding & Façade Glazing"
        />
        <meta
          property="og:description"
          content="See the completed façade projects delivered by The Goodwill Facades — ACP Cladding, Structural Glazing & Aluminium Systems."
        />
        <meta
          property="og:image"
          content="https://thegoodwillfacade.com/images/project.png"
        />
        <meta
          property="og:url"
          content="https://thegoodwillfacade.com/projects/Detail_project"
        />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="robots" content="index, follow" />
        {/* ✅ Schema Markup - Improves Google Ranking */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Residential Facade Projects",
        "description": "Completed residential facade projects by The Goodwill Facades including ACP cladding and glazing systems.",
        "url": "https://thegoodwillfacade.com/projects/Detail_project"
      }
    `}
        </script>
      </Helmet>

      <div className="w-full min-h-screen -mt-5 bg-gray-50">
        {/* Logo Branding - Top Right */}
        <div className="absolute top-25 right-6 z-30">
          <img
            src="/images/logo1.webp"
            alt="The Goodwill Facades Logo"
            className="h-18 md:h-25  w-auto"
          />
        </div>
        {/* Top banner */}
        <div className="relative w-full h-[45vh] -mt-8 sm:h-[60vh] md:h-[75vh]">
          <motion.img
            src="/images/project.png"
            alt="Projects"
            className="w-full h-full object-cover"
            loading="eager"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Project grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No completed projects found.
              </p>
              <p className="text-gray-500">
                Please add some projects in Contentful with status "completed".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.id} to={`/projects/detail/${project.id}`}>
                  <motion.div
                    className="bg-white rounded-md p-4 flex flex-col items-center cursor-pointer shadow-xl hover:shadow"
                    whileHover={{ scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-98 object-cover rounded-md"
                      loading="lazy"
                      onError={(e) => (e.target.src = "/fallback.jpg")}
                      initial={{ opacity: 0, scale: 1.05 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <h3 className="mt-4 text-lg text-[#0B3558] font-semibold text-center">
                      {project.name}
                    </h3>
                    <div className="w-10 sm:w-12 h-[3px] bg-[#F37021] mt-2"></div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Residential;
