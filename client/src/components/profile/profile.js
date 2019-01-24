import React, { Component } from 'react';
import './profile.scss';
import Nav from '../nav/nav';
import Details from './details/details';
import Records from './records/records';
import TimelineCards from './timelineCards/timelineCards';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);

    this.state = {
      isLoading: true,
      details: [],
      record: [],
      timeline_card: [],
      userInfo: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const init = {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(' /profile/me', init)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          userInfo: data,
          details: data.details[0],
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
          <Details details={details} getData={this.getData} userInfo={userInfo} />
        </div>
        <div className="profile__mainContent">
          <Records userInfo={userInfo} record={record} />
          <TimelineCards getData={this.getData} details={details} userInfo={userInfo} timeline_card={timeline_card} />
        </div>
      </div>;
  }
}
