import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './profile/profile';
import Home from './home/home';
import VetsForm from './vetsForm/vetsForm';
import './App.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faKey, faEnvelope, faBone, faTimes, faEdit, faPhone, faMapPin, faComment } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faKey, faEnvelope, faBone, faTimes, faEdit, faPhone, faMapPin, faComment);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/profile'} exact component={Profile} />

            <Route path={'/vetsform/:id'} render={(props) => { return <VetsForm {...props} /> }} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
