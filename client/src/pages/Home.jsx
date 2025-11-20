import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";

import Servicespage from "../components/Servicespage";
import Projectpage from "../components/Projectpage";

import ClientLogoSlider from "../components/ClientLogoSlider";

const Home = () => {
  return (
    <>
      {/* ✅ SEO FOR HOME PAGE */}
        <Helmet>
      
        <title>The Goodwill Facades | Best Facade Glazing Company</title>
        <meta
          name="description"
          content="We design and manufacture modern facade glazing systems, ACP cladding, aluminium systems and architectural facade solutions."
        />
        <meta
          name="keywords"
          content="Facade glazing, ACP cladding, aluminium windows, curtain wall, building facade, glass facade, architectural facade, facade contractors, facade manufacturing company, aluminium facade, facade engineering"
        />
        <meta name="author" content="thegoodwillfacade" />
        <meta name="robots" content="index, follow" />


       
        <link rel="canonical" href="https://thegoodwillfacade.com/" />
        

     
        <meta property="og:title" content="The Goodwill Facades | Best Facade Glazing Company" />

        <meta
          property="og:description"
          content="We design and manufacture modern facade glazing systems, ACP cladding, aluminium systems and architectural facade solutions."
        />

       
        <meta property="og:url" content="https://www.thegoodwillfacade.com/" />

   
        <meta property="og:type" content="website" />

   
        <meta property="og:site_name" content="The GoodWill Facade" />

   
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The GoodWill Facade",
            "url": "https://www.thegoodwillfacade.com/",
            "logo": "https://www.thegoodwillfacade.com/lo.webp",

            /* ✅ Business social profiles (Google Knowledge Panel improves ranking) */
            "sameAs": [
              "linkedin.com/in/neil-the-goodwill-facade-bhaidaswala-b471bb113",
              "https://www.instagram.com/thegoodwillfacade?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              
            ],

            /* ✅ Helps Google display business info */
            "description": "We design and manufacture modern facade glazing systems, ACP cladding, aluminium systems and architectural facade solutions.",

           address: {
              "@type": "PostalAddress",
              streetAddress:
                "Disha C.H.S., Opp. Joggers Park, Chikoowadi, Borivali
                      West, Mumbai ",
              addressLocality: "Mumbai",
              postalCode: "400 092",
              addressRegion: "MH",
              addressCountry: "IN"
            },

           contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 9892118052",
              contactType: "customer support",
              email: "thegoodwillfacade@gmail.com",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"]
            },
          }
        `}
        </script>
      </Helmet>

























      <Hero />
      <About />
      <Projectpage />

      <Servicespage />
      <ClientLogoSlider />

      {/* <Contact/> */}
    </>
  );
};

export default Home;
