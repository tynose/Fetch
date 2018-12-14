import React, { Component } from 'react';
import './home.scss';
import Login from './login/login';
import SignUp from './signUp/signUp';
import ContactForm from './contactForm/contactForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <h3 className="home__missionStatementText">
              <q>
                {" "}
                Here at Fetch we strive to connect all of your pets
                essentials records to those who may need them{" "}
              </q>
            </h3>
          </div>
        </div>
        <footer className="home__footer">
          <div className="home__footerContent">
            <div className="home__footerContactIcons">
              <div className="home__contact">
                <FontAwesomeIcon className="home__footerIcons" icon="map-pin" />
                <h4>123 King St. West</h4>
              </div>
              <div className="home__contact">
                <FontAwesomeIcon className="home__footerIcons" icon="phone" />
                <h4>705-717-1240</h4>
              </div>
              <div className="home__contact">
                <FontAwesomeIcon className="home__footerIcons" icon="envelope" />
                <h4>TylerNoseworthy21@gmail.com</h4>
              </div>
            </div>
            <ContactForm />
          </div>
          <small className="home__copyright">
            &copy; Copyright 2018, Fetch
          </small>
        </footer>
      </div>;
  }
}
