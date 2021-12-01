import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import TicTacToe from "./tic-tac-toe/pages/TicTacToe";

function App() {




  return (
      <div>
          <main>
              <Switch>

                  <Route path="/es-kassi" exact>
                      <Redirect to={'/es-kassi/home'} />
                  </Route>
                  <Route path="/es-kassi/notfound" exact>
                      <MainHeader />
                      <NotFound />
                  </Route>
                  <Route path="/es-kassi/home" >
                      <MainHeader />
                      <Home/>
                  </Route>
                  <Route path="/es-kassi/projects" exact>
                      <MainHeader />
                      <Projects/>
                  </Route>

                  <Route path='/es-kassi/projects/tictactoe'>
                      <TicTacToe />
                  </Route>
                  <Route path="/">
                      <Redirect to={'/es-kassi/notfound'} />
                  </Route>

              </Switch>
          </main>
      </div>
  );
}

export default App;
