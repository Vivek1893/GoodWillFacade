// import React from "react";
// import { Building, Shield, Layers, Wind, Cpu, Zap } from "lucide-react";
// import { motion } from "framer-motion";

// const ServicesAllInOne = () => {
//   const servicesIcons = [
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "ACP Cladding",
//       description:
//         "ACP Cladding (Aluminium Composite Panel Cladding) is widely used in modern architecture for its durability, lightweight nature, and elegant appearance. It offers resistance to harsh weather conditions, provides insulation against noise and heat, and adds a premium finish to both exterior and interior spaces.",
//     },
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "Aluminum Windows",
//       description:
//         "Aluminum windows are known for their strength, low maintenance, and sleek design. They provide excellent thermal and sound insulation while allowing maximum natural light. Ideal for both residential and commercial projects, they enhance security and durability while maintaining a modern look.",
//     },
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "MS Structure",
//       description:
//         "MS (Mild Steel) Structures are the backbone of industrial and commercial construction. They provide high tensile strength, flexibility, and cost-effectiveness. MS structures are widely used in frameworks, warehouses, bridges, and facades, ensuring long-lasting stability and support.",
//     },
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "Railings",
//       description:
//         "Railings are essential for safety and aesthetics, crafted in stainless steel, glass, or aluminum for durability. They provide support and safety on staircases, balconies, and terraces while enhancing the overall architectural appeal with modern and stylish designs.",
//     },
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "Stone Cladding",
//       description:
//         "Stone Cladding brings a natural and elegant finish to buildings by using thin layers of natural or artificial stone. It enhances durability, adds thermal insulation, and provides resistance against weathering, making it a timeless choice for both interiors and exteriors.",
//     },
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "Structural Glazing",
//       description:
//         "Structural Glazing is an advanced facade solution that uses high-strength glass bonded with aluminum frames. It provides a seamless, sleek, and modern exterior while ensuring natural light, energy efficiency, and weather resistance for commercial and residential buildings.",
//     },
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "Skylight",
//       description:
//         "A skylight is a window set into a roof or ceiling that brings natural sunlight into a space, making rooms brighter and more open. It reduces the need for artificial lighting and can improve ventilation if designed to open. Skylights come in various styles and materials, offering both aesthetic and energy-saving benefits.",
//     },
//     {
//       icon: (
//         <img
//           src="/lo.png" // 👉 put your image path here
//           alt="ACP Cladding"
//           className="h-16 w-16 object-contain"
//         />
//       ),
//       title: "TensileFabrics",
//       description:
//         "Tensile fabrics are materials designed to be stretched and tensioned across a framework, forming durable and often dramatic structures",
//     },
//   ];

//   // 🔹 Variants for parent (grid) — delay removed
//   const containerVariants = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   // 🔹 Variants for each card
//   const cardVariants = {
//     hidden: { opacity: 0, y: 60, scale: 0.9 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         type: "spring",
//         stiffness: 80,
//       },
//     },
//   };

//   return (
//     <div>
//       <section id="services" className="py-12 md:py-20 bg-background">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-vnv-gray mb-4 md:mb-6">
//               Our Services
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-vnv-gray-light max-w-3xl mx-auto px-4">
//               Comprehensive facade solutions designed to meet the diverse needs
//               of modern architecture
//             </p>
//           </div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-x-20 lg:gap-y-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {servicesIcons.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="relative group cursor-pointer bg-white p-6 sm:p-8 min-h-[300px] sm:min-h-[380px] transition-all duration-300 shadow-lg hover:shadow-xl"
//                 variants={cardVariants}
//                 style={{
//                   borderTopLeftRadius: "3rem",
//                   borderBottomRightRadius: "3rem",
//                   position: "relative",
//                   overflow: "hidden",
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 rounded-tl-[3rem] rounded-br-[3rem] p-[5px]"
//                   style={{
//                     background: "linear-gradient(135deg, #0B3558, #F37021)",
//                     WebkitMask:
//                       "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                     WebkitMaskComposite: "xor",
//                     maskComposite: "exclude",
//                   }}
//                 ></div>
//                 <div className="relative z-10">
//                   <div className="mb-6 transition-transform duration-300 ">
//                     <div className="text-orange-500 group-hover:text-blue-900">
//                       {service.icon}
//                     </div>
//                   </div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-vnv-gray mb-3 md:mb-4 transition-colors group-hover:text-blue-900">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm sm:text-base text-vnv-gray-light mt-6 md:mt-10 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesAllInOne;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesAllInOne = () => {
  const servicesIcons = [
    {
      icon: (
        <img
          src="/lo.png"
          alt="ACP Cladding"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "ACP/Fundermax",
      description:
        "ACP Cladding is widely used in modern architecture for its durability, light weight. It building  and provides long-lasting protection.",

      path: "/services/ACP",
    },
    {
      icon: (
        <img
          src="/lo.png"
          alt="Structural Glazing"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "Structural Glazing",
      description:
        "Structural Glazing is an advanced facade solution that provides a seamless, sleek, and modern exterior with energy efficiency.",
      path: "/services/Structural_Glazing",
    },
    {
      icon: (
        <img
          src="/lo.png"
          alt="Stone Cladding"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "Stone Cladding",
      description:
        "Stone Cladding brings a natural and elegant finish to buildings, enhancing durability and providing resistance against weathering.",
      path: "/services/Stone_Cladding",
    },
    {
      icon: (
        <img
          src="/lo.png"
          alt="Aluminum Windows"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "Aluminum Windows",
      description:
        "Aluminum windows are known for their strength, low maintenance, and sleek design. They provide excellent thermal and sound insulation.",
      path: "/services/Aluminum_Windows",
    },
    {
      icon: (
        <img
          src="/lo.png"
          alt="Railings"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "Railings",
      description:
        "Railings are essential for safety and aesthetics, crafted in stainless steel, glass, or aluminum for durability and modern appeal.",
      path: "/services/Railings",
    },
    {
      icon: (
        <img
          src="/lo.png"
          alt="Skylight"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "Skylight & Aluminium Fins",
      description:
        "A skylight brings natural sunlight into spaces, making rooms brighter and more open while reducing artificial lighting needs.",
      path: "/services/Skylight",
    },
    {
      icon: (
        <img
          src="/lo.png"
          alt="MS Structure"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "MS Structure",
      description:
        "MS (Mild Steel) Structures are the backbone of industrial and commercial construction. They provide high tensile strength and flexibility.",
      path: "/services/MS_Structure",
    },

    {
      icon: (
        <img
          src="/lo.png"
          alt="Tensile Fabrics"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "Spider facade",
      description:
        "Spider facade are materials designed to be stretched across frameworks, forming durable and dramatic architectural structures.",
      path: "/services/Tensile_Fabrics",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <section
        id="services"
        className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8fafc_25%,transparent_25%),linear-gradient(-45deg,#f8fafc_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f8fafc_75%),linear-gradient(-45deg,transparent_75%,#f8fafc_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4 sm:mb-6"
            >
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6 ">
                <div className="w-8 sm:w-12 h-px bg-gray-300"></div>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-orange-500 uppercase tracking-wider sm:tracking-widest">
                  Our Services
                </span>
                <div className="w-8 sm:w-12 h-px bg-gray-300"></div>
              </div>

              
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-gray-900 max-w-4xl mx-auto text-center sm:text-left leading-relaxed px-2 -mt-6"
            >
            Delivering precision-engineered architectural solutions with innovative design and lasting quality.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {servicesIcons.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl p-4 sm:p-6 transition-all duration-500 hover:shadow-xl cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                style={{
                  borderTopLeftRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                  overflow: "hidden",
                }}
              >
                {/* Gradient Border Effect */}
                <div
                  className="absolute inset-0 rounded-tl-[1.5rem] rounded-br-[1.5rem] p-[3px]"
                  style={{
                    background: "linear-gradient(135deg, #0B3558, #F37021)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 sm:mb-6 p-2 sm:p-3 rounded-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:from-blue-100 group-hover:to-orange-100 transition-all duration-500">
                    <div className="text-blue-900 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Explore Service Link */}
                    <div className="pt-4 border-t border-gray-100 group-hover:border-orange-200 transition-colors duration-300">
                      <Link to={service.path}>
                        <div className="flex items-center text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                          <span>Explore service</span>
                          <svg
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAllInOne;
