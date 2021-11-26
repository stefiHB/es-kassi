import classes from './Quote.module.css'

const Quote = () => {

    return (
        // <div className={classes.container}>
        //     <h4>Quote of the day</h4>
        //     <p className={classes.quote}> &ldquo; If you are evil, you won't feel the evilness &rdquo;</p>
        //     <p className={classes.author}>~ Anonymous</p>
        // </div>

        <div className={classes.container}>
            <h4>Quote of the day</h4>
            <p className={classes.quote}> &ldquo;Computers have lots of memory but no imagination &rdquo;</p>
            <p className={classes.author}>~ Bill Gates</p>
        </div>
    )
}

export default Quote;
