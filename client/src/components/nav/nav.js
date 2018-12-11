import React, { Component } from 'react';
import "./nav.scss";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to={"/"}>
          <img className="nav__icon" src="/assets/icons/logo/logo_transparent_white.png" alt="logo" />
        </Link>
      </nav>
    )
  }
}
