// src/components/Skills.jsx
import React from "react";
import "../pages/Experience.css";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiRedis,
  SiJupyter,
  SiGooglecolab,
  SiDotnet,
  SiCplusplus,
  SiCommonworkflowlanguage
} from "react-icons/si";

export default function Skills({
  intro = "Full Stack & AI/ML Developer with hands-on backend, API design, and model-building experience.",
}) {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <SiCommonworkflowlanguage /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "DotNet", icon: <SiDotnet /> }
      ]
    },
    {
      title: "Backend / Databases",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "REST APIs", icon: <SiSpringboot /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Postgres", icon: <SiPostgresql /> }
      ]
    },
    {
      title: "AI / Data",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "OpenCV", icon: <SiNumpy /> }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Jupyter", icon: <SiJupyter /> },
        { name: "Colab", icon: <SiGooglecolab /> }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
  };
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

  // Use CSS variables so the component respects :root and :root.light values.
  const pillStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 999,
    background: "var(--pill-bg)",          // theme-aware background
    border: "1px solid rgba(99,102,241,0.18)",
    color: "var(--pill-text)",             // theme-aware text color
    fontSize: 13,
    fontWeight: 600,
    cursor: "default",
    boxShadow: "0 6px 18px rgba(2,6,23,0.14)"
  };

  return (
    <motion.section
      className="skills-section"
      initial="hidden"
      animate="show"
      variants={container}
      style={{ position: "relative" }}
    >
      {/* tiny component-local rules for the pulse/hover transition */}
      <style>{`
        .skills-pulse {
          transition: box-shadow 200ms ease, transform 180ms ease, background 180ms ease;
        }
        .skills-pulse:active { transform: scale(0.98); }
      `}</style>

      <div className="skills-left" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <motion.h2 variants={item} style={{ margin: 0 }}>Skills</motion.h2>
        <motion.p variants={item} className="skills-sub" style={{ margin: 0, color: "var(--muted)" }}>{intro}</motion.p>

        <motion.div variants={container} style={{ display: "grid", gap: 16 }}>
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={item}>
              <h4 className="skills-text" style={{ margin: "6px 0" }}>{cat.title}</h4>

              <div className="skill-tags" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {cat.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    className="skills-pulse"
                    whileHover={{ scale: 1.06, boxShadow: "0 12px 36px rgba(99,102,241,0.18)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={pillStyle}
                    aria-hidden
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        color: "var(--accent)" // icon color set to accent variable
                      }}
                    >
                      {s.icon}
                    </span>
                    <span style={{ color: "var(--pill-text)", marginLeft: 6 }}>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* keep right column present for layout consistency but hidden (as before) */}
      <div className="skills-right" style={{ display: "none" }} aria-hidden />
    </motion.section>
  );
}
