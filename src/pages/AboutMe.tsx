import * as React from "react";
import {styled} from "@mui/material";
import twitterIcon from './../assets/twitter.svg';
import githubIcon from './../assets/github.svg';
import linkedinIcon from './../assets/linkedin.png';
import instagramIcon from './../assets/Instagram.png';
import {Typography} from "@material-ui/core";
import {Typewriter} from "../components/Typewritter";

const StyledAboutMe = styled('div')(() => ({

    height: '100vh',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    'h1': {
        color: '#ff9900'
    },

    'p': {
        color: 'ghostwhite'
    },

    '.highlight-section': {
        width: '50vw',
        height: '50vh',
        backgroundColor: 'rgba(250,250,250, 0.1)',
        padding: '10px 40px 10px 40px',
        // marginBottom: '50px',
        textAlign: 'center',

        borderTop: '10px solid #ff9900',
        borderBottom: '6px solid #ff9900',
        borderLeft: '2px solid #ff9900',
        borderRight: '1px solid #ff9900',
        borderRadius: '50px',


        'ul': {
            margin: 'auto',
            marginLeft: '-2%',
            width: '90%',

            paddingTop: '60px',
            paddingBottom: '10px',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

        },

        'a': {
            color: '#fffb88',
            textDecoration: 'none',
            display: 'flex',

            'img': {
                width: '25px',
                paddingRight: '3px'
            }

        }
    },

    '.footer': {
        paddingBottom: '200px',
    }
}));

const AboutMe = () => {

    return <StyledAboutMe>

        <Typewriter
            sentences={[
                "I am the creator of this",
                "I don't hate programming",
                "I lied. ...",
            ]}
            speed={150}

        />

        <div className='highlight-section'>
            <Typography variant={"h1"}>
                Name surname
            </Typography>
            <Typography variant={"body1"}>
                A Software Engineer of 4 years of experience, passionate about applying high-quality coding
                practices. My commitment lies in developing elegant and sustainable solutions, while prioritizing clean,
                modular code structures. I can foster open and effective communication within cross-functional teams.
                My drive for excellence extends to my willingness to continuously learn and adapt to diverse projects.
            </Typography>

            <div className='contact-info'>
                <ul>
                    <li><a href='https://twitter.com/stefiHB'>
                        <span> <img src={twitterIcon}/> </span>
                        Twitter
                    </a></li>
                    <li><a href='https://www.linkedin.com/in/stephane-kassinopoulou-878138a3/'>
                        <span> <img src={linkedinIcon}/> </span>
                        LinkedIn

                    </a></li>
                    <li><a href='https://github.com/stefiHB'>
                        <span> <img src={githubIcon}/> </span>
                        GitHub

                    </a></li>
                    <li><a href='https://www.instagram.com/es_kassi/'>
                        <span> <img src={instagramIcon}/> </span>
                        Instagram

                    </a></li>
                </ul>
            </div>
        </div>
        <div className='footer'></div>

    </StyledAboutMe>

};

export default AboutMe;
