import React, { useState, useEffect } from "react";
// import DF1 from "../assets/CRM1.webp"
import { motion } from "framer-motion";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

/**
 * Simple Carousel component (no external libs).
 * Props:
 * - images: array of image URLs
 * - autoPlay: boolean (default true)
 * - autoPlayInterval: ms (default 3000)
 */
function ProjectCarousel({ images = [], autoPlay = true, autoPlayInterval = 3000 }) {
  const [idx, setIdx] = useState(0);

  // autoplay
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), autoPlayInterval);
    return () => clearInterval(t);
  }, [images.length, autoPlay, autoPlayInterval]);

  useEffect(() => {
    // reset index if images changed and index out of bounds
    if (idx >= images.length) setIdx(0);
  }, [images, idx]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        <img src={images[idx]} alt={`slide-${idx}`} className="carousel-image" />
      </div>

      {/* controls */}
      {images.length > 1 && (
        <>
          <button className="carousel-btn carousel-prev" onClick={() => setIdx(i => (i - 1 + images.length) % images.length)} aria-label="Previous">
            <FiChevronLeft size={20} />
          </button>
          <button className="carousel-btn carousel-next" onClick={() => setIdx(i => (i + 1) % images.length)} aria-label="Next">
            <FiChevronRight size={20} />
          </button>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  // add image paths here for each project (you can add multiple images per project)
  const projects = [
    {
      title: "Customer Relationship Management (CRM) System",
      bullets: [
        "Built a functional CRM system to manage client data and streamline daily workflows for small and medium businesses.",
        "Developed RESTful APIs using Spring Boot and implemented frontend interactions using JavaScript.",
        "Integrated MySQL for persistent storage and implemented custom error handling and monitoring.",
        "Supported 70+ active user accounts and reduced development time by 30% through optimized reusable modules."
      ],
      tech: ["Spring Boot", "MySQL", "JavaScript", "REST APIs", "Hibernate"],
      images: [
        // demo image (your uploaded file) — replace or add more here
        // {CRM1},{CRM2},{CRM3}
      ],
      link: "https://github.com/aburehan87/CRM-Application" // paste project link here if available
    },
    {
      title: "DeepFake Video Detection",
      bullets: [
        "Developed a CNN + LSTM based DeepFake video detection pipeline using TensorFlow and Keras.",
        "Analyzed eye-blink, lip-sync, and audio-video alignment features using OpenCV.",
        "Exposed detection via Spring Boot APIs returning REAL/FAKE results with accuracy scoring.",
        "Built a reporting dashboard using HTML/CSS/JS for frame-level inspection and insights."
      ],
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Spring Boot"],
      images: [
        "https://shorturl.at/g1EeN", "https://shorturl.at/XFREW", "https://shorturl.at/U1VOY" // demo duplicated — replace with real screenshots
      ],
      link: "https://github.com/aburehan87/Deepfake-Video-Detection"
    },
    {
      title: "E-Commerce Web Application",
      bullets: [
        "Developed a full online shopping platform supporting product management and user navigation.",
        "Built scalable CRUD APIs using Spring Boot and Hibernate and integrated MySQL for persistent storage.",
        "Implemented live search for fast product discovery and built a responsive UI.",
        "Enhanced API performance by 20% and optimized backend logic for 50+ product records."
      ],
      tech: ["Spring Boot", "Hibernate", "MySQL", "JavaScript", "REST APIs"],
      images: [
        "/mnt/data/7368cc9d-200f-475f-9978-ca2257966101.png"
      ],
      link: "https://github.com/aburehan87/E-Commerce-Web-Application."
    }
  ];

  return (
    <div>
      <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
        Projects
      </motion.h2>

      {/* stacked: one card per project — full-width stacked vertically */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {projects.map((p, i) => (
          <motion.section
            key={i}
            className="card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            style={{ width: "100%" }}
          >
            <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* left: content (flex: 1) */}
              <div style={{ flex: "1 1 520px", minWidth: 280 }}>
                <h3 style={{ marginTop: 0 }}>{p.title}</h3>

                <div style={{ marginTop: 8 }}>
                  {p.bullets.map((b, idx) => (
                    <p key={idx} style={{ margin: "8px 0", color: "var(--muted)" }}>
                      • {b}
                    </p>
                  ))}
                </div>

                <div style={{ marginTop: 12 }}>
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="tag" style={{ marginRight: 6 }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  <a href={p.link || "#"} target="_blank" rel="noreferrer" className="btn-ghost" style={{ opacity: p.link ? 1 : 0.6 }}>
                    Visit Project <FiExternalLink style={{ marginLeft: 8 }} />
                  </a>

                  {/* quick upload link placeholder (you can implement actual upload separately) */}

                </div>
              </div>

              {/* right: carousel preview (fixed column width on desktop) */}
              <div style={{ flex: "0 0 360px", width: "100%", maxWidth: 360 }}>
                <ProjectCarousel images={p.images} autoPlay={true} autoPlayInterval={3500} />
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}


