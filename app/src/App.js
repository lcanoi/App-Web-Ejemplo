import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from "react"
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Libros from './pages/Libros';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/libros" component={Libros}/>
        <Route component={Home}/>

      </Switch>
    </Router>
  );
}

export default App;
