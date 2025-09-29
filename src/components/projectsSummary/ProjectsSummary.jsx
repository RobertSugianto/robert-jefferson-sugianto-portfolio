import "./projectSummary.css"
import data from '../../projects.json'

function ProjectSummary() {

    return(
        <div className="project-summary" id="project-summary">
            <div className="top-tree-project">
                {data.map((item, idx) => idx < 3 && (
                    <div key={idx} className="project-card" onClick={() => {window.open(item.link, "_blank")}}>
                        <img src={item.Image} alt={item.Title} />
                        <div className="card-desc">
                            <h4>{item.Title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="see-more"
            >
                See More
            </button>
        </div>
    );
}

export default ProjectSummary