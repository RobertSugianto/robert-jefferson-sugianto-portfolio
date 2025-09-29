import './about.css'
import SqlLogo from "../../assets/sql-logo.png"
import TableauLogo from "../../assets/tableau-logo.png"
import JavaLogo from "../../assets/java-logo.png"
import PythonLogo from "../../assets/python-logo.png"
import HtmlLogo from "../../assets/html-logo.png"
import CssLogo from "../../assets/css-logo.png"
import JsLogo from "../../assets/javascript-logo.png"
import GoLogo from "../../assets/go-logo.png"
import FigmaLogo from "../../assets/figma-logo.png"

function Skills() {

    return(
        <div className="info-skills">
            <div className="skill-cards">
                <img src={SqlLogo} alt="" />
                <p>SQL</p>
            </div>
            <div className="skill-cards">
                <img src={TableauLogo} alt="" />
                <p>Tableau</p>
            </div>
            <div className="skill-cards">
                <img src={PythonLogo} alt="" />
                <p>Python</p>
            </div>
            <div className="skill-cards">
                <img src={HtmlLogo} alt="" />
                <p>HTML</p>
            </div>
            <div className="skill-cards">
                <img src={CssLogo} alt="" />
                <p>CSS</p>
            </div>
            <div className="skill-cards">
                <img src={JsLogo} alt="" />
                <p>JavaScript</p>
            </div>
            <div className="skill-cards">
                <img src={GoLogo} alt="" />
                <p>Go</p>
            </div>
            <div className="skill-cards">
                <img src={JavaLogo} alt="" />
                <p>Java</p>
            </div>
            <div className="skill-cards">
                <img src={FigmaLogo} alt="" />
                <p>Figma</p>
            </div>
        </div>
    );
}

export default Skills;