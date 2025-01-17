import AboutMe from "./components/AboutSection/AboutMe";
import ContactMe from "./components/Contact/ContactMe";
import Experience from "./components/ExperienceSection/Experience";
import IntroSection from "./components/IntroSection/IntroSection";
import NavBar from "./components/NavBar/Nav";
import MyProject from "./components/ProjectSection/MyProject";
import Skills from "./components/SkillsSection/Skills";

const Home = () => {
  return (
    <div>
      <NavBar />
      <IntroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <MyProject/>
      <ContactMe/>
    </div>
  );
};

export default Home;
