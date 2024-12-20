import { Link } from "react-router-dom";
import {styled} from "@mui/material";


const ProjectWrapper = styled('div')(() => ({
    paddingLeft: '7vw',
    paddingRight: '7vw',
    textAlign: 'left',
    fontSize: 'calc(10px + 2vmin)',

    'h1': {
        color: '#ff9900'
    },

    'ul': {
        listStyle: 'none'
    },
    'a' : {
        color: 'ghostwhite',
        textDecoration: 'none'
    }
}))

const Projects = () => {

    return (

        <ProjectWrapper>
            <section>
                <h1>Projects</h1>
                <ul>
                    <li><Link to='/projects/tictactoe'>Tic Tac Toe</Link></li>
                </ul>
            </section>
        </ProjectWrapper>
    );
}

export default Projects;
