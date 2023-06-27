import { Landing } from "./components/Landing"
import { Education } from "./components/Education"
import { SkillLanding } from "./components/SkillLanding"
import { Projects } from "./components/Projects"
import GoToTop from "./components/GoToTop"
import { Contact } from "./components/Contact"
import StarsCanvas from "./components/StarsCanvas"
import Footer from "./components/Footer"


export const Home = () => {
  return (
    <main>
        <StarsCanvas/>
        <Landing/>
        <Education/>
        <SkillLanding/>
        <Projects/>
        <GoToTop/>
        <Contact/>
        <Footer/>
      </main>
  )
}
