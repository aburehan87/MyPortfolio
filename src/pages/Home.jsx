// src/pages/Home.jsx
import React from "react";
import CRMCarousel from "../components/CRMCarousel";
import ContactForm from "../components/ContactForm";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import img1 from "../assets/CRM1.webp"
import img2 from "../assets/CRM2.webp"
import img3 from "../assets/CRM3.webp"
import "./Home.css"

export default function Home() {
 
 
  const crmImages =[img1,img2,img3];

  return (
    <div className="home-page">
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="intro card ">
          <h2>Hi, I'm Rehan. — I build reliable frontend systems..</h2>

          <p className="">
            I’m a backend-focused Java developer who enjoys building clean,
            scalable applications using Spring Boot, REST APIs, and SQL.
            Currently improving my frontend skills to become stronger at
            building full, end-to-end applications.
          </p>

          {/* Social + CV (Home button removed from here) */}
          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {/* GitHub */}
            <a className="btn-ghost" href="https://github.com/aburehan87/" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FaGithub size={16} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a className="btn-ghost" href="http://www.linkedin.com/in/rehannasirwaddo" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            {/* Mail */}
            <a className="btn-ghost" href="mailto:aburehanwaddo@gmail.com" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FaEnvelope size={16} />
              Mail
            </a>

            {/* Download CV — example using the local upload you made (local path shown below) */}
            <a className="btn" href="https://drive.google.com/file/d/1O0p0V-Uuwm_H7YR-2yRVGlzGfWmRBJS3/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <FaDownload size={14} />
              Download CV
            </a>
            
          </div>

          {/* Quick facts small row */}
          <div style={{ marginTop: 18 }}>
            <h4 style={{ margin: "8px 0" }}>Quick facts</h4>
            <div style={{ color: "var(--muted)" }}>
              Location — Maharashtra, India • Available for remote roles • Development / AI-ML
            </div>
          </div>
        </div>

        {/* ================= SKILLS SIDEBAR ================= */}
        <aside className="card rehan" style={{ padding: 16 }}>
          <h4 style={{ marginTop: 0 }}>Skills</h4>

          <div className="" style={ { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            <span className="tag bg-change-white">Java</span>
            <span className="tag bg-change-white">Python</span>
            <span className="tag bg-change-white">C</span>
            <span className="tag bg-change-white">C++</span>
            <span className="tag bg-change-white">MySQL</span>
             <span className="tag bg-change-white">PostgreSQL</span>
            <span className="tag bg-change-white">Spring Boot</span>
             <span className="tag bg-change-white">Pandas</span>
              <span className="tag bg-change-white">NumPy</span>
               <span className="tag bg-change-white">TensorFlow</span>
            <span className="tag bg-change-white">REST APIs</span>
           <span className="tag bg-change-white">Git</span>
            <span className="tag bg-change-white">GitHub</span>
             <span className="tag bg-change-white">Machine Learning</span>
              <span className="tag bg-change-white">NLP</span>
               <span className="tag bg-change-white">Data Structures and Algorithms</span>
          </div>
        </aside>
      </section>

      {/* ================= FEATURED PROJECT — CRM CAROUSEL ================= */}
      <section id="project" style={{ marginTop: 40 }}>
        <h3>Featured project</h3>

        <div style={{ marginTop: 10 }}>
          <CRMCarousel
            images={crmImages}
            title="Customer Relationship Manager"
            desc="Engineered a fully functional CRM system tailored for small and medium businesses, enabling efficient client data management and streamlined daily workflows. Designed and deployed RESTful APIs with Spring Boot, integrated dynamic frontend interactions using JavaScript, and implemented MySQL for reliable persistent storage. Enhanced system robustness with custom error handling and monitoring, while supporting 70+ active user accounts. Achieved a 30% reduction in development time by creating optimized, reusable modules that improved scalability and productivity."
            tech={["Java", "Spring Boot", "Hibernate", "PostgreSQL", "JWT", "Docker"]}
            link="https://github.com/aburehan87/CRM-Application"
            autoplay={true}
            interval={4200}
          />
        </div>

        {/* Impact metrics row */}
        <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
          <div className="card" style={{ padding: 12, minWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>70+</div>
            <div style={{ color: "var(--muted)" }}>Active users supported</div>
          </div>

          <div className="card" style={{ padding: 12, minWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>20%</div>
            <div style={{ color: "var(--muted)" }}>API performance gain</div>
          </div>

          <div className="card" style={{ padding: 12, minWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>30%</div>
            <div style={{ color: "var(--muted)" }}>Dev time saved</div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM (unchanged in page footer) ================= */}
      <section id="contact" style={{ marginTop: 40 }}>
        <h3>Get in touch</h3>
        <div style={{ marginTop: 10 }}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
{/* add this below the intro / hero block */}
<div className="nav-pills" style={{ marginTop: 18 }}>
  <div className="nav-pill">🙂 Me</div>
  <div className="nav-pill">📁 Projects</div>
  <div className="nav-pill">🧰 Skills</div>
  <div className="nav-pill">🎉 Fun</div>
  <div className="nav-pill">📬 Contact</div>
</div>