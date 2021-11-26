import { Link } from "react-router-dom";
import  './Projects.css'
const Projects = () => {

    return (

        <div className="content">
            <section className="grid-container">
                <h1>Projects</h1>
                <ul className="projects">
                    <li><Link to='/es-kassi/projects/tictactoe'>Tic Tac Toe</Link></li>

                </ul>
            </section>


        </div>
    );
}

export default Projects;
