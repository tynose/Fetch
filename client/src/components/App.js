import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './profile/profile';
import Hero from './hero/hero';
import VetsInArea from './vetsInArea/vetsInArea';
import './App.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faKey, faEnvelope, faBone } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faKey, faEnvelope, faBone);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={'/hero'} exact component={Hero} />
            <Route path={'/profile'} exact component={Profile} />
            <Route path={'/vetsInArea'} exact component={VetsInArea} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
