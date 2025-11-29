import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CRMCarousel({
  images = [],
  title = "Customer Relationship Manager",
  desc = "",
  link = "#",
  autoplay = true,
  interval = 1000 // <--- 3 seconds autoplay
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const len = images.length;

  // -------- AUTOPLAY HANDLER (3 sec + works with manual click) --------
  useEffect(() => {
    if (!autoplay || paused || len <= 1) return;

    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % len);
    }, interval);

    return () => clearTimeout(timerRef.current);
  }, [index, autoplay, paused, interval, len]);

  const next = () => {
    clearTimeout(timerRef.current);
    setIndex((i) => (i + 1) % len);
  };

  const prev = () => {
    clearTimeout(timerRef.current);
    setIndex((i) => (i - 1 + len) % len);
  };

  const imgVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const thumbStyle = (i) => ({
    width: 70,
    height: 52,
    borderRadius: 8,
    objectFit: "cover",
    cursor: "pointer",
    border: i === index ? "2px solid var(--accent)" : "1px solid #ffffff30",
    flexShrink: 0
  });

  return (
    <div
      className="card"
      style={{ padding: 16, position: "relative", borderRadius: 14 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ---------- TEXT + CAROUSEL ---------- */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 360px", minWidth: 260 }}>
          <h3>{title}</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.5 }}>{desc}</p>
          <a className="btn" href={link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>

        {/* ---------- CAROUSEL BOX ---------- */}
        <div
          style={{
            width: "min(100%, 520px)",
            position: "relative"
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 12,
              background: "#000",
              overflow: "hidden",
              position: "relative"
            }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={images[index]}
                src={images[index]}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
                alt=""
              />
            </AnimatePresence>
          </div>

          {/* ---------- ARROWS ---------- */}
          {len > 1 && (
            <>
              <button
                onClick={prev}
                className="carousel-btn"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 8,
                  transform: "translateY(-50%)"
                }}
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={next}
                className="carousel-btn"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 8,
                  transform: "translateY(-50%)"
                }}
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* ---------- DOTS ---------- */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: -25,
              display: "flex",
              gap: 8
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  clearTimeout(timerRef.current);
                  setIndex(i);
                }}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "none",
                  background: i === index ? "var(--accent)" : "#ffffff60",
                  cursor: "pointer"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------- THUMBNAILS ---------- */}
      {len > 1 && (
        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 10,
            overflowX: "auto",
            paddingBottom: 6
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              onClick={() => {
                clearTimeout(timerRef.current);
                setIndex(i);
              }}
              style={thumbStyle(i)}
              alt="thumb"
              draggable={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
