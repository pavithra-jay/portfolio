import Container from "../../../ui/Container/Container";
import "./Navbar.css";
import {Link} from "react-scroll";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  
useEffect(() => {
  const hero = document.getElementById("hero");

  if (!hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowNavbar(entry.isIntersecting);
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(hero);

  return () => observer.disconnect();
}, []);
  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <Container>
      <div className="logo">
        Pavithra
      </div>

      <ul className="nav-links">
        <li><Link
  to="journey"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active-link"
>
  Journey
</Link></li>


  <li><Link
  to="TechStack"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active-link"
>
  TeckStack
</Link></li>


        <li><Link
  to="projects"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active-link"
>
  Projects
</Link></li>


        <li><Link
  to="experience"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active-link"
>
  Experience
</Link></li>


        <li><Link
  to="contact"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active-link"
>
  Contact
</Link></li>
      </ul>

      
      </Container>
    </nav>
  );
};

export default Navbar;