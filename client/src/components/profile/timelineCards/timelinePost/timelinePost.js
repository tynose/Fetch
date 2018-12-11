import React, { Component } from 'react';
import './timelinePost.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TimelinePost extends Component {

  render() {
    return (
      <div className="timelinePost">
        <FontAwesomeIcon className="timelinePost__close-icon" icon="times" />
        <div className="timelinePost__avator">
          <img className="timelinePost__image" src="/assets/images/profile-picture.jpg" alt="profile" />
        </div>
        <div className="timelinePost__content">
          <span className="timelinePost__event">{this.props.event}</span>
          <span className="timelinePost__date">{this.props.date_created}</span>
          <p className="timelinePost__details">
           {this.props.details}
          </p>
        </div>
      </div>
    )
  }
}
