import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/portfolio-project" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/portfolio" component={Home} />
          <Route path="/contacts" component={Home} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
