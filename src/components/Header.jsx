import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Header.css"

export default function Header() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme to root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="brand">
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="logo">R</div>
          <div>
            <h1 style={{ margin: 0, fontSize: 16 }}>Rehan</h1>
            <div className="sub" style={{ marginTop: 2 }}>
              Backend Developer
            </div>
          </div>
        </a>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation */}
      <nav className={`topnav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        <NavLink
          to="/"
          end
          onClick={handleNavClick}
          className={({ isActive }) => `btn-ghost${isActive ? " active" : ""}`}
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <FaHome size={14} />
          Home
        </NavLink>

        <NavLink
          to="/projects"
          onClick={handleNavClick}
          className={({ isActive }) => `btn-ghost${isActive ? " active" : ""}`}
        >
          Projects
        </NavLink>

        <NavLink
          to="/certifications"
          onClick={handleNavClick}
          className={({ isActive }) => `btn-ghost${isActive ? " active" : ""}`}
        >
          Certifications
        </NavLink>

        <NavLink
          to="/experience"
          onClick={handleNavClick}
          className={({ isActive }) => `btn-ghost${isActive ? " active" : ""}`}
        >
          Experience
        </NavLink>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
