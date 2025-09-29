import './navbar.css'
import { useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation();

    const handleScroll = (id) => {
        if (location.pathname === "/") {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        } else {
            window.location.href = `/#${id}`;
        }
    };

    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src="./logo.png" alt="website-logo" className="logo-image"/>
                <div className="logo-text">
                    Robert Jefferson Sugianto
                </div>
            </div>

            <nav className="navbar-menu">
                <a onClick={() => {handleScroll("hero")}}>Home</a>
                <a onClick={() => {handleScroll("about")}}>About me</a>
                <a onClick={() => {handleScroll("project-summary")}}>My Projects</a>
            </nav>
        </div>
    );
}

export default Navbar