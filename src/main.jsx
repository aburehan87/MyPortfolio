import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Cursor from "./components/SplashCursor";
import SplashCursor from "./components/SplashCursor";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SplashCursor 
      // IF U WANT IT TO BE THICKER THEN USE THE BELOW CODE
      // EFFECT 1
      
       SIM_RESOLUTION={96}
  DYE_RESOLUTION={720}
  SPLAT_RADIUS={0.05}        // thinner
  SPLAT_FORCE={2500}         // softer
  DENSITY_DISSIPATION={6}    // fade quickly
  VELOCITY_DISSIPATION={2}
  CURL={1.5}                 // less swirling
  COLOR_UPDATE_SPEED={5}
  PRESSURE={0.1}
  PRESSURE_ITERATIONS={20}
  SHADING={true}
  TRANSPARENT={true}

// EFFECT 2
  //  SIM_RESOLUTION={120}
//   DYE_RESOLUTION={800}
//   SPLAT_RADIUS={0.055}           
//   SPLAT_FORCE={2200}
//   DENSITY_DISSIPATION={5.5}
//   VELOCITY_DISSIPATION={1.8}
//   CURL={2.8}                     // energetic neon swirl
//   COLOR_UPDATE_SPEED={7}
//   BACK_COLOR={{ r: 0, g: 0, b: 0 }}
//   SHADING={true}
//   TRANSPARENT={true}
  
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
