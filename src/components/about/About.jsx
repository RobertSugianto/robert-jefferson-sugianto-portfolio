import "./about.css"
import meFormal from "../../assets/me-formal.jpg"
import { useState } from "react"
import Skills from "./Skills.jsx"
import Description from "./Description.jsx"
import Personal from "./Personal.jsx"


function About() {

    const [activeTab, setActiveTab] = useState("description");

    function renderContent() {
        if(activeTab === "description") return <Description />
        if(activeTab === "personal") return <Personal />
        if(activeTab === "skills") return <Skills />

    }

    return(
        <div className="about" id="about">
            <div className="info">
                <h3>About Me</h3>
                <div className="info-nav">
                    <button 
                        className={`info-nav-child ${activeTab === "description" ? "active" : ""}`}
                        onClick={() => setActiveTab("description")}
                    >
                        <p>Description</p>
                    </button>
                    <button 
                        className={`info-nav-child ${activeTab === "personal" ? "active" : ""}`}
                        onClick={() => setActiveTab("personal")}
                    >
                        <p>Information</p>
                    </button>
                    <button 
                        className={`info-nav-child ${activeTab === "skills" ? "active" : ""}`}
                        onClick={() => setActiveTab("skills")}
                    >
                        <p>Skills</p>
                    </button>
                </div>
                <div className="info-group">
                    {renderContent()}
                </div>
            </div>
            <div className="formal-image">
                <img src={meFormal} alt="formal-image" />
            </div>
        </div>
    );
}

export default About