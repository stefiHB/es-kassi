import { Link } from "react-router-dom";

const Projects = () => {

    return (

        <section>
            <h1>Projects</h1>
            <ul>
                <li><Link to='/es-kassi/projects/1'>Tetris Game</Link></li>
                <li><Link to='/es-kassi/projects/2'>Squid Game</Link></li>
                <li><Link to='/es-kassi/projects/3'>Animation Page</Link></li>
            </ul>

        </section>
    );
}

export default Projects;
