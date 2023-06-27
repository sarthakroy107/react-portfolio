import { Landing } from "./components/Landing"
import { Education } from "./components/Education"
import { SkillLanding } from "./components/SkillLanding"
import { Projects } from "./components/Projects"
import GoToTop from "./components/GoToTop"
import { Contact } from "./components/Contact"

export const Home = () => {
  return (
    <main>
        <Landing/>
        <Education/>
        <SkillLanding/>
        <Projects/>
        <GoToTop/>
        <Contact/>
      </main>
  )
}
