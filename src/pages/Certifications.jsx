import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Java from "../assets/DigitalEdify.webp"
import python from "../assets/Python.webp"
import Dsa from "../assets/DSA.webp"
import oracle from "../assets/oracle.webp"


export default function Certifications() {
  const certs = [
    {
      id: 1,
      name: "Java Full Stack Development",
      organization: "Digital Edify",
      link: "https://drive.google.com/file/d/1h-l8uP8LEuVPglDBFfCQOhiESvYVYY4J/view?usp=drive_link",
      image: Java
    },
    {
      id: 2,
      name: "Spring Boot 3 and Spring Framework",
      organization: "Udemy",
      link: "https://www.udemy.com/certificate/UC-a76ebf65-8501-446c-bb17-aa0ac0b29334/",
      image: python
    },
    {
      id: 3,
      name: "Mastering Data Structures and Algorithms using C and C++",
      organization: "Udemy",
      link: "https://www.udemy.com/certificate/UC-7318bdd4-b90b-4785-aeaf-3fd6e3ae430b/",
      image: Dsa
    },
    {
      id: 4,
      name: "Oracle Certified Associate Java Programmer (OCAJP) 1Z0-808",
      organization: "Udemy",
      link: "https://www.udemy.com/certificate/UC-6c66ae6d-da69-4cc1-ae4f-809518b8d998/",
      image: oracle
    }
    
  ];

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: 18 }}
      >
        Certifications
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {certs.map((c) => (
          <motion.section
            key={c.id}
            className="card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
                flexWrap: "wrap"
              }}
            >
              {/* Left: Certification Details */}
              <div style={{ flex: "1 1 480px", minWidth: 260 }}>
                <h3 style={{ marginTop: 0 }}>{c.name}</h3>

                <div style={{ marginTop: 6, color: "var(--muted)" }}>
                  <strong>Organization:</strong> {c.organization}
                </div>

                <div style={{ marginTop: 12 }}>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    View Certificate
                    <FiExternalLink size={16} style={{ marginLeft: 8 }} />
                  </a>
                </div>
              </div>

              {/* Right: Certificate Image */}
              <div
                style={{
                  flex: "0 0 320px",
                  width: "100%",
                  maxWidth: 320
                }}
              >
                <div className="cert-preview">
                  <img
                    src={c.image}
                    alt={`${c.name} preview`}
                    className="cert-image"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
