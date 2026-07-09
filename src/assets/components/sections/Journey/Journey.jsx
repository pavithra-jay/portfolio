import "./Journey.css";
import Container from "../../../ui/Container/Container";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaBullseye } from "react-icons/fa";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Journey = () => {
  return (
    <section className="journey" id="journey">
      <Container>
        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <p className="section-tag">
            My Story
          </p>

          <h2>
            The Journey
          </h2>

          <p className="section-description">
            Every project I've built has strengthened my
            passion for creating clean, intuitive and
            user-focused digital experiences.
          </p>
        </motion.div>

        <div className="journey-grid">

          <motion.div
            className="journey-card"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: .2 }}
          >
            <FaLightbulb className="journey-icon"/>

            <h3>Passion</h3>

            <p>
              I enjoy transforming ideas into interactive
              web applications while continuously learning
              new technologies and improving my craft.
            </p>
          </motion.div>

          <motion.div
            className="journey-card"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: .4 }}
          >
            <FaRocket className="journey-icon"/>

            <h3>Growth</h3>

            <p>
              From mastering JavaScript fundamentals to
              developing React applications, every project
              has helped me become a better engineer.
            </p>
          </motion.div>

          <motion.div
            className="journey-card"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: .6 }}
          >
            <FaBullseye className="journey-icon"/>

            <h3>Vision</h3>

            <p>
              My goal is to build scalable, accessible and
              beautiful products that create meaningful
              experiences for users.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Journey;