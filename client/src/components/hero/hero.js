import React, { Component } from 'react';
import './hero.scss';
import Login from './login/login';
import SignUp from './signUp/signUp';

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this)

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

    return <div className="hero">
        <div className="hero__landing-page">
          <div className="hero__content">
            <div className="hero__logo">
              <img className="hero__icon" src="/assets/icons/logo/logo_transparent.png" alt="logo" />
            </div>
            <div className="hero__forms">
              <Login />
              <SignUp handleClose={this.handleClose} isOpen={isOpen} />
              <button className="hero__signUpBtn" onClick={this.handleClose}>
                Sign Up
              </button>
            </div>
          </div>
          <a className="hero__learn" href="#mission">
            Learn More
          </a>
        </div>
        <div id="mission" className="hero__mission">
          <div className="hero__missionStatement">
            <p>mission</p>
          </div>
        </div>
      </div>;
  }
}
