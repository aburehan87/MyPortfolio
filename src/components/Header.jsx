// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState,useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

   useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="brand">
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
          <div className="logo ">R</div>
          <div>
            <h1 style={{ margin: 0, fontSize: 16 }}>Rehan</h1>
            <div className="sub" style={{ marginTop: 2 }}>Backend Developer</div>
          </div>
        </a>
      </div>

      <nav className="topnav" aria-label="Main navigation">
        {/* Home - placed first in the top-right nav as requested */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => `btn-ghost${isActive ? " active" : ""}`}
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <FaHome size={14} />
          Home
        </NavLink>

        <NavLink to="/projects" className={ ({ isActive }) => `btn-ghost${isActive ? " active" : ""}` }>
          Projects
        </NavLink>

        <NavLink to="/certifications" className={({ isActive }) => `btn-ghost${isActive ? " active" : ""}`}>
          Certifications
        </NavLink>

        <NavLink to="/experience" className={({ isActive }) => `btn-ghost${isActive ? " active" : ""}`}>
          Experience
        </NavLink>
        <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="theme"
      >
        {theme === "dark" ? "☀️" : " 🌙"}
      </button>
      </nav>
    </header>
  );
}
