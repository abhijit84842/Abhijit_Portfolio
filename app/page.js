import AboutMe from "./components/AboutSection/AboutMe";
import Experience from "./components/ExperienceSection/Experience";
import IntroSection from "./components/IntroSection/IntroSection";
import NavBar from "./components/NavBar/Nav";
import Skills from "./components/SkillsSection/Skills";

const Home = () => {
  return (
    <div>
      <NavBar />
      <IntroSection />
      <AboutMe />
      <Experience />
      <Skills />
    </div>
  );
};

export default Home;
