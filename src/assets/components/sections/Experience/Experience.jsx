
import "./Experience.css";
import Container from "../../../ui/Container/Container";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Present",
    title: "Frontend Developer",
    company: "Building Modern Web Applications",
    description:
      "Developing responsive and user-focused web applications using React, JavaScript and modern frontend technologies.",
  },

  {
    year: "2025",
    title: "Full Stack Projects",
    company: "Personal & Academic Projects",
    description:
      "Built end-to-end applications including authentication, dashboards, CRUD operations, search functionality and responsive interfaces.",
  },

  {
    year: "2024",
    title: "React Development Journey",
    company: "Frontend Specialization",
    description:
      "Focused on component architecture, state management, API integration, performance optimization and UI development.",
  },

  {
    year: "2023",
    title: "Programming Foundations",
    company: "Learning & Exploration",
    description:
      "Started learning web development fundamentals including HTML, CSS, JavaScript and problem solving.",
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Experience</p>

          <h2 className="section-title">My Growth Journey</h2>

          <p className="section-description">
            A timeline of learning, building and continuously
            improving as a developer.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={item.year}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;