import Navbar from "./assets/components/layout/Navbar/Navbar";
import Hero from "./assets/components/sections/Hero/Hero";
import Journey from "./assets/components/sections/Journey/Journey";
import TechStack from "./assets/components/sections/TechStack/TechStack";
import Projects from "../src/assets/components/sections/FeaturedProjects/Projects";
import Experience from "./assets/components/sections/Experience/Experience";
import Contact from "./assets/components/sections/Contact/Contact";
import Footer from "./assets/components/sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Journey/>
      <TechStack/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;