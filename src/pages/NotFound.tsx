import './NotFound.css'
import image from './../assets/404-page-not-found.png';
const NotFound = () => {


    return (
        <div>

            <header className="container">
                <h1> 404 Not Found</h1>
                <p>
                    I cannot smell my fingers to guess what you are looking for within this path,
                    but it is possible you forgot to add the GLORIOUS '/es-kassi/' in your path.
                    You are welcome :)
                </p>
            </header>
            <img src={image} alt="Not-found logo"/>

        </div>

    )
}

export default NotFound;
