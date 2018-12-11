import React, { Component } from 'react';
import './timelineCards.scss';
import TimelineCardForm from './timelineCardForm/timelineCardForm';
import TimelinePosts from './timelinePosts/timelinePosts';

export default class TimelineCards extends Component {

  render() {        
    return <div className="timelineCard">
        <div className="timelineCard__content">
          <TimelineCardForm {...this.props} />
          <TimelinePosts  {...this.props}/>
        </div>
      </div>;
  }
}

