import { Route, Routes } from "react-router-dom"
import { Contact } from "./components/Contact"
import { Home } from "./Home"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path ='/contact' element={<Contact/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
