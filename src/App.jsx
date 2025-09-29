import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import Projects from './pages/projects/Projects.jsx'
import Footer from './components/footer/Footer.jsx'



function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Projects />
      <Footer />
    </>
  )
}

export default App
