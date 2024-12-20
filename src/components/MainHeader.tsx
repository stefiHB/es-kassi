import { NavLink } from "react-router-dom";
import React from "react";
import {styled} from "@mui/material";


const MainHeaderWrapper = styled('div')(() => ({

    width: '100vw',
    height: '100px',

    '#extraSpace': {
        minHeight: '30px'
    },

    'nav': {
        display: 'flex',
        top: 0,
        position: 'sticky',
        zIndex: 1,
        height: '50px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
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
        color: 'rgba(255,153,0,0.91)'
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
        </MainHeaderWrapper>
    )
}

export default MainHeader

/*
div.temporaryLogo {
    z-index: 10;
    position: absolute;
    right: 40px;
    top: 220px;
    width: 150px;
    height: 100px;
    color: red;
}

div.temporaryLogo p {
    padding-top: 20px;
    color: rgba(196, 197, 201, 0.47);
}


div.temporaryLogo svg {
    pointer-events: none;
    fill: #c4c5c9;
}

@media (prefers-reduced-motion: no-preference) {
    div.temporaryLogo svg {
        animation: gear-spin infinite 5s cubic-bezier(0.465, 0.183, 0.153, 0.946);
    }
}

@media (prefers-reduced-motion: no-preference) {
    div.temporaryLogo p {
        animation: text-swing infinite 3s ease-in-out;
    }
}



@keyframes text-swing {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes gear-spin {
    0% {
        transform: rotate(0deg);
    }
    16% {
        transform: rotate(60deg);
    }
    32% {
        transform: rotate(120deg);
    }
    49% {
        transform: rotate(180deg);
    }
    66% {
        transform: rotate(240deg);
    }
    82% {
        transform: rotate(300deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

 */
