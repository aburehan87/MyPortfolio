import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
      </div>
      <div className="meta">{project.tags.join(" • ")} {project.link ? <>— <a href={project.link} style={{color:"#a5b4fc"}}>Link</a></> : null}</div>
    </article>
  );
}
