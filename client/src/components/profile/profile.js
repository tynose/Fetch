import React, { Component } from 'react';
import './profile.scss';
import Nav from '../nav/nav';
import Details from './details/details';
import Records from './records/records';
import TimelineCards from './timelineCards/timelineCards';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.getTimelineCards = this.getTimelineCards.bind(this);

    this.state = {
      isLoading: true,
      details: {},
      record: {},
      timeline_card: {},
      userInfo: {},
    };
  }

  componentDidMount() {
    this.getTimelineCards();
  }

  getTimelineCards() {
    const init = {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch('http://localhost:8080/profile/me', init)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          userInfo: data,
          details: data.details,
          record: data.record,
          timeline_card: data.timeline_card,
          isLoading: false
        });
      })
  }   

  handleClose() {
    this.setState((prevState) => {
      return { detailsFormOpen: !prevState.detailsFormOpen };
    });
  }

  render() {
    const { details, record, timeline_card, userInfo } = this.state;
  
    return <div className="profile">
        <div className="profile__backgroundPhoto">
          <Nav />
          <Details details={details} />
        </div>
        <div className="profile__mainContent">
          <Records userInfo={userInfo} record={record} />
          <TimelineCards getTimelineCards={this.getTimelineCards} userInfo={userInfo} timeline_card={timeline_card} />
        </div>
      </div>;
  }
}
