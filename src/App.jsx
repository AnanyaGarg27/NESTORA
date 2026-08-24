import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import HeroSection from "./Components/HeroSection/HeroSection";
import Stats from "./Components/Stats/Stats";
import Features from "./Components/Features/Features";
import RoomCategories from "./Components/RoomCategories/RoomCategories";

import CTASection from "./Components/CTAsection/CTAsection";
import Footer from "./Components/Footer/Footer";

import Premiumpage from "./Components/Premium Page/Premiumpage";

import Gallery from "./Components/Gallery/Gallery";
import Preferences from "./Components/Preferences/Preferences";

import RoomDesigner from "./Components/RoomDesigner/RoomDesigner";
import RoomSetup from "./Components/RoomSetup/RoomSetup";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Explore from "./Components/Explore/Explore";


// HOME PAGE


function HomePage() {
  return (
    <>
      <HeroSection />

      <Stats />

      <Features />

      <RoomCategories />

      {/* CTA ONLY ON HOME */}
      <CTASection />
    </>
  );
}



// APP LAYOUT


function AppLayout() {

  const location = useLocation();

  // Controls Premium popup
  const [showPremium, setShowPremium] = useState(false);


  
  // ROOM DESIGNER CHECK
  

  const isDesignerPage =
    location.pathname === "/room-designer";


  
  // AUTOMATIC PREMIUM POPUP
  // ONLY ON HOME PAGE
 
  useEffect(() => {

    // Do not show automatic popup
    // on any other page
    if (location.pathname !== "/") {
      return;
    }


    // Check if user already has Premium
    const isPremium =
      localStorage.getItem("isPremium") === "true";


    // Don't show popup for Premium users
    if (isPremium) {
      return;
    }


    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPremium(true);
    }, 5000);


    // Cleanup timer
    return () => clearTimeout(timer);

  }, [location.pathname]);


  
  // OPEN PREMIUM POPUP


  const openPremium = () => {
    setShowPremium(true);
  };



  // CLOSE PREMIUM POPUP
  

  const closePremium = () => {
    setShowPremium(false);
  };


  return (
    <>

      {/* 
          NAVBAR
          Hidden only on Room Designer
       */}

      {!isDesignerPage && <Navbar />}


      {/* 
          PAGE ROUTES
      */}

      <Routes>

        {/*
            HOME
     */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* 
            GALLERY
         */}

        <Route
          path="/gallery"
          element={<Gallery />}
        />


        {/* 
            PREFERENCES
        */}

        <Route
          path="/preferences"
          element={<Preferences />}
        />


        {/* 
            ROOM DESIGNER
        */}

        <Route
          path="/room-designer"
          element={<RoomDesigner />}
        />


        {/* 
            ROOM SETUP
         */}

        <Route
          path="/room-setup"
          element={<RoomSetup />}
        />


        {/* 
            ABOUT
         */}

        <Route
          path="/about"
          element={<About />}
        />


        {/*
            CONTACT
        */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/*
            FEATURES
        */}

        <Route
  path="/features"
  element={<Features />}
/>
<Route path="/explore/:roomName" element={<Explore/>}/>
        

      </Routes>


      {/* 
          FOOTER
          Hidden only on Room Designer
      */}

      {!isDesignerPage && <Footer />}


      {/* 
          PREMIUM POPUP
       */}

      <Premiumpage
        isVisible={showPremium}
        onClose={closePremium}
      />

    </>
  );
}



// APP


function App() {

  return (
    <Router>

      <AppLayout />

    </Router>
  );
}


export default App;
