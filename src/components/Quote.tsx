import {styled} from "@mui/material";


const StyledQuote = styled('div')(() => ({

    color: 'rgba(197, 160, 124, 0.93)',
    textAlign: 'left',

    '#quote': {
        fontStyle: 'italic',
        color: '#f6b455',
        fontSize: '20px',
        // background: '-webkit-linear-gradient(0deg, #f6b455 , #eee , #f6b455 , #eee, #f6b455)',
        // 'WebkitBackgroundClip': 'text',
        // 'WebkitTextFillColor': 'transparent',
    },

    '#author': {
        fontSize: '20px',
        color: '#f6b455'
    }


}))

const Quote = () => {

    return (
        // <div className={classes.container}>
        //     <h4>Quote of the day</h4>
        //     <p className={classes.quote}> &ldquo; If you are evil, you won't feel the evilness &rdquo;</p>
        //     <p className={classes.author}>~ Anonymous</p>
        // </div>

        <StyledQuote >
            <h4>Quote of the day</h4>
            <p id="quote"> &ldquo;Computers have lots of memory but no imagination &rdquo;</p>
            <p id="author">~ Bill Gates</p>
        </StyledQuote>
    )
}

export default Quote;
