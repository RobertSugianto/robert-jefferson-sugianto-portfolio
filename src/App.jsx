import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import Projects from './pages/projects/Projects.jsx'
import Footer from './components/footer/Footer.jsx'



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
