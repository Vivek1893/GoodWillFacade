// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "leaflet/dist/leaflet.css";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

// Service Subpages
import ACP from "./pages/services/ACP";
import Aluminum_Windows from "./pages/services/Aluminum_Windows";
import MS_Structure from "./pages/services/MS_Structure";
import Railings from "./pages/services/Railings";
import Skylight from "./pages/services/Skylight";
import Stone_Cladding from "./pages/services/Stone_Cladding";
import Structural_Glazing from "./pages/services/Structural_Glazing";
import Tensile_Fabrics from "./pages/services/Tensile_Fabrics";

import Project_list from "./pages/projects/Project_list";
import Detail_project from "./pages/projects/Detail_project.jsx";
import ProjectDetailDynamic from "./pages/projects/ProjectDetailDynamic.jsx";





// Component Pages
import About from "./components/About";
import Contact from "./components/Contact";
import Servicespage from "./components/Servicespage";
import Projectpage from "./components/Projectpage";

function App() {
  return (
    <Router>
     <ScrollToTop />
      <div className="app">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />

          {/* Sub-services */}
          <Route path="/services/ACP" element={<ACP />} />
          <Route path="/services/Aluminum_Windows" element={<Aluminum_Windows />} />
          <Route path="/services/MS_Structure" element={<MS_Structure />} />
          <Route path="/services/Railings" element={<Railings />} />
          <Route path="/services/Skylight" element={<Skylight />} />
          <Route path="/services/Stone_Cladding" element={<Stone_Cladding />} />
          <Route path="/services/Structural_Glazing" element={<Structural_Glazing />} />
          <Route path="/services/Tensile_Fabrics" element={<Tensile_Fabrics />} />

          {/* Project pages */}
          <Route path="/projects/Detail_project" element={<Detail_project />} />
          <Route path="/projects/Project_list" element={<Project_list />} />
          <Route path="/projects/detail/:projectId" element={<ProjectDetailDynamic />} />
          
          

          {/* Components pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/projectpage" element={<Projectpage />} />
          <Route path="/contact" element={<Contact />} />

         
         
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
