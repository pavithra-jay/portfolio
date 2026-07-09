import "./TechStack.css";
import Container from "../../../ui/Container/Container";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Building modern, responsive user interfaces.",
    skills: [
      {
        icon: <i className="devicon-react-original colored"></i>,
        name: "React",
        level: "Advanced",
        progress: "95%",
      },
      {
        icon: <i className="devicon-javascript-plain colored"></i>,
        name: "JavaScript",
        level: "Advanced",
        progress: "92%",
      },
      {
        icon: <i className="devicon-typescript-plain colored"></i>,
        name: "TypeScript",
        level: "Intermediate",
        progress: "75%",
      },
      {
        icon: <i className="devicon-html5-plain colored"></i>,
        name: "HTML5",
        level: "Advanced",
        progress: "95%",
      },
      {
        icon: <i className="devicon-css3-plain colored"></i>,
        name: "CSS3",
        level: "Advanced",
        progress: "93%",
      },
      {
        icon: <i className="devicon-tailwindcss-plain colored"></i>,
        name: "Tailwind CSS",
        level: "Intermediate",
        progress: "80%",
      },
    ],
  },

  {
    title: "Backend",
    subtitle: "Creating scalable APIs and server-side applications.",
    skills: [
      {
        icon: <i className="devicon-nodejs-plain colored"></i>,
        name: "Node.js",
        level: "Intermediate",
        progress: "78%",
      },
      {
        icon: <i className="devicon-express-original"></i>,
        name: "Express.js",
        level: "Intermediate",
        progress: "75%",
      },
      {
        icon: "🌐",
        name: "REST APIs",
        level: "Intermediate",
        progress: "80%",
      },
    ],
  },

  {
    title: "Tools",
    subtitle: "Tools that power my development workflow.",
    skills: [
      {
        icon: <i className="devicon-git-plain colored"></i>,
        name: "Git",
        level: "Advanced",
        progress: "90%",
      },
      {
        icon: <i className="devicon-github-original"></i>,
        name: "GitHub",
        level: "Advanced",
        progress: "90%",
      },
      {
        icon: <i className="devicon-vscode-plain colored"></i>,
        name: "VS Code",
        level: "Advanced",
        progress: "95%",
      },
      {
        icon: <i className="devicon-postman-plain colored"></i>,
        name: "Postman",
        level: "Advanced",
        progress: "90%",
      },
      {
        icon: <i className="devicon-figma-plain colored"></i>,
        name: "Figma",
        level: "Intermediate",
        progress: "75%",
      },
      {
        icon: <i className="devicon-vercel-original"></i>,
        name: "Vercel",
        level: "Intermediate",
        progress: "70%",
      },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="techstack">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">Technology</p>

          <h2>Tech Stack</h2>

          <p className="section-description">
            The technologies I use to build modern, scalable and
            user-focused web applications.
          </p>
        </motion.div>

        <div className="stack-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="stack-card"
              key={group.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="stack-header">
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
              </div>

              <div className="skills">
                {group.skills.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <div className="skill-top">
                      <div className="skill-left">
                        <span className="skill-icon">
                          {skill.icon}
                        </span>

                        <span className="skill-name">
                          {skill.name}
                        </span>
                      </div>

                      <span className="skill-level">
                        {skill.level}
                      </span>
                    </div>

                    <div className="progress-track">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: skill.progress,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;