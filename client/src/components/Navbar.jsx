

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const menuRef = useRef();
  const servicesTimeout = useRef();
  const projectsTimeout = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setServicesOpen(false);
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setProjectsOpen(false);
  };

  // Hover behavior for desktop/tablet
  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      if (menu === "services") {
        clearTimeout(servicesTimeout.current);
        setServicesOpen(true);
      } else if (menu === "projects") {
        clearTimeout(projectsTimeout.current);
        setProjectsOpen(true);
      }
    }
  };

  const handleMouseLeave = (menu) => {
    if (window.innerWidth >= 768) {
      if (menu === "services") {
        servicesTimeout.current = setTimeout(() => setServicesOpen(false), 300);
      } else if (menu === "projects") {
        projectsTimeout.current = setTimeout(() => setProjectsOpen(false), 300);
      }
    }
  };

  const toggleDropdown = (menu) => {
    if (menu === "services") {
      setServicesOpen(!servicesOpen);
      setProjectsOpen(false);
    } else if (menu === "projects") {
      setProjectsOpen(!projectsOpen);
      setServicesOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-b-[#F37021] rounded-b-3xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo1.webp"
              alt="Goodwill Facade"
              className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-orange-500 font-medium"
            >
              HOME
            </Link>
            <Link
              to="/Aboutus"
              className="text-gray-800 hover:text-orange-500 font-medium"
            >
              ABOUT US
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1 text-gray-800 hover:text-orange-500 font-medium transition-colors"
              >
                SERVICES
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-64 mt-2 rounded-lg p-[3px] z-50"
                onMouseEnter={() => clearTimeout(servicesTimeout.current)}
                onMouseLeave={() =>
                  (servicesTimeout.current = setTimeout(
                    () => setServicesOpen(false),
                    300
                  ))
                }
                style={{ display: servicesOpen ? "block" : "none" }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #0B3558, #F37021)",
                  }}
                  className="rounded-lg p-[2px]"
                >
                  <div className="bg-white rounded-lg shadow-xl py-2">
                    {[
                      ["ACP/Fundermax", "/services/ACP"],
                      ["Structural Glazing", "/services/Structural_Glazing"],
                      ["Stone Cladding", "/services/Stone_Cladding"],
                      ["Aluminum Windows", "/services/Aluminum_Windows"],
                      ["Railings", "/services/Railings"],
                      ["Skylight & Aluminium Fins", "/services/Skylight"],
                      ["MS Structure", "/services/MS_Structure"],
                      ["Spider facade", "/services/Tensile_Fabrics"],
                    ].map(([label, path]) => (
                      <Link
                        key={path}
                        to={path}
                        className="block px-4 py-3 text-black hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        onClick={handleLinkClick}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("projects")}
              onMouseLeave={() => handleMouseLeave("projects")}
            >
              <button
                onClick={() => toggleDropdown("projects")}
                className="flex items-center gap-1 text-gray-800 hover:text-orange-500 font-medium transition-colors"
              >
                PROJECTS
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-48 mt-2 rounded-lg p-[3px] z-50"
                onMouseEnter={() => clearTimeout(projectsTimeout.current)}
                onMouseLeave={() =>
                  (projectsTimeout.current = setTimeout(
                    () => setProjectsOpen(false),
                    300
                  ))
                }
                style={{ display: projectsOpen ? "block" : "none" }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #0B3558, #F37021)",
                  }}
                  className="rounded-lg p-[2px]"
                >
                  <div className="bg-white rounded-lg shadow-xl py-2">
                    <Link
                      to="/projects/Detail_project"
                      className="block px-4 py-3 text-black hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Project Detail
                    </Link>
                    <Link
                      to="/projects/Project_list"
                      className="block px-4 py-3 text-black hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Project List
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/ContactUs"
              className="text-gray-800 hover:text-orange-500 font-medium"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Right Side - Search & Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <SearchBar />

            {/* Desktop Social Icons */}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-300">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#4267B2] hover:opacity-80"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/thegoodwillfacade?utm_source=qr&igsh=MWdvNnAwMmJwNGluNA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="text-[#E4405F] hover:opacity-80"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="text-[#25D366] hover:opacity-80"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="lg:hidden bg-white shadow-lg border-t-4 border-[#F37021] rounded-b-3xl overflow-hidden transition-all duration-300 max-h-[80vh] overflow-y-auto"
          >
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 font-medium"
            >
              HOME
            </Link>
            <Link
              to="/Aboutus"
              onClick={handleLinkClick}
              className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 font-medium"
            >
              ABOUT US
            </Link>

            {/* Mobile Services */}
            <div className="border-t border-gray-100">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex justify-between items-center w-full px-6 py-3 text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-600"
              >
                SERVICES
                <span>{servicesOpen ? "−" : "+"}</span>
              </button>
              {servicesOpen && (
                <div className="bg-gray-50">
                  {[
                    ["ACP/Fundermax", "/services/ACP"],
                    ["Structural Glazing", "/services/Structural_Glazing"],
                    ["Stone Cladding", "/services/Stone_Cladding"],
                    ["Aluminum Windows", "/services/Aluminum_Windows"],
                    ["Railings", "/services/Railings"],
                    ["Skylight & Aluminium Fins", "/services/Skylight"],
                    ["MS Structure", "/services/MS_Structure"],
                    ["Spider facade", "/services/Tensile_Fabrics"],
                  ].map(([label, path]) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={handleLinkClick}
                      className="block px-8 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Projects */}
            <div className="border-t border-gray-100">
              <button
                onClick={() => toggleDropdown("projects")}
                className="flex justify-between items-center w-full px-6 py-3 text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-600"
              >
                PROJECTS
                <span>{projectsOpen ? "−" : "+"}</span>
              </button>
              {projectsOpen && (
                <div className="bg-gray-50">
                  <Link
                    to="/projects/Detail_project"
                    onClick={handleLinkClick}
                    className="block px-8 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    Project Detail
                  </Link>
                  <Link
                    to="/projects/Project_list"
                    onClick={handleLinkClick}
                    className="block px-8 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    Project List
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/ContactUs"
              onClick={handleLinkClick}
              className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 font-medium border-t border-gray-100"
            >
              CONTACT US
            </Link>

            {/* Mobile Search Bar */}
            <div className="px-6 py-3 border-t border-gray-100">
              <SearchBar />
            </div>

            {/* Mobile Social Icons */}
            <div className="flex justify-center items-center space-x-6 py-4 border-t-2 border-orange-200 rounded-b-3xl bg-orange-50">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#4267B2] hover:opacity-80"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#E4405F] hover:opacity-80"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="text-[#25D366] hover:opacity-80"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20 sm:h-24 md:h-28"></div>
    </>
  );
};

export default Navbar;
