import "./Projects.css";
import Container from "../../../ui/Container/Container";
import ProjectCard from "../../../ui/card/ProjectCard";
import { motion } from "framer-motion";

import organicmart from "../../../images/orgamart.png";

const projects = [
  {
    title: "OrganicMart",

    description:
      "A modern online grocery shopping platform where users can browse fresh products, search by category, manage their cart and wishlist, and enjoy a seamless shopping experience.",

    image: organicmart,

    features: [
      "Authentication",
      "CRUD Operations",
      "Search & Filter",
      "Dashboard",
      "Responsive Design",
    ],

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Material UI",
      "Ant Design",
    ],

    demo: "#",

    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      className="projects"
      id="projects"
    >
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">
            Portfolio
          </p>

          <h2>
            Selected Work
          </h2>

          <p className="section-description">
            A collection of projects that demonstrate my
            ability to design intuitive user experiences,
            develop scalable applications and solve
            real-world problems through clean code.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </Container>
    </section>
  );
};

export default Projects;