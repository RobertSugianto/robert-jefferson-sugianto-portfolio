import './hero.css'
import meInformal from '../../assets/me-informal.png'
import downloadIcon from '../../assets/download-icon.png'
import humanIcon from '../../assets/human-icon.png'
import gmailIcon from '../../assets/gmail-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import githubIcon from '../../assets/github-icon.png'
import phoneIcon from '../../assets/phone-icon.png'


function Hero() {

    return(
        <div className="hero" id='hero'>
            <div className="simple-summary">
                <div className="summary-image">
                    <img src={meInformal} alt="me-informal" className='me-informal'/>
                </div>
                <div className="summary-text">
                    <p>Hello,</p>
                    <h1>I'm <span>Robert Jefferson</span></h1>
                    <p>And currently drawn to explore on how technology and data can be used to solve real-world problems.</p>
                    <div className="contacts">
                        <button className="contact-btn" onClick={() => {window.open("https://wa.me/+628112675466", "_blank")}}>
                            <img src={phoneIcon} alt="phone-icon" />
                            <p>Phone Number</p>
                        </button>
                        <button className="contact-btn" onClick={() => {window.open("mailto:robertjefferson2945@gmail.com", "_blank")}}>
                            <img src={gmailIcon} alt="email-icon"/>
                            <p>Email</p>
                        </button>
                        <button className="contact-btn" onClick={() => {window.open("https://www.linkedin.com/in/robert-jefferson-sugianto/", "_blank")}}>
                            <img src={linkedinIcon} alt="linkedin-icon" />
                            <p>Linkedin</p>
                        </button>
                        <button className="contact-btn" onClick={() => {window.open("https://github.com/RobertSugianto", "_blank")}}>
                            <img src={githubIcon} alt="github-icon" />
                            <p>Github</p>
                        </button>
                        <button className="contact-btn" onClick={() => {window.open("https://drive.google.com/uc?export=download&id=1AQbXfSyvL-TpGFLTVsozYEhDEHX7-9Ct", "_blank")}}>
                            <img src={downloadIcon} alt="download-icon" />
                            <p>Download CV</p>
                        </button>
                        <button className="contact-btn" onClick={() => {document.getElementById('footer').scrollIntoView()}}>
                            <img src={humanIcon} alt="human-icon" />
                            <p>Hire me</p>
                        </button>
                    </div>
                </div>
            </div>
            <button className="learn-more" onClick={() => document.getElementById('about').scrollIntoView()}>Learn more <span>&#9660;</span></button>
        </div>
    );
}

export default Hero