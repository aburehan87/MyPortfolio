// src/pages/Academics.jsx
import React from "react";
import Skills from "../components/Skills";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Academics() {
  const academics = [
    {
      id: 1,
      title: "Jan 2025 - Present",
      designation: "Artificial Intelligence Intern - AI Development",
      place: "SERP Media DigiClues",
      details:
        "- Applied Python, machine learning fundamentals, and AI automation to optimize workflows.- Built and enhanced AI-powered bots for lead verification and data validation.- Leveraged Google Colab, Jupyter Notebook, Pandas, NumPy, and OpenAI APIs for model testing and automation.- Automated repetitive tasks, boosting workflow efficiency and accuracy by 25%",
      image: "/mnt/data/Screenshot (322).png"
    },
    {
      id: 2,
      title: "May 2024 - December 2024",
      designation: "Java Developer Intern",
      place: "Digital Edify",
      details:
        "- Developed scalable RESTful APIs using Spring Boot and Hibernate, improving system performance.- Strengthened security with Spring Security and JWT, reducing unauthorized access attempts by 30%.- Automated backend processes, cutting development time by 25% while maintaining benchmarks.- Collaborated with cross-functional teams to refine architecture and resolve production-level issues.- Documented backend workflows and API endpoints for a CRM platform, ensuring maintainability.",
      image: "/mnt/data/Screenshot (322).png"
    }
  ];

  // motion container for list
  const itemVariant = {
    off: { opacity: 0, y: 12 },
    on: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  };

  return (
    <div>
      {/* small component-local styles added so we don't touch index.css */}
      <style>{`
        /* pulsing dot animation local to this component */
        @keyframes dotPulse {
          0% { box-shadow: 0 6px 18px rgba(99,102,241,0.14), 0 0 0 0 rgba(99,102,241,0.06); transform: scale(1); }
          50% { box-shadow: 0 12px 36px rgba(99,102,241,0.20), 0 0 0 8px rgba(99,102,241,0.04); transform: scale(1.06); }
          100% { box-shadow: 0 6px 18px rgba(99,102,241,0.14), 0 0 0 0 rgba(99,102,241,0.01); transform: scale(1); }
        }

        /* small badge for designation icon */
        .designation-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.03);
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.03);
          color: #e6eef8;
          font-weight: 600;
          font-size: 14px;
        }

        /* animated dot style (applied to the existing dot element) */
        .timeline-dot-animated {
          animation: dotPulse 2400ms ease-in-out infinite;
        }
      `}</style>

      <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 30 }}>
        Experience
      </motion.h2>

      <Skills intro="Full Stack & AI/ML Developer with hands-on backend, API design, and model-building experience." />

    <div className="timeline-wrapper">
  {academics.map((item, idx) => (
    <motion.div
      key={item.id}
      className={`timeline-item ${idx % 2 === 0 ? "timeline-left" : "timeline-right"}`}
      initial="off"
      whileInView="on"
      viewport={{ once: true, amount: 0.2 }}
      variants={itemVariant}
    >
      {/* Center date on timeline */}
      <div className="timeline-date">{item.title}</div>

      {/* Dot on the center line */}
      {/* <div className="timeline-dot"></div> */}

      {/* Timeline Card */}
      <div className="content">
        {item.designation && (
          <div style={{ marginBottom: 8 }}>
            <span className="designation-badge">
              <FaBriefcase style={{ width: 16, height: 16 }} />
              {item.designation}
            </span>
          </div>
        )}

        <p style={{ margin: "0 0 8px", color: "var(--muted)" }}>{item.place}</p>

        <ul style={{ margin: "8px 0 0", paddingLeft: "20px", lineHeight: "1.55" }}>
          {item.details
            .split("-")
            .map((line) => line.trim())
            .filter((line) => line.length > 0)
            .map((point, i) => (
              <li key={i} style={{ marginBottom: "6px", color: "var(--muted)" }}>
                {point}
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
}
