// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Academics from "./pages/Academics";
import WhatsAppButton from "./components/WhatsAppButton";
import "./index.css"


// init the shader-based bg
import { initFluidBG } from "./fluid-bg";

export default function App() {
  useEffect(() => {
    initFluidBG();
  }, []);

  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.25, ease: "easeIn" } }
  };

  return (
    <div className="app-root">
      <Header />
      <main className="main-container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
            <Route path="/projects" element={<motion.div {...pageTransition}><Projects /></motion.div>} />
            <Route path="/certifications" element={<motion.div {...pageTransition}><Certifications /></motion.div>} />
            <Route path="/experience" element={<motion.div {...pageTransition}><Academics /></motion.div>} />

          </Routes>
        </AnimatePresence>
      </main>
                  <WhatsAppButton />

      <Footer />
    </div>
  );
}
