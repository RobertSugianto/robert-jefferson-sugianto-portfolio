import './projects.css'
import data from '../../projects.json'

function Projects() {

    return(
        <div className="projects">
            {data.map((item, idx) => (
                    <div key={idx} className="project-cards" onClick={() => {window.open(item.link, "_blank")}}>
                        <img src={item.Image} alt={item.Title} />
                        <div className="cards-desc">
                            <h4>{item.Title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Projects