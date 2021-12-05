import * as React from "react";
import {styled} from "@mui/material";
import twitterIcon from './../assets/twitter.svg';
import githubIcon from './../assets/github.svg';
import linkedinIcon from './../assets/linkedin.png';
import instagramIcon from './../assets/Instagram.png';

const StyledAboutMe = styled('div')(() => ({

    paddingTop: '30px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    'h1': {
        color: '#ff9900'
    },

    'p' :{
      color: 'ghostwhite'
    },

    '.highlight-section' : {
        width: '550px',
        backgroundColor: 'rgba(250,250,250, 0.1)',
        padding: '10px 40px 10px 40px',
        marginBottom: '50px',
        textAlign: 'center',

        borderTop: '10px solid #ff9900',
        borderBottom: '6px solid #ff9900',
        borderLeft: '2px solid #ff9900',
        borderRight: '1px solid #ff9900',
        borderRadius: '50px',


        'ul': {
            // margin: 'auto',
            width: '50vw',

            paddingTop: '60px',
            paddingBottom: '10px',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

        },

        'a' : {
            color: '#fffb88',
            textDecoration: 'none',
            display: 'flex',

            'img': {
                width: '25px',
                paddingRight: '3px'
            }

        }
    },

    '.detailed-info': {
        width: '600px',
        textAlign: 'justify',

        'p': {
            paddingBottom: '15px'
        }
    },

    '.footer': {
        paddingBottom: '200px',

    }

}));

const AboutMe = () => {

    return <StyledAboutMe>

        <div className='highlight-section'>
            <h1>Es Kassi?</h1>
            <p>
                I'm a full time coder that tries to make a custom blog page
                with zero experience in journalism.
            </p>
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

        <div className='detailed-info'>
            <h1>Motive</h1>
            <p>
                After a long journey inside my head, I came in conclusion
                that I would like to practice a certain set of skills.
                Those skills are journalism, graphic design and styling coding skills.

                But as a normal human being that I am, procrastination is my best friend ❤️.
            </p>

            <p>
                And what's a better motive to accomplish your goals than throwing yourself out there
                and making yourself accountable to the public?

            </p>
            <p>
                So, this blog page will be a great way to practice all of them in the eyes of the public.
                Hopefully, I will inspire you to follow your dreams without thinking too much about what the
                world says, by seeing my marvelous, horrifying, slow or idiotic process of this blog.
            </p>
            <p>

                I am rooting for anyone who tries to accomplish anything. 💪 💪 💪
            </p>

        </div>
        <div className='footer'></div>

    </StyledAboutMe>

};

export default AboutMe;
