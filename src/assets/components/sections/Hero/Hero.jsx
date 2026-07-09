import "./Hero.css";
import Container from "../../../ui/Container/Container";
import Button from "../../../ui/button/Button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import profile from "../../../images/profile_img.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Container>
        <div className="hero-content">

          {/* Left Section */}
          <motion.div
  className="hero-left"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut"
  }}
>

          <motion.span
  className="hero-badge"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  Available for Opportunities
</motion.span>

         <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  Building Thoughtful <br />
  Digital Experiences.
</motion.h1>

            <h2>
  <TypeAnimation
    sequence={[
      "Crafting Modern Web Experiences",
      2000,

      "Turning Ideas into Beautiful Digital Experiences",
      2000,

      "Building Scalable Frontend Applications with React",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

           <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  I build fast, responsive, and user-focused web applications
  using React and modern JavaScript. I enjoy transforming ideas
  into intuitive, elegant digital experiences.
</motion.p>

           <motion.div
  className="hero-buttons"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
>

              <Button variant="primary">
                Explore My Work
              </Button>

              

            </motion.div>
            <div className="scroll-indicator">
    Scroll
</div>

          </motion.div>

          {/* Right Section */}

         <motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.3,
    ease: "easeOut"
  }}
>

  <div className="circle circle-1"></div>
  <div className="circle circle-2"></div>
  <div className="circle circle-3"></div>

  <div className="image-wrapper">
    <img src={profile} alt="Pavithra" />
  </div>

</motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;