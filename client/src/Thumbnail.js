import React, {Component} from 'react';
import {Link} from 'react-router';

// Youtube thumbnails: http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoid: props.videoid,
      className: props.className ? props.className : 'thumbnail'
    };
  }

  render() {
    return(
        <li className={this.state.className}>
            <Link to={"/watch/" + this.state.videoid}>
                <img src={"https://img.youtube.com/vi/" + this.state.videoid + "/default.jpg"} alt="title of video here"/>
            </Link>
        </li> 
    );
  }
}

export default Thumbnail;