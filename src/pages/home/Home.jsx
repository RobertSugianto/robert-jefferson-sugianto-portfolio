import './home.css'
import Hero from "../../components/hero/Hero.jsx";
import About from "../../components/about/About.jsx";
import ProjectSummary from "../../components/projectsSummary/ProjectsSummary.jsx";


function Home() {

    return(
        <div className='home'>
            <Hero />
            <About />
            <ProjectSummary />
        </div>
    );
}

export default Home