import classes from './Quote.module.css'

const Quote = () => {

    return (
        <>
            <h4>Quote of the day</h4>
            <p className={classes.quote}> &ldquo; If you are evil, you won't feel the evilness &rdquo;</p>
            <p className={classes.author}>~ Anonymous</p>
        </>
    )
}

export default Quote;
