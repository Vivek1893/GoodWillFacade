


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "../../utils/contentful";

const ProjectDetailDynamic = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (img, index) => {
    setSelectedImage(img);
    setCurrentImageIndex(index);
  };
  const closeImageModal = () => setSelectedImage(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const handleImageInteraction = (img, index) => {
    if (isMobile) {
      setShowInfo((prev) => !prev);
    } else {
      openImageModal(img, index);
    }
  };

  const nextImage = () => {
    if (project?.gallery && project.gallery.length > 0) {
      const nextIndex = (currentImageIndex + 1) % project.gallery.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(project.gallery[nextIndex]);
    }
  };

  const prevImage = () => {
    if (project?.gallery && project.gallery.length > 0) {
      const prevIndex =
        currentImageIndex === 0
          ? project.gallery.length - 1
          : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(project.gallery[prevIndex]);
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const projects = await getProjects();
        const foundProject = projects.find((p) => p.id === projectId);

        if (foundProject) {
          setProject(foundProject);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Failed to load project details");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Project not found"}</p>
          <p className="text-gray-600">
            Please check the project ID and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen">
      {/* Title Section */}
      <div className="w-full font-sans text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-4xl md:text-5xl mt-2 font-bold tracking-tight text-gray-900 mb-2"
        >
          {project.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg mb-6"
        >
          Premium architectural solutions with unmatched durability and elegance
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-1 bg-[#ff8c00] mx-auto rounded-full"
        />
      </div>

      {/* Image + Info Side by Side */}
      <div className="flex flex-col md:flex-row items-start justify-center px-2 md:px-8 lg:px-16 max-w-6xl mx-auto mb-8 relative">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-3/5 rounded-xl relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => !isMobile && setShowInfo(true)}
          // onMouseLeave={() => !isMobile && setShowInfo(false)}
        >
          <img
            src={project.gallery?.[0] || project.img}
            alt={project.name}
            className="w-full h-auto max-h-[700px] object-contain rounded-xl mb-4 transition-transform duration-500 hover:scale-105 cursor-pointer"
            onClick={() =>
              handleImageInteraction(project.gallery?.[0] || project.img, 0)
            }
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Gallery Thumbnails */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {project.gallery.slice(1).map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${project.name} - Image ${index + 2}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => handleImageInteraction(img, index + 1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Info Panel - Right Side */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              className="w-full md:w-3/5 md:ml-8 mt-6 md:mt-0 bg-white rounded-xl shadow-lg border border-gray-200  flex flex-col justify-start gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4 text-center md:text-left">
                <InfoItem title="Project Name" value={project.name} />
                <InfoItem title="Architect" value={project.architect || "N/A"} />
                <InfoItem title="Builder" value={project.builder || "N/A"} />
                <InfoItem title="Quantity" value={project.quantity || "N/A"} />
                <InfoItem
                  title="Type of Work"
                  value={project.typeOfWork || "N/A"}
                />
                <InfoItem title="Sub Type" value={project.subType || "N/A"} />
                {project.projectLocation && (
                  <InfoItem
                    title="Project Location"
                    value={
                      typeof project.projectLocation === "string"
                        ? project.projectLocation
                        : `Lat: ${project.projectLocation.lat}, Lon: ${project.projectLocation.lon}`
                    }
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
              {project.gallery && project.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              )}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const InfoItem = ({ title, value }) => (
  <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
    <p className="text-base text-blue-900 font-bold">{title}</p>
    <p className="text-base md:text-base font-medium text-gray-800">{value}</p>
  </div>
);

export default ProjectDetailDynamic;
