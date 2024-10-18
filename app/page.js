import AboutMe from "./components/AboutSection/AboutMe"
import Experience from "./components/ExperienceSection/Experience"
import IntroSection from "./components/IntroSection/IntroSection"
import NavBar from "./components/NavBar/Nav"


const Home =()=>{
  return <div>
  
<NavBar/>
<IntroSection/>
<AboutMe/>
<Experience/>
  </div>
}

export default Home