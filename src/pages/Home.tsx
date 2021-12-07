import React from 'react';
import Quote from "../components/Quote";
import BlogList from "../components/BlogList";
import {styled} from "@mui/material";
import Placeholder from "../components/Placeholder";


const HomeWrapper = styled('div')(() => ({

    backgroundColor: '#061a2c',
    paddingLeft: '7vw',
    paddingRight: '7vw',
    textAlign: 'left',
    fontSize: `calc(10px + 2vmin)`,

    'h1': {
        color: '#ff9900'
    },

    'h5': {
        color: '#ceb471',
        fontWeight: 'bold',
        borderBottom: '2px solid #ff920f'
    },

    'p' : {
        fontSize: '19px',
        color: '#ceb471'
    },

    'section': {
        display: 'grid',
        grid: 'auto / 55vw',
        gridGap: '10px',
        padding: '10px',
        overflow: 'hidden'
    }


}))

const Home = () => {
    return(
        <HomeWrapper>
            <section>
                <h1>Greetings, fellas.</h1>
                <Quote />
                <Placeholder />
                <BlogList />
            </section>



        </HomeWrapper>
    );
}

export default Home;
