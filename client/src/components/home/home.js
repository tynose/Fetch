import React, { Component } from 'react';
import './home.scss';
import Login from './login/login';
import SignUp from './signUp/signUp';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      isOpen: false,
    }
  }

  handleClose() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    const { isOpen } = this.state;

    return <div className="home">
        <div className="home__landing-page">
          <div className="home__content">
            <div className="home__logo">
              <img className="home__icon" src="/assets/icons/logo/logo_transparent.png" alt="logo" />
            </div>
            <div className="home__forms">
              <Login isloggedIn={this.state.isloggedIn} />
              <SignUp handleClose={this.handleClose} isOpen={isOpen} />
              <button className="home__signUpBtn" onClick={this.handleClose}>
                Sign Up
              </button>
            </div>
          </div>
          <a className="home__learn" href="#mission">
            Learn More
          </a>
        </div>
        <div id="mission" className="home__mission">
          <div className="home__missionStatement">
            <p>mission</p>
          </div>
        </div>
      </div>;
  }
}
