import "./ProjectCard.css";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.article
      className={`project-card ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Image */}

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      {/* Content */}

      <div className="project-content">

        <p className="project-tag">
          Featured Project
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="feature-list">

          {project.features.map((feature) => (

            <span key={feature}>
              ✓ {feature}
            </span>

          ))}

        </div>

        <div className="tech-list">

          {project.tech.map((tech) => (

            <span key={tech}>
              {tech}
            </span>

          ))}

        </div>

        <div className="project-buttons">

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            <FiExternalLink />

            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            <FiGithub />

            GitHub
          </a>

        </div>

      </div>

    </motion.article>
  );
};

export default ProjectCard;