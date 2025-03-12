import AboutMe from "./components/AboutSection/AboutMe";
import ContactMe from "./components/Contact/ContactMe";
import Experience from "./components/ExperienceSection/Experience";
import IntroSection from "./components/IntroSection/IntroSection";
import MenuBar from "./components/MenuBar/MenuBar";
import MyProject from "./components/ProjectSection/MyProject";
import Skills from "./components/SkillsSection/Skills";

const Home = () => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <MenuBar />

        <IntroSection />
        <AboutMe />
        <Experience />
        <Skills />
        <MyProject />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
