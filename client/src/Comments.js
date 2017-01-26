import React, {Component} from 'react';
import Avatar from './Avatar.js';
import FlatButton from 'material-ui/FlatButton';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';
import './Comments.css';

class Comments extends Component {

  render() {
    return (
      <div>
        <p>36,000 Total Comments</p>
        <div className="comment-wrapper">
          <Avatar className="description-avatar"/>
          <div className="comment-content-wrapper">
            <div className="comment-details">
              <p>Commentator | Date Posted</p>
            </div>
            <p className="comment-content">This is my comment</p>
            <FlatButton icon={<ThumbsUp />}/>
            <FlatButton icon={<ThumbsDown />}/>
          </div>
        </div>
      </div>
    );
  }

}

export default Comments;