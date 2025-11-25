// src/components/CRMCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CRMCarousel({
  images = ["/mnt/data/7368cc9d-200f-475f-9978-ca2257966101.png"],
  title = "Customer Relationship Manager",
  desc = "CRM for SMBs — React + ChartJs frontend, Spring Boot + PostgreSQL backend, JWT security.",
  link = "#",
  autoplay = true,
  interval = 4500
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);
  const len = images.length;

  useEffect(() => {
    if (!autoplay || paused || len <= 1) return;
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % len), interval);
    return () => clearTimeout(timeoutRef.current);
  }, [index, autoplay, paused, interval, len]);

  const prev = () => {
    clearTimeout(timeoutRef.current);
    setIndex((i) => (i - 1 + len) % len);
  };
  const next = () => {
    clearTimeout(timeoutRef.current);
    setIndex((i) => (i + 1) % len);
  };

  const imgVariants = {
    enter: { x: 18, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -18, opacity: 0 }
  };

  const thumbStyle = (i) => ({
    width: 76,
    height: 56,
    objectFit: "cover",
    borderRadius: 8,
    border: i === index ? "2px solid var(--accent)" : "1px solid rgba(255,255,255,0.06)",
    cursor: "pointer",
    flexShrink: 0
  });

  return (
    <div
      className="card"
      style={{
        position: "relative",
        padding: 14,
        overflow: "visible"
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Title / description */}
      <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 360px", minWidth: 260 }}>
          <h3 style={{ marginTop: 6, marginBottom: 6 }}>{title}</h3>
          <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
          <div style={{ marginTop: 12 }}>
            <a className="btn" href={link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        {/* IMAGE WRAPPER (responsive but bounded) */}
        <div
          style={{
            flex: "0 0 auto",
            width: "min(90%, 520px)",         // ← RESPONSIVE constraint: never wider than 520px, but up to 90% on small screens
            maxWidth: "520px",
            minWidth: 260,
            display: "flex",
            justifyContent: "center",
            position: "relative"
          }}
        >
          {/* Inner fixed-aspect box (keeps layout stable) */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",          // modern browsers: keeps proportion
              borderRadius: 10,
              overflow: "hidden",
              background: "var(--card)",
              position: "relative"
            }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={images[index] + `-${index}`}
                src={images[index]}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.46 }}
                alt={`slide-${index}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  userSelect: "none",
                  pointerEvents: "none"
                }}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* arrows (absolute but visually aligned) */}
          {len > 1 && (
            <>
              <button
                aria-label="prev"
                onClick={prev}
                className="carousel-btn carousel-prev"
                style={{ left: 6, top: "50%", transform: "translateY(-50%)" }}
              >
                <FaChevronLeft />
              </button>
              <button
                aria-label="next"
                onClick={next}
                className="carousel-btn carousel-next"
                style={{ right: 6, top: "50%", transform: "translateY(-50%)" }}
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* dots (kept under the image; positioned absolute so it doesn't push layout) */}
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: -22, display: "flex", gap: 8 }}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => { clearTimeout(timeoutRef.current); setIndex(i); }}
                style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: i === index ? "var(--accent)" : "rgba(255,255,255,0.35)" }}
                aria-label={`dot-${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* THUMBNAILS (scrollable on small screens) */}
      {images.length > 1 && (
        <div style={{ marginTop: 16, display: "flex", gap: 10, alignItems: "center", overflowX: "auto", paddingBottom: 6 }}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`thumb-${i}`}
              style={thumbStyle(i)}
              onClick={() => { clearTimeout(timeoutRef.current); setIndex(i); }}
              draggable={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
