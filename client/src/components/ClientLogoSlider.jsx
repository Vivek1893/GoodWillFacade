// import React from "react";

// const ClientsSection = () => {
//   const clients = [
//     { name: "abof", logo: "/clientlogo/logo1.jpg" },
//     { name: "abof", logo: "/clientlogo/logo2.jpg" },
//     { name: "abof", logo: "/clientlogo/logo3.jpg" },
//     { name: "abof", logo: "/clientlogo/logo4.jpg" },
//     { name: "abof", logo: "/clientlogo/logo5.jpg" },
//     { name: "abof", logo: "/clientlogo/logo6.jpg" },
//     { name: "abof", logo: "/clientlogo/logo7.jpg" },
//     { name: "abof", logo: "/clientlogo/logo8.jpg" },
//     { name: "abof", logo: "/clientlogo/logo9.jpg" },
//     { name: "abof", logo: "/clientlogo/logo10.jpg" },
//     { name: "abof", logo: "/clientlogo/logo11.jpg" },

//     { name: "abof", logo: "/clientlogo/logo12.jpg" },
//     { name: "abof", logo: "/clientlogo/logo13.jpg" },
//     { name: "abof", logo: "/clientlogo/logo14.jpg" },
//     { name: "abof", logo: "/clientlogo/logo15.jpg" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Our Clients</h2>
//         <p className="text-gray-500 text-lg mb-12">Meet our happy clients</p>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
//           {clients.map((client, index) => (
//             <div key={index} className="flex items-center justify-center p-4">
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="max-h-30 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsSection;



import React from "react";

const logosSet1 = [
  { src: "/clientlogo/logo1.jpg", alt: "Amazon", width: "w-56" },
  { src: "/clientlogo/logo2.jpg", alt: "Accenture", width: "w-40" },
  { src: "/clientlogo/logo3.jpg", alt: "Akr", width: "w-40" },
  { src: "/clientlogo/logo4.jpg", alt: "Allianz", width: "w-56" },
  { src: "/clientlogo/logo5.jpg", alt: "Argoid", width: "w-40" },
  { src: "/clientlogo/logo6.jpg", alt: "Bagri", width: "w-48" },
  { src: "/clientlogo/logo7.jpg", alt: "Blue", width: "w-56" },
   { src: "/clientlogo/logo8.jpg", alt: "Bridge", width: "w-40" },
  
];

const logosSet2 = [
  
 
  { src: "/clientlogo/logo9.jpg", alt: "Capgemini", width: "w-56" },
  { src: "/clientlogo/logo10.jpg", alt: "Coin", width: "w-40" },
  { src: "/clientlogo/logo11.jpg", alt: "Cognizant", width: "w-48" },
   { src: "/clientlogo/logo12.jpg", alt: "Genpact", width: "w-48" },
  { src: "/clientlogo/logo13.jpg", alt: "HDFC", width: "w-56" },
  { src: "/clientlogo/logo14.jpg", alt: "HSBC", width: "w-40" },
   { src: "/clientlogo/logo15.jpg", alt: "HSBC", width: "w-40" },
    { src: "/clientlogo/logo16.jpg", alt: "Bridge", width: "w-40" },
  

];

// const logosSet3 = [
//   { src: "/clientlogo/logo12.jpg", alt: "Genpact", width: "w-48" },
//   { src: "/clientlogo/logo13.jpg", alt: "HDFC", width: "w-56" },
//   { src: "/clientlogo/logo14.jpg", alt: "HSBC", width: "w-40" },
//   { src: "/clientlogo/logo15.jpg", alt: "IITM", width: "w-48" },
 
// ];

const Marquee = ({ logos, direction = "rtl" }) => {
  const animateClass = direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr";

  return (
    <div className="relative flex overflow-x-hidden h-24 sm:h-28 md:h-32"> 
      <div className={`${animateClass} flex gap-4 sm:gap-6 md:gap-8 items-center`}> 
        {/* First set of logos */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center"> 
          {logos.map((logo, idx) => (
            <div
              key={`first-${idx}`}
              className={`flex-shrink-0 bg-white rounded-lg shadow-sm px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 
                         ${logo.width} h-20 sm:h-24 md:h-28 flex items-center justify-center hover:shadow-md transition-shadow`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-16 sm:max-h-20 md:max-h-24 h-auto object-contain" 
              />
            </div>
          ))}
        </div>
        {/* Duplicated set for seamless loop */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center"> 
          {logos.map((logo, idx) => (
            <div
              key={`second-${idx}`}
              className={`flex-shrink-0 bg-white rounded-lg shadow-sm px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 
                         ${logo.width} h-20 sm:h-24 md:h-28 flex items-center justify-center hover:shadow-md transition-shadow`} 
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-16 sm:max-h-20 md:max-h-24 h-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HiringPartners = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 overflow-x-hidden"> 
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Our Clients
        </h2>
      </div>

      <div className="space-y-6 sm:space-y-8 md:space-y-10"> 
        <Marquee logos={logosSet1} direction="rtl" />
        <Marquee logos={logosSet2} direction="ltr" />
        {/* <Marquee logos={logosSet3} direction="rtl" /> */}
      </div>
    </div>
  );
};

export default HiringPartners;