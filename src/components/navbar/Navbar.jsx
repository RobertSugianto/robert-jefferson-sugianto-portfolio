import './navbar.css'

function Navbar() {

    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src="./logo.png" alt="website-logo" className="logo-image"/>
                <div className="logo-text">
                    Robert Jefferson Sugianto
                </div>
            </div>

            <nav className="navbar-menu">
                <a href="#hero">Home</a>
                <a href="#about">About me</a>
                <a href="#project-summary">My Projects</a>
            </nav>
        </div>
    );
}

export default Navbar