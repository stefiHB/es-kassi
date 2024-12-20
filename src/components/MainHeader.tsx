import { NavLink } from "react-router-dom";
import React from "react";
import {styled} from "@mui/material";


const MainHeaderWrapper = styled('div')(() => ({

    width: '100vw',
    height: '100px',
    background: 'linear-gradient(180deg, #061a2c, #09223a,  #061a2c)',


    'nav': {
        display: 'flex',
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    'ul': {
        listStyle: 'none',
        display: 'flex'
    },

    'li': {
        margin: '0 1rem',
        width: '5rem'
    },

    'a': {
        color: 'ghostwhite',
        textDecoration: 'none'
    },

    'a:active, a.active': {
        color: 'ghostwhite',
        'paddingBottom': '0.25rem',
        'borderBottom': '2px solid #ff9900'
    },

    'a:hover': {
        color: '#ff9900'
    },

    '#signature': {
        color: '#ff9900',
        'fontSize': '1.5rem',
        'fontFamily': "Menlo",
        'paddingLeft': '5vw',
        'marginRight': '1rem',
    },
}))

const MainHeader = () => {

    return (
        <MainHeaderWrapper>
            <div id='extraSpace'/>

            <nav>
                <div><h5 id="signature">es_kassi</h5></div>
                <ul>
                    <li><NavLink activeClassName={'active'} to="/home">Home</NavLink></li>
                    <li><NavLink activeClassName={'active'} to="/projects">Projects</NavLink></li>
                    <li><NavLink activeClassName={'active'} to="/my-skills">Skills</NavLink></li>



                </ul>
            </nav>
            {/*<div id="fadingDiv">*/}
            {/*    <img src={svgImg} alt="404-logo"/>*/}
            {/*</div>*/}
        </MainHeaderWrapper>
    )
}

export default MainHeader

