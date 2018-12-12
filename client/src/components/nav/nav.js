import React, { Component } from 'react';
import "./nav.scss";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return <nav className="nav">
        <Link to={"/"} onClick={() => localStorage.clear()}>
          <img className="nav__icon" src="/assets/icons/logo/logo_transparent_white.png" alt="logo" />
        </Link>
        <div className="nav__linksContainer">
          <Link className="nav__links" to={"/"} onClick={() => localStorage.clear()}>
            <h5 className="nav__link">Log Out</h5>
          </Link>
          <Link className="nav__links" to={"/"} onClick={() => localStorage.clear()}>
            <h5 className="nav__link">Home</h5>
          </Link>
        </div>
      </nav>;
  }
}
