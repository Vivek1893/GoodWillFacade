// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

// const slides = [
//   {
//       image: "/hero1.jpg",
//       title: "ACP CLADDING",
//     },
//     {
//       image: "/hero2.jpg",
//       title: "STRUCTURAL GLAZING",
//     },
//     {
//       image: "/hero3.jpg",
//       title: "ALUMINUM SYSTEMS",
//     },
//     {
//       image: "/hero4.jpg",
//       title: "ALUMINUM SYSTEMS",
//     },
//     {
//       image: "/hero5.jpg",
//       title: "ALUMINUM SYSTEMS",
//     },
//     {
//       image: "/hero6.webp",
//       title: "ALUMINUM SYSTEMS",
//     },
//   ];

//   // Auto-advance slides
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Grid animation function
//   const getGrid = () => {
//     if (window.innerWidth < 640) return { rows: 4, cols: 6 };
//     if (window.innerWidth < 1024) return { rows: 5, cols: 8 };
//     return { rows: 6, cols: 10 };
//   };

//   const [grid, setGrid] = useState(getGrid());

//   useEffect(() => {
//     const handleResize = () => setGrid(getGrid());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden max-w-full ">
//       {/* Top Angled Border Strip */}
//       <div className="absolute top-0 left-0 w-full h-6 z-50 overflow-hidden ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full"
//           preserveAspectRatio="none"
//           viewBox="0 0 100 20"
//         >
//           <polygon points="0,0 100,0 100,20 0,20" fill="#0B3558" />
//           <polygon points="0,0 20,0 50,20 0,20" fill="#F37021" />
//         </svg>
//       </div>

//       {/* Logo box (big) - width 60 */}
//       <div className="hidden lg:block absolute left-0 top-20 z-30 ">
//         <div className="relative w-60 bg-white p-6 border-r-10 border-[#0B3558] rounded-bl-4xl overflow-hidden">
//           {/* 🔹 Bottom half blue border */}
//           <div className="absolute bottom-0 right-0 w-1/2 h-3 bg-[#0B3558]"></div>

//           {/* 🔹 Bottom half left orange bar with rounded left edge */}
//           <div className="absolute bottom-0 left-0 w-1/2 h-3 bg-[#F37021] rounded-bl-4xl"></div>

//           {/* 🔹 Top SVG decoration */}
//           <div className="absolute top-0 left-0 w-full h-3 z-50 overflow-hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-full h-full"
//               preserveAspectRatio="none"
//               viewBox="0 0 100 20"
//             >
//               <polygon points="0,0 100,0 100,20 0,20" fill="#0B3558" />
//               <polygon points="0,0 50,0 65,20 0,20" fill="#F37021" />
//             </svg>
//           </div>

//           <img
//             src="/logo.png"
//             alt="Goodwill Facade"
//             className="w-48 h-auto object-contain mx-auto"
//           />
//         </div>
//       </div>

//       {/* Vertical text between logo and social (transparent background so hero shows through around it) */}
//       <div className="hidden lg:block absolute left-0 top-[60%] transform -translate-y-1/2 z-50 pointer-events-none">
//         <div
//           className="text-gray-400 text-sm font-medium tracking-wider"
//           style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
//         >
//           WORK ARCHITECTURE
//         </div>
//       </div>

//       {/* Social box (narrow) - width 40 */}
//       <div className="hidden lg:block absolute left-0 bottom-0 z-30">
//         <div className="relative w-30 bg-white p-8 shadow-2xl h-98 flex flex-col justify-end items-center">
//           {/* 🔹 Right-side border */}
//           <div className="absolute top-0 bottom-0 -right-2 w-[10px] bg-[#F37021]"></div>

//           {/* 🔹 Bottom border (left to right) */}
//           <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#F37021]"></div>

//           <div className="flex flex-col items-center space-y-4">
//             {/* WhatsApp */}
//             <a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="WhatsApp"
//             >
//               <svg
//                 className="w-5 h-5 text-green-500"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.77.463 3.45 1.343 4.945L2 22l5.221-1.338A9.94 9.94 0 0012 22.003c5.523 0 10-4.477 10-10s-4.477-10-9.996-10zm0 18.17a8.1 8.1 0 01-4.119-1.137l-.294-.174-3.097.795.829-3.025-.19-.311a8.083 8.083 0 01-1.235-4.41c0-4.48 3.642-8.122 8.106-8.122 2.166 0 4.201.843 5.733 2.375a8.072 8.072 0 012.37 5.747c-.004 4.479-3.646 8.162-8.103 8.162zm4.568-6.075c-.25-.125-1.475-.726-1.703-.81-.228-.084-.395-.125-.562.125-.167.25-.645.81-.79.977-.145.167-.292.188-.542.063-.25-.125-1.056-.389-2.014-1.242-.745-.664-1.247-1.484-1.393-1.734-.145-.25-.015-.386.11-.511.113-.113.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.562-1.354-.77-1.854-.203-.489-.411-.424-.562-.433l-.479-.009c-.167 0-.438.063-.667.313-.228.25-.874.854-.874 2.084 0 1.229.896 2.416 1.021 2.584.125.167 1.758 2.69 4.263 3.77.596.257 1.061.41 1.424.525.598.19 1.143.163 1.573.099.48-.072 1.475-.602 1.683-1.182.208-.58.208-1.077.145-1.182-.062-.104-.229-.167-.479-.292z" />
//               </svg>
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//             >
//               <svg
//                 className="w-5 h-5 text-pink-500"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
//               </svg>
//             </a>

//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/yourpage"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//             >
//               <svg
//                 className="w-5 h-5 text-blue-600"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Logo - Top Left (Desktop-like positioning) */}
//       <div className="lg:hidden absolute top-20 left-0 z-30">
//         <div className="bg-white p-4 rounded-br-2xl shadow-lg">
//           <div className="absolute top-0 left-0 w-full h-5 z-50 overflow-hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-full h-full"
//               preserveAspectRatio="none"
//               viewBox="0 0 100 20"
//             >
//               <polygon points="0,0 100,0 95,20 0,20" fill="#0B3558" />
//               <polygon points="0,0 20,0 15,20 0,20" fill="#F37021" />
//             </svg>
//           </div>
//           <img
//             src="/logo.png"
//             alt="Goodwill Facade"
//             className="w-32 h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Mobile Social Icons - Bottom Left (Desktop-like positioning) */}
//       <div className="lg:hidden absolute bottom-0 left-0 z-30">
//         <div className="bg-white p-4 rounded-tr-2xl shadow-lg">
//           <div className="flex flex-col items-center space-y-3">
//             <a
//               href="#"
//               className="text-gray-400 hover:text-orange-500 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
//               </svg>
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-orange-500 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//               </svg>
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-orange-500 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Hero Area - responsive margins */}
//       <div className="relative w-full h-full lg:ml-32">
//         {/* Background Mosaic Animation */}
//       <div
//         className="absolute inset-0 grid"
//         style={{
//           gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
//           gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
//         }}
//       >
//         {Array.from({ length: grid.rows * grid.cols }).map((_, i) => {
//           const row = Math.floor(i / grid.cols);
//           const col = i % grid.cols;

//           return (
//             <motion.div
//                 key={`${currentSlide}-${i}`}
//               className="w-full h-full bg-cover bg-center"
//               style={{
//                   backgroundImage: `url(${slides[currentSlide].image})`,
//                 backgroundPosition: `${(col / (grid.cols - 1)) * 100}% ${
//                   (row / (grid.rows - 1)) * 100
//                 }%`,
//                 backgroundSize: `${grid.cols * 100}% ${grid.rows * 100}%`,
//               }}
//               initial={{ opacity: 0, scale: 1.3 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{
//                 duration: 1.2,
//                 delay: (row * grid.cols + col) * 0.015,
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* Dark Overlay */}
//         {/* <div className="absolute inset-0 bg-black/50"></div> */}

//         {/* Navigation Arrows - Mobile responsive positioning */}
//         <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-4 md:space-x-8">
//           <button
//             onClick={prevSlide}
//             className="text-white hover:text-orange-400 transition-colors group"
//           >
//             <div className="flex items-center space-x-1 md:space-x-2 bg-black/60 backdrop-blur-sm px-1 md:px-4 py-2 md:py-3 rounded-full border border-white/30">
//               <svg
//                 className="w-4 h-4 md:w-5 md:h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//               <span className="text-xs md:text-sm font-medium tracking-wider hidden sm:block">
//                 PREV
//               </span>
//             </div>
//           </button>

//           <button
//             onClick={nextSlide}
//             className="text-white hover:text-orange-400 transition-colors group"
//           >
//             <div className="flex items-center space-x-1 md:space-x-2 bg-black/60 backdrop-blur-sm px-1 md:px-4 py-2 md:py-3 rounded-full border border-white/30">
//               <span className="text-xs md:text-sm font-medium tracking-wider hidden sm:block">
//                 NEXT
//               </span>
//               <svg
//                 className="w-4 h-4 md:w-5 md:h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </div>
//           </button>
//         </div>

//         {/* Hero Content - Mobile responsive */}
//         <div className="relative z-10 flex items-center justify-center h-full px-2 sm:px-4 md:px-6 pt-16 md:pt-0 lg:pt-0">
//           <div className="text-center max-w-4xl w-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//                 key={currentSlide}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 1 }}
//           >
//                 {/* <h1
//                   className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-wider leading-tight"
//                   style={{ color: "white" }}
//                 >
//                   {slides[currentSlide].title}
//                 </h1> */}
//           </motion.div>
//         </AnimatePresence>
//           </div>
//       </div>

//         {/* Slide Indicators - Mobile responsive */}
//         <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//           <div className="flex space-x-2 md:space-x-3">
//             {slides.map((_, index) => (
//           <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide
//                     ? "scale-110"
//                     : "bg-white/50 hover:bg-white/80"
//                 }`}
//                 style={{
//                   backgroundColor:
//                     index === currentSlide ? "var(--accent-color)" : undefined,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// uper vala old code hai esko hi used karna hai  niche dono bas dikhne ke liye hai

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       leftImage: "/hero1.jpg",
//       rightImage: "/hero2.jpg",
//       title: "ACP CLADDING",
//     },
//     {
//       leftImage: "/hero3.jpg",
//       rightImage: "/hero4.jpg",
//       title: "STRUCTURAL GLAZING",
//     },
//     {
//       leftImage: "/hero5.jpg",
//       rightImage: "/hero4.jpg",
//       title: "ALUMINUM SYSTEMS",
//     },
//     {
//       leftImage: "/hero4.jpg",
//       rightImage: "/hero5.jpg",
//       title: "FACADE DESIGN",
//     },
//     {
//       leftImage: "/hero5.jpg",
//       rightImage: "/hero5.jpg",
//       title: "GLASS ELEVATIONS",
//     },
//     {
//       leftImage: "/hero6-left.jpg",
//       rightImage: "/hero6-right.jpg",
//       title: "INNOVATIVE STRUCTURES",
//     },
//   ];

//   // Auto-advance slides
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden max-w-full">
//       {/* 🔹 Top Angled Border Strip */}
//       <div className="absolute top-0 left-0 w-full h-6 z-50 overflow-hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full"
//           preserveAspectRatio="none"
//           viewBox="0 0 100 20"
//         >
//           <polygon points="0,0 100,0 100,20 0,20" fill="#0B3558" />
//           <polygon points="0,0 20,0 50,20 0,20" fill="#F37021" />
//         </svg>
//       </div>

//       {/* 🔹 Big Logo Box (Desktop) */}
//       <div className="hidden lg:block absolute left-0 top-20 z-30">
//         <div className="relative w-60 bg-white p-6 rounded-bl-4xl overflow-hidden shadow-lg">
//           {/* Bottom bars */}
//           <div className="absolute bottom-0 right-0 w-1/2 h-3 bg-[#0B3558]"></div>
//           <div className="absolute bottom-0 left-0 w-1/2 h-3 bg-[#F37021] rounded-bl-4xl"></div>

//           {/* Top decoration */}
//           <div className="absolute top-0 left-0 w-full h-3 overflow-hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-full h-full"
//               preserveAspectRatio="none"
//               viewBox="0 0 100 20"
//             >
//               <polygon points="0,0 100,0 100,20 0,20" fill="#0B3558" />
//               <polygon points="0,0 50,0 65,20 0,20" fill="#F37021" />
//             </svg>
//           </div>

//           <img
//             src="/logo.png"
//             alt="Goodwill Facade"
//             className="w-48 h-auto object-contain mx-auto"
//           />
//         </div>
//       </div>

//       {/* 🔹 Vertical Text */}
//       <div className="hidden lg:block absolute left-0 top-[60%] transform -translate-y-1/2 z-50 pointer-events-none">
//         <div
//           className="text-gray-400 text-sm font-medium tracking-wider"
//           style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
//         >
//           WORK ARCHITECTURE
//         </div>
//       </div>

//       {/* 🔹 Social Box (Desktop) */}
//       <div className="hidden lg:block absolute left-0 bottom-0 z-30">
//         <div className="relative w-30 bg-white p-8 shadow-2xl h-98 flex flex-col justify-end items-center">
//           <div className="absolute top-0 bottom-0 -right-2 w-[10px] bg-[#F37021]"></div>
//           <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#F37021]"></div>

//           <div className="flex flex-col items-center space-y-4">
//             <a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <svg
//                 className="w-5 h-5 text-green-500"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.77.463 3.45 1.343 4.945L2 22l5.221-1.338A9.94 9.94 0 0012 22.003c5.523 0 10-4.477 10-10s-4.477-10-9.996-10z" />
//               </svg>
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <svg
//                 className="w-5 h-5 text-pink-500"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" />
//               </svg>
//             </a>

//             <a
//               href="https://www.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <svg
//                 className="w-5 h-5 text-blue-600"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Mobile Logo */}
//       <div className="lg:hidden absolute top-20 left-0 z-30">
//         <div className="bg-white p-4 rounded-br-2xl shadow-lg relative">
//           <div className="absolute top-0 left-0 w-full h-5 z-50 overflow-hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-full h-full"
//               preserveAspectRatio="none"
//               viewBox="0 0 100 20"
//             >
//               <polygon points="0,0 100,0 95,20 0,20" fill="#0B3558" />
//               <polygon points="0,0 20,0 15,20 0,20" fill="#F37021" />
//             </svg>
//           </div>
//           <img
//             src="/logo.png"
//             alt="Goodwill Facade"
//             className="w-32 h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* 🔹 Background Split Image */}
//       <div className="absolute inset-0 flex">
//         {/* Left Half */}
//         <motion.div
//           key={`left-${currentSlide}`}
//           className="w-1/2 h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].leftImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//         ></motion.div>

//         {/* Right Half */}
//         <motion.div
//           key={`right-${currentSlide}`}
//           className="w-1/2 h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].rightImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, delay: 0.2 }}
//         ></motion.div>

//         {/* Optional soft divider line */}
//         <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent z-10"></div>
//       </div>

//       {/* 🔹 Navigation Arrows */}
//       <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8">
//         <button
//           onClick={prevSlide}
//           className="text-white hover:text-orange-400 transition-colors group"
//         >
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="text-sm font-medium tracking-wider hidden sm:block">
//               PREV
//             </span>
//           </div>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="text-white hover:text-orange-400 transition-colors group"
//         >
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <span className="text-sm font-medium tracking-wider hidden sm:block">
//               NEXT
//             </span>
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </div>
//         </button>
//       </div>

//       {/* 🔹 Slide Indicators */}
//       <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "bg-[#F37021] scale-110"
//                   : "bg-white/50 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       leftImage: "/hero2.jpg",
//       rightImage: "/hero1.jpg",
//       mobileImage: "/hero2.jpg",
//       title: "ALUMINUM SYSTEMS",
//     },
//     {
//       leftImage: "/hero4.jpg",
//       rightImage: "/hero5.jpg",
//       mobileImage: "/hero5.jpg",
//       title: "ACP CLADDING",
//     },
//     {
//       leftImage: "/hero3.webp",
//       rightImage: "/hero7.jpg",
//       mobileImage: "/hero3.webp",
//       title: "STRUCTURAL GLAZING",
//     },

//     {
//       leftImage: "/hero6.jpg",
//       rightImage: "/hero8.jpg",
//       mobileImage: "/hero8.jpg",
//       title: "FACADE DESIGN",
//     },

//   ];

//   // Auto-advance slides
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden -mt-7 max-w-full">
//       {/* 🔹 Desktop / Tablet Split Background */}
//       <div className="hidden sm:flex absolute inset-0">
//         {/* Left Half */}
//         <motion.div
//           key={`left-${currentSlide}`}
//           className="w-1/2 h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].leftImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//         ></motion.div>

//         {/* Right Half */}
//         {/* Logo Branding - Top Right */}
//         <div className="absolute top-6 right-6 z-30">
//           <img
//             src="/logo1.png"
//             alt="The Goodwill Facades Logo"
//             className="h-18 md:h-25  w-auto"
//           />
//         </div>
//         <motion.div
//           key={`right-${currentSlide}`}
//           className="w-1/2 h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].rightImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, delay: 0.2 }}
//         ></motion.div>

//         {/* Divider line */}
//         <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent z-10"></div>
//       </div>

//       {/* 🔹 Mobile Single Image */}
//       <div className="flex sm:hidden absolute inset-0">
//         <motion.div
//           key={`mobile-${currentSlide}`}
//           className="w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].mobileImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         ></motion.div>
//       </div>

//       {/* 🔹 Navigation Arrows */}
//       <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8">
//         <button
//           onClick={prevSlide}
//           className="text-white hover:text-orange-400 transition-colors group"
//         >
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="text-sm font-medium tracking-wider hidden sm:block">
//               PREV
//             </span>
//           </div>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="text-white hover:text-orange-400 transition-colors group"
//         >
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <span className="text-sm font-medium tracking-wider hidden sm:block">
//               NEXT
//             </span>
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </div>
//         </button>
//       </div>

//       {/* 🔹 Slide Indicators */}
//       <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "bg-[#F37021] scale-110"
//                   : "bg-white/50 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

///===============================================================================================
// export default Hero;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       leftImage: "/hero2.jpg",
//       rightImage: "/hero1.jpg",
//       mobileImage: "/hero2.jpg",
//       leftTitle: "ALUMINUM SYSTEMS",
//       rightTitle: "WINDOW STRUCTURE",
//     },
//     {
//       leftImage: "/hero4.jpg",
//       rightImage: "/hero5.jpg",
//       mobileImage: "/hero5.jpg",
//       leftTitle: "ACP CLADDING",
//       rightTitle: "ARCHITECTURAL DESIGNS",
//     },
//     {
//       leftImage: "/hero3.webp",
//       rightImage: "/hero7.jpg",
//       mobileImage: "/hero3.webp",
//       leftTitle: "STRUCTURAL GLAZING",
//       rightTitle: "ELEVATION WORKS",
//     },
//     {
//       leftImage: "/hero6.jpg",
//       rightImage: "/hero8.jpg",
//       mobileImage: "/hero8.jpg",
//       leftTitle: "FACADE DESIGN",
//       rightTitle: "CUSTOM ALUMINIUM FRAMES",
//     },
//   ];

//   // Auto-slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden -mt-7 max-w-full">
//       {/* 🔹 Desktop / Tablet Split Background */}
//       <div className="hidden sm:flex absolute inset-0">
//         {/* Left Half */}
//         <motion.div
//           key={`left-${currentSlide}`}
//           className="w-1/2 h-full bg-cover bg-center relative"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].leftImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           {/* Left Title */}
//           <div className="absolute bottom-10 left-10 bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
//             <h2
//               className="text-lg md:text-xl font-semibold tracking-wide"
//               style={{ color: "#ffffff" }} // 👈 force white color
//             >
//               {slides[currentSlide].leftTitle}
//             </h2>
//           </div>
//         </motion.div>

//         {/* Logo Top Right */}
//         <div className="absolute top-6 right-6 z-30">
//           <img
//             src="/logo.png"
//             alt="The Goodwill Facades Logo"
//             className="h-18 md:h-25 w-auto"
//           />
//         </div>

//         {/* Right Half */}
//         <motion.div
//           key={`right-${currentSlide}`}
//           className="w-1/2 h-full bg-cover bg-center relative"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].rightImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, delay: 0.2 }}
//         >
//           {/* Right Title */}
//           <div className="absolute bottom-10 right-10 bg-black/50 text-white px-4 py-2 rounded-md backdrop-blur-sm">
//             <h2 className="text-lg md:text-xl font-semibold tracking-wide text-right"
//             style={{ color: "#ffffff" }}>
//               {slides[currentSlide].rightTitle}
//             </h2>
//           </div>
//         </motion.div>

//         {/* Divider Line */}
//         <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent z-10"></div>
//       </div>

//       {/* 🔹 Mobile Single Image */}
//       <div className="flex sm:hidden absolute inset-0">
//         <motion.div
//           key={`mobile-${currentSlide}`}
//           className="w-full h-full bg-cover bg-center relative"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].mobileImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Mobile Title - Top Left */}
//           <div className="absolute top-6 left-5">
//             <h2 className="text-white text-lg font-semibold tracking-wide drop-shadow-lg"
//             style={{ color: "#ffffff" }}>
//               {slides[currentSlide].leftTitle}
//             </h2>
//           </div>
//         </motion.div>
//       </div>

//       {/* 🔹 Navigation Arrows */}
//       <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8">
//         <button
//           onClick={prevSlide}
//           className="text-white hover:text-[#F37021] transition-colors group"
//         >
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="text-sm font-medium tracking-wider hidden sm:block">
//               PREV
//             </span>
//           </div>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="text-white hover:text-[#F37021] transition-colors group"
//         >
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <span className="text-sm font-medium tracking-wider hidden sm:block">
//               NEXT
//             </span>
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </div>
//         </button>
//       </div>

//       {/* 🔹 Slide Indicators */}
//       <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "bg-[#F37021] scale-110"
//                   : "bg-white/50 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

////old one uper hai==================================================

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       leftImage: "/hero2.jpg",
//       rightImage: "/hero1.jpg",
//       mobileImage: "/hero2.jpg",
//       leftTitle: "Hum",
//       rightTitle: "WINDOW STRUCTURE",
//     },
//     {
//       leftImage: "/hero4.jpg",
//       rightImage: "/hero5.jpg",
//       mobileImage: "/hero5.jpg",
//       leftTitle: "GOYAL ASPIRE ",
//       rightTitle: "AMBIT ",
//     },
//     {
//       leftImage: "/hero3.webp",
//       rightImage: "/hero7.jpg",
//       mobileImage: "/hero3.webp",
//       leftTitle: "ZIRCON ARENEA",
//       rightTitle: "CANAL POINT",
//     },
//     {
//       leftImage: "/hero6.jpg",
//       rightImage: "/hero8.jpg",
//       mobileImage: "/hero8.jpg",
//       leftTitle: "SKY RISE  ",
//       rightTitle: "VELOCITY",
//     },
//   ];

//   // Auto Slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 8000); // ✅ Slowed down auto slide speed (6 seconds)

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden -mt-7 max-w-full">

//       {/* ✅ Desktop / Tablet View */}
//       <div className="hidden sm:flex absolute inset-0">

//         {/* Left Half */}
//         <motion.div
//           key={`left-${currentSlide}`}
//           className="w-1/2 h-full flex flex-col items-center"
//           initial={{ opacity: 0, scale: 1.15 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}  // ✅ Slowed down transition
//         >
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${slides[currentSlide].leftImage})` }}
//           ></div>

//           {/* Text Below Image */}
//           <h2 className="mt-4 text-white text-center text-xl font-semibold tracking-wide">
//             {slides[currentSlide].leftTitle}
//           </h2>
//         </motion.div>

//         {/* ✅ Logo Top Right */}
//         <div className="absolute top-6 right-6 z-30">
//           <img src="/logo.png" alt="The Goodwill Facades" className="h-18 md:h-25 w-auto" />
//         </div>

//         {/* Right Half */}
//         <motion.div
//           key={`right-${currentSlide}`}
//           className="w-1/2 h-full flex flex-col items-center"
//           initial={{ opacity: 0, scale: 1.15 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 2, delay: 0.2 }} // ✅ Smooth fade-in
//         >
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${slides[currentSlide].rightImage})` }}
//           ></div>

//           {/* Text Below Image */}
//           <h2 className="mt-4 text-white text-center text-xl font-semibold tracking-wide">
//             {slides[currentSlide].rightTitle}
//           </h2>
//         </motion.div>

//         {/* Divider Line */}
//         <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
//       </div>

//       {/* ✅ Mobile Single Image */}
//       <div className="flex sm:hidden absolute inset-0">
//         <motion.div
//           key={`mobile-${currentSlide}`}
//           className="w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].mobileImage})`,
//           }}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 2 }} // ✅ Slower mobile fade too
//         ></motion.div>

//         {/* Text below for mobile */}
//         <div className="absolute bottom-8 w-full flex justify-center">
//           <h2 className="text-white text-lg font-semibold drop-shadow-lg text-center">
//             {slides[currentSlide].leftTitle}
//           </h2>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8">
//         <button onClick={prevSlide} className="text-white hover:text-[#F37021] transition-colors">
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             <span className="text-sm hidden sm:block font-medium tracking-wider">PREV</span>
//           </div>
//         </button>

//         <button onClick={nextSlide} className="text-white hover:text-[#F37021] transition-colors">
//           <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
//             <span className="text-sm hidden sm:block font-medium tracking-wider">NEXT</span>
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </div>
//         </button>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? "bg-[#F37021] scale-110" : "bg-white/50 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState({});

  const slides = useMemo(
    () => [
      {
        leftImage: "/hero10.jpg",
        rightImage: "/hero9.jpg",
        mobileImage: "/hero2.jpg",
        leftTitle: "VIMAL LAXMI - BORIVALI(W) ",
        rightTitle: "SHREE VARDHMAN - BORIVALI(W)",
      },
      {
        leftImage: "/hero2.jpg",
        rightImage: "/hero1.jpg",
        mobileImage: "/hero2.jpg",
        leftTitle: "HUM SOLARIS - KANDIVALI(W) ",
        rightTitle: "USD -UNIQUE REGALIA - BORIVALI(W)",
      },
      {
        leftImage: "/hero4.jpg",
        rightImage: "/hero5.jpg",
        mobileImage: "/hero5.jpg",
        leftTitle: "GOYAL ASPIRE - KANDIVALI(W)",
        rightTitle: "AMBIT PRIMORIS - KANDIVALI(W)",
      },
      {
        leftImage: "/hero3.webp",
        rightImage: "/hero7.jpg",
        mobileImage: "/hero3.webp",
        leftTitle: "ZIRCON ARENA - PAL - SURAT",
        rightTitle: "CANAL POINT - SURAT",
      },
      {
        leftImage: "/hero6.jpg",
        rightImage: "/hero8.jpg",
        mobileImage: "/hero8.jpg",
        leftTitle: "SKY RISE - SURAT",
        rightTitle: "VELOCITY - PAL - SURAT",
      },
    ],
    []
  );

  // Preload images
  useEffect(() => {
    const imageUrls = [];
    slides.forEach((slide) => {
      imageUrls.push(slide.leftImage, slide.rightImage, slide.mobileImage);
    });

    const uniqueUrls = [...new Set(imageUrls)];

    const preloadPromises = uniqueUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve({ [url]: true });
        img.onerror = () => resolve({ [url]: false });
      });
    });

    Promise.all(preloadPromises).then((results) => {
      const preloaded = {};
      results.forEach((result) => {
        Object.assign(preloaded, result);
      });
      setPreloadedImages(preloaded);
    });
  }, [slides]);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden -mt-7 max-w-full bg-black">
      {/* ✅ Desktop / Tablet View */}
      <div className="hidden md:flex absolute inset-0">
        {/* Left Half */}
        <div className="w-1/2 h-full flex flex-col items-center relative overflow-hidden group">
          {/* IMAGE */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={slides[currentSlide].leftImage}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 "
              style={{
                backgroundImage: `url(${slides[currentSlide].leftImage})`,
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* TEXT BOX (hidden until hover) */}
          <div className="absolute -bottom-1 w-full flex justify-center z-20 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg flex flex-col items-center shadow-md">
              <h3 className="text-[#171755] text-sm md:text-base lg:text-lg font-semibold drop-shadow-lg text-center">
                {slides[currentSlide].leftTitle}
              </h3>

              {/* underline INSIDE the white box */}
              <div className="w-12 h-[3px] bg-[#ff8c00] mt-1 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ✅ Logo Top Right */}
        <div className="absolute top-4 md:top-6 right-4 md:right-6 z-30">
          <img
            src="/logo.png"
            alt="The Goodwill Facades"
            className="h-12 md:h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Right Half */}
         <div className="w-1/2 h-full flex flex-col items-center relative overflow-hidden group">
          {/* IMAGE */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={slides[currentSlide].rightImage}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 "
              style={{
                backgroundImage: `url(${slides[currentSlide].rightImage})`,
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* TEXT BOX (hidden until hover) */}
          <div className="absolute -bottom-1 w-full flex justify-center z-20 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg flex flex-col items-center shadow-md">
              <h3 className="text-[#171755] text-sm md:text-base lg:text-lg font-semibold drop-shadow-lg text-center">
                {slides[currentSlide].rightTitle}
              </h3>

              {/* underline inside the box */}
              <div className="w-12 h-[3px] bg-[#ff8c00] mt-1 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      </div>

      {/* ✅ Mobile View */}
      <div className="flex md:hidden absolute inset-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slides[currentSlide].mobileImage}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].mobileImage})`,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8">
        <button
          onClick={prevSlide}
          className="text-white hover:text-[#F37021] transition-colors"
        >
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm hidden sm:block font-medium tracking-wider">
              PREV
            </span>
          </div>
        </button>

        <button
          onClick={nextSlide}
          className="text-white hover:text-[#F37021] transition-colors"
        >
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30">
            <span className="text-sm hidden sm:block font-medium tracking-wider">
              NEXT
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#F37021] scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
