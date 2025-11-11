import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../utils/contentful";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  const navigate = useNavigate();

  // Static projects from Projectpage component
  const staticProjects = [
    {
      id: "static-1",
      name: "SHIVEN ARISE",
      img: "./project_detail_img/SHIVEN ARISE.webp",
      path: "/projects/shivenarise",
      status: "completed",
    },
    {
      id: "static-2",
      name: "ATHARV HEIGHTS",
      img: "./project1.jpg",
      path: "/projects",
      status: "completed",
    },
    {
      id: "static-3",
      name: "MILESTONE INDIGO",
      img: "./project3.jpg",
      path: "/projects",
      status: "completed",
    },
    {
      id: "static-4",
      name: "EVOQ",
      img: "./project4.png",
      path: "/projects",
      status: "completed",
    },
    {
      id: "static-5",
      name: "VIVIANA VESU",
      img: "./project2.png",
      path: "/projects/viviana",
      status: "completed",
    },
  ];

  // Fetch all projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const contentfulProjects = await getProjects();
        // Combine Contentful projects with static projects
        const combinedProjects = [
          ...contentfulProjects,
          ...staticProjects.map((p) => ({
            ...p,
            typeOfWork: "",
            architect: "",
            builder: "",
            quantity: "",
            subType: "",
            projectLocation: "",
          })),
        ];
        setAllProjects(combinedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // If Contentful fails, use static projects only
        setAllProjects(
          staticProjects.map((p) => ({
            ...p,
            typeOfWork: "",
            architect: "",
            builder: "",
            quantity: "",
            subType: "",
            projectLocation: "",
          }))
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      setIsOpen(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results = allProjects.filter((project) => {
      const searchableText = [
        project.name,
        project.typeOfWork,
        project.architect,
        project.builder,
        project.subType,
        project.quantity,
        typeof project.projectLocation === "string" ? project.projectLocation : "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
    setIsOpen(results.length > 0 && searchQuery.trim().length > 0);
  }, [searchQuery, allProjects]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        resultsRef.current &&
        !resultsRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (project) => {
    // Handle navigation for static projects vs Contentful projects
    if (project.id.startsWith("static-")) {
      // For static projects, use the path if available, otherwise navigate to project list
      if (project.path && project.path !== "/projects") {
        navigate(project.path);
      } else {
        navigate("/projects/Project_list");
      }
    } else {
      // For Contentful projects, navigate to detail page
      navigate(`/projects/detail/${project.id}`);
    }
    setIsOpen(false);
    setSearchQuery("");
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input */}
      <div className="relative flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0B3558] w-4 h-4 sm:w-5 sm:h-5 z-10" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              if (searchQuery.trim().length > 0 && searchResults.length > 0) {
                setIsOpen(true);
              }
            }}
            className="w-32 sm:w-40 md:w-48 lg:w-56 pl-9 sm:pl-10 pr-8 sm:pr-10 py-1.5 sm:py-2 text-sm sm:text-base border-2 border-[#0B3558] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-[#F37021] bg-white text-gray-800 placeholder-gray-400 transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#F37021] transition-colors z-10"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 left-0 w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-2xl border-2 border-[#0B3558] z-[60] max-h-[400px] overflow-y-auto"
        >
          <div className="p-2">
            <div className="px-3 py-2 text-xs sm:text-sm font-semibold text-[#0B3558] border-b-2 border-[#F37021] bg-gradient-to-r from-[#0B3558]/5 to-transparent">
              Search Results ({searchResults.length})
            </div>
            {searchResults.map((project) => (
              <button
                key={project.id}
                onClick={() => handleResultClick(project)}
                className="w-full text-left px-3 py-3 hover:bg-[#F37021]/10 transition-colors border-b border-gray-100 last:border-b-0 group rounded-md"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0 border border-gray-200"
                    onError={(e) => {
                      e.target.src = "/fallback.jpg";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-[#0B3558] group-hover:text-[#F37021] transition-colors truncate">
                      {project.name}
                    </h4>
                    {project.typeOfWork && (
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate">
                        {project.typeOfWork}
                      </p>
                    )}
                    {project.status && (
                      <span
                        className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full font-medium ${
                          project.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-[#F37021]/20 text-[#F37021]"
                        }`}
                      >
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {isOpen && searchQuery.trim().length > 0 && searchResults.length === 0 && !isLoading && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 left-0 w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-2xl border-2 border-[#0B3558] z-[60] p-4"
        >
          <p className="text-sm text-gray-600 text-center">
            No projects found matching "<span className="font-semibold text-[#0B3558]">{searchQuery}</span>"
          </p>
        </div>
      )}

      {/* Loading State */}
      {isLoading && searchQuery.trim().length > 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 left-0 w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-2xl border-2 border-[#0B3558] z-[60] p-4"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#0B3558] border-t-transparent"></div>
            <p className="text-sm text-gray-600">Searching...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

