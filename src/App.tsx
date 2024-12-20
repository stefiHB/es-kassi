import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';

import MySkills from "./pages/MySkills";
import MainHeader from "./components/MainHeader";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import TicTacToe from "./tic-tac-toe/pages/TicTacToe";
import AboutMe from "./pages/AboutMe";

function App() {

  return (
      <div style={{width: '100vw', height: '100vh'}}>
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
                      <AboutMe/>
                  </Route>
                  <Route path="/projects" exact>
                      <MainHeader />
                      <Projects/>
                  </Route>
                  <Route path="/my-skills" exact>
                      <MainHeader />
                      <MySkills />
                  </Route>

                  <Route path='/projects/tictactoe'>
                      <TicTacToe />
                  </Route>
                  <Route path="/">
                      <MainHeader />
                      <Redirect to={'/notfound'} />
                  </Route>

              </Switch>
          </main>
      </div>
  );
}

export default App;
