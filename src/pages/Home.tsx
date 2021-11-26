import React from 'react';
import logo from './../assets/gear.svg';
import './Home.css'
import Quote from "../components/Quote";

const Home = () => {
    return(
        <div className="content">
            <section className="grid-container">

                <h1>Greetings, fella.</h1>

                <Quote />

                <div className="blogs">
                    <div className="blog">
                        <h5>Title 1</h5>
                        <p>
                            A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Varius vel pharetra vel turpis nunc eget. Mi proin sed libero enim sed faucibus turpis in eu. Convallis posuere morbi leo urna molestie at. Viverra vitae congue eu consequat. Tortor condimentum lacinia quis vel eros. Gravida rutrum quisque non tellus. Orci a scelerisque purus semper eget duis at tellus at. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Ultricies tristique nulla aliquet enim. Morbi tristique senectus et netus et. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit amet. Pharetra magna ac placerat vestibulum. At risus viverra adipiscing at. Vel pharetra vel turpis nunc.

                        </p>
                    </div>
                    <div className=" blog">
                        <h5>Title 12</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet sed. Mauris pharetra et ultrices neque ornare aenean euismod. Non consectetur a erat nam at lectus urna duis. Elementum pulvinar etiam non quam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. At volutpat diam ut venenatis tellus in. Nisi est sit amet facilisis magna. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Fringilla urna porttitor rhoncus dolor purus non enim. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sit amet facilisis magna etiam tempor orci eu lobortis. Viverra ipsum nunc aliquet bibendum enim facilisis. Magna sit amet purus gravida.

                        </p>
                    </div>
                    <div className="blog">
                        <h5>Title 3</h5>
                        <p>
                            Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Aenean euismod elementum nisi quis. Mollis nunc sed id semper risus in hendrerit. Arcu cursus euismod quis viverra nibh cras pulvinar. Tincidunt augue interdum velit euismod in pellentesque massa. Aenean pharetra magna ac placerat vestibulum. Dolor purus non enim praesent elementum. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Vulputate eu scelerisque felis imperdiet. Mi sit amet mauris commodo. Condimentum id venenatis a condimentum vitae sapien. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Felis eget velit aliquet sagittis id consectetur. Orci nulla pellentesque dignissim enim sit amet venenatis. Suspendisse sed nisi lacus sed. Mattis aliquam faucibus purus in. Nisi est sit amet facilisis magna etiam tempor orci.
                        </p>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Home;
