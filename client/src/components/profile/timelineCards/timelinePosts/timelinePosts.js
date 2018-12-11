import React, { Component } from 'react';
import "./timelinePosts.scss";
import TimelinePost from '../timelinePost/timelinePost';

export default class timelinePosts extends Component {
  render() {
    const { timeline_card } = this.props;
        
    return <div className="timelinePosts">
        <h5 className="timelinePosts__header">Posts</h5>
        
        {timeline_card.length && timeline_card ? timeline_card.map(
            (post, index) => (
              <TimelinePost
                key={index}
                {...timeline_card}
                id={post._id}
                date_created={post.date_created}
                event={post.event}
                details={post.details}
                profile={post.profile}
              />
            )
          ) : 
          <div className="timelinePosts__noPosts">
            <h4>add some posts</h4>
          </div>}
      </div>;
  }
}