import image from './../assets/404-page-not-found.png';
import {styled} from "@mui/material";

const NotFoundWrapper = styled('div')(() => ({

    paddingTop: '70px',

    'header' : {
        justifyContent: 'center',
        background: 'linear-gradient(45deg, rgba(145, 152, 229, 0.15), rgba(230, 100, 101, 0.2))',
        maxWidth: '70vw',
        margin: 'auto',
        borderRadius: '20px',
        padding: '30px 10px 50px 10px',

        'h1': {
            fontSize: '6vh',
            marginBottom: '10px',
            color: '#ff9900'
        },

        'p': {
           maxWidth: '60vw',
           margin: 'auto',
           textAlign: 'justify',
            color: '#ceb471'
        }
    },

    'img' : {
        position: 'relative',
        top: '-90px',
        right: '-250px',
        width: '200px'
    }

}))



const NotFound = () => {


    return (
        <NotFoundWrapper>
            <header >
                <h1> 404 Not Found</h1>
                <p>
                    I cannot smell my fingers to guess what you are looking for within this path,
                    but it is possible you forgot to add the GLORIOUS '/es-kassi/' in your path.
                    You are welcome :)
                </p>
            </header>
            <img src={image} alt="Not-found logo"/>
        </NotFoundWrapper>
    )
}

export default NotFound;
