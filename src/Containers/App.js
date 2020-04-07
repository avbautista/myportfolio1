import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import CacheBuster from '../CacheBuster.js';
import NavigationBar from './NavigationBar.js';
import Home from '../Components/Home.js';
import Experience from '../Components/Experience';

function App() {
  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }

        return (
          <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
              <NavigationBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experience" component={Experience} />
                <Route path="/portfolio" component={Home} />
                <Route path="/contacts" component={Home} />
                <Route component={Home} />
              </Switch>
            </div>
          </Router>
        );
      }}
    </CacheBuster>
  );
}

export default App;
