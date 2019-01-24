import React, { Component } from 'react';
import './timelinePost.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";

export default class TimelinePost extends Component {
  constructor(props) {
    super(props);

    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard() {
    const init = {
      method: "DELETE"
    }
    fetch(`/timelinecard/${this.props.id}/delete`, init)
      .then(() => this.props.getData())
      .catch(err => {
        console.log(err);
      });
  }
  render() {    
        
    return <div className="timelinePost">
        <FontAwesomeIcon className="timelinePost__close-icon" icon="times" onClick={() => this.deleteCard()}/>
        <div className="timelinePost__avator">
          <img className="timelinePost__image" src="/assets/images/profile-picture.jpg" alt="profile" />
        </div>
        <div className="timelinePost__content">
          <span className="timelinePost__event">{this.props.event}</span>
          <span className="timelinePost__date">
            <Moment fromNow>
              {this.props.date_created}
            </Moment>
          </span>
          <p className="timelinePost__details">{this.props.details}</p>
        </div>
      </div>;
  }
}
