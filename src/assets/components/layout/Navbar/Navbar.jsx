// 
import Container from "../../../ui/Container/Container";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Prevent body scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <Container>
          <div className="navbar-content">

            <div className="logo">
              Pavithra
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

              <li>
                <Link
                  to="journey"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Journey
                </Link>
              </li>

              <li>
                <Link
                  to="techstack"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Tech Stack
                </Link>
              </li>

              <li>
                <Link
                  to="projects"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="experience"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>

            </ul>

            <div
              className="menu-icon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </div>

          </div>
        </Container>
      </nav>

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;