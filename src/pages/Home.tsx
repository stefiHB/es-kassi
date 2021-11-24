import React from 'react';
import logo from './../logo.png';
import './Home.css'
import Quote from "../components/Quote";

const Home = () => {
    return(
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Fun stuff coming soon... #not
                </p>
                <Quote />
            </header>

        </div>
    );
}

export default Home;
