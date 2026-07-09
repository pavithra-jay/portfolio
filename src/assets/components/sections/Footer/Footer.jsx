import "./Footer.css";
import Container from "../../../ui/Container/Container";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiArrowUpRight,
} from "react-icons/fi";

const navLinks = [
  { title: "Home", to: "hero" },
  { title: "Journey", to: "journey" },
  { title: "Tech Stack", to: "techstack" },
  { title: "Projects", to: "projects" },
  { title: "Experience", to: "experience" },
  { title: "Contact", to: "contact" },
];

const Footer = () => {
  return (
    <footer className="footer">

      <Container>

        {/* CTA */}

        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <p className="footer-tag">
            Let's Connect
          </p>

          <h2>
            Ready to build something impactful?
          </h2>

          <p>
            I'm always excited to collaborate on meaningful products,
            scalable frontend applications, and challenging ideas.
          </p>

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-70}
            className="footer-button"
          >
            Let's Talk
            <FiArrowUpRight />
          </Link>

        </motion.div>

        <div className="footer-divider"></div>

        {/* Middle */}

        <div className="footer-middle">

          <motion.div
            className="footer-brand"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <h3>Pavithra Jay</h3>

            <p>
              Frontend Developer
            </p>

            <span>
              Chennai, Tamil Nadu, India
            </span>

            <div className="availability">
              {/* <span className="dot"></span> */}

              Available for Opportunities
            </div>

          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
          >

            {navLinks.map((item) => (

              <Link
                key={item.title}
                to={item.to}
                smooth
                duration={600}
                offset={-70}
              >
                {item.title}
              </Link>

            ))}

          </motion.div>

          <motion.div
            className="footer-socials"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .4 }}
          >

            <a
              href="https://github.com/pavithra-jay"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pavithra-jay-6348b6419"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:pavithra.evara@gmail.com"
            >
              <FiMail />
            </a>

          </motion.div>

        </div>
        {/* <div className="footer-socials-wrapper">

    <p>Connect</p>

    <div className="footer-socials">
       ...
    </div>

</div> */}

        <div className="footer-divider"></div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Pavithra Jay.
            All Rights Reserved.
          </p>

         

        </div>

      </Container>

      <Link
        to="hero"
        smooth
        duration={700}
        className="back-top"
      >
        <FiArrowUp />
      </Link>

    </footer>
  );
};

export default Footer;