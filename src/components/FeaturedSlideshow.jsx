// src/components/FeaturedSlideshow.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FeaturedSlideshow() {
  const slide = {
    id: 1,
    title: "Customer Relationship Manager",
    desc:
      "CRM for SMBs — React + ChartJs frontend, Spring Boot + PostgreSQL backend, JWT security. Reduced dev time by 30% and supported 70+ users.",
    img: "/assets/crm-preview-1.png", // you will upload here
    link: "https://github.com/aburehan87/CRM-Application"
  };

  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        display: "flex",
        gap: 20,
        padding: 20,
        borderRadius: 12,
        overflow: "hidden",
        alignItems: "center",
        background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)"
      }}
    >
      {/* left: image */}
      <div
        style={{
          flex: "0 0 420px",
          maxWidth: "100%",
          minWidth: 220,
          borderRadius: 10,
          overflow: "hidden",
          background: "var(--card)"
        }}
      >
        <img
          src={slide.img}
          alt={slide.title}
          style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
        />
      </div>

      {/* right: meta */}
      <div style={{ flex: 1, minWidth: 260 }}>
        <h3 style={{ marginTop: 0 }}>{slide.title}</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{slide.desc}</p>

        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <a className="btn" href={slide.link} target="_blank" rel="noreferrer">
            View Project
          </a>
          <a className="btn-ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );
}
