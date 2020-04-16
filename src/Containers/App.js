import React, { Component } from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import NavigationBar from './NavigationBar.js';
import Home from '../Components/Home.js';
import Experience from '../Components/Experience';
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contacts" component={Contact} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
