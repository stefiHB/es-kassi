import {styled} from "@mui/material";
import {keyframes} from "@emotion/react";


const bounce = keyframes `
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY( var(--bounce-offset) );
    }
`

const StyledPlaceholder = styled('div')(() => ({

    width: '100%',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',

    '.container' : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    '.bounce': {
        background: 'red',
        height: '50px',
        width: '50px',
        borderRadius: '50px',
        margin: '5px',

    },

    '.container .bounce': {
        animation: `${bounce} 350ms alternate infinite cubic-bezier(.2, .65, .6, 1)`,
        animationDelay: 'var(--bounce-delay)'
    },

    '.container:hover .bounce': {
        animation: `${bounce} 550ms alternate infinite cubic-bezier(.2, .65, .6, 1)`,
        animationDelay: 'var(--bounce-delay)',
        background: 'darkred'
    },

    '.bounce.one': {
        '--bounce-offset': '-40px',
        '--bounce-delay': '200ms'
    },
    '.bounce.two': {
        '--bounce-offset': '-40px',
        '--bounce-delay': '350ms'

    },
    '.bounce.three': {
        '--bounce-offset': '-40px',
        '--bounce-delay': '550ms'
    },

}));

const Placeholder = () => {

    return <StyledPlaceholder>
        <div className='container'>
            <div className='bounce one'></div>
            <div className='bounce two'></div>
            <div className='bounce three'></div>
        </div>
    </StyledPlaceholder>
}

export default Placeholder;
