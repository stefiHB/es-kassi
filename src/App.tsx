import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import TicTacToe from "./tic-tac-toe/pages/TicTacToe";
import AboutMe from "./pages/AboutMe";

function App() {




  return (
      <div>
          <main>
              <Switch>

                  <Route path="/" exact>
                      <Redirect to={'/home'} />
                  </Route>
                  <Route path="/notfound" exact>
                      <MainHeader />
                      <NotFound />
                  </Route>
                  <Route path="/home" >
                      <MainHeader />
                      <Home/>
                  </Route>
                  <Route path="/projects" exact>
                      <MainHeader />
                      <Projects/>
                  </Route>
                  <Route path="/about-me" exact>
                      <MainHeader />
                      <AboutMe/>
                  </Route>

                  <Route path='/projects/tictactoe'>
                      <TicTacToe />
                  </Route>
                  <Route path="/">
                      <Redirect to={'/notfound'} />
                  </Route>

              </Switch>
          </main>
      </div>
  );
}

export default App;
