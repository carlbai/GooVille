import React, {Component} from 'react';
import './Watch.css';
import Description from './Description.js';
import Comments from './Comments.js';
import Thumbnail from './Thumbnail.js';

class Watch extends Component {
    constructor(props) {
      super(props);
      console.log(props.params.videoID);
      this.URL = 'https://youtube.com/embed/' + props.params.videoID;
      this.state = {videos: [
        {
          id:"7z54Ybs0DZg",
          videoid: "7z54Ybs0DZg",
          title: "Animation",
          creator: "dillongoo"
        },
        {
          id: "pmCi7tqrne4",
          videoid: "pmCi7tqrne4",
          title: "Animation",
          creator: "dillongoo"
        },
        {
          id: "EFig-bHcBLE",
          videoid: "EFig-bHcBLE",
          title: "Animation",
          creator: "dillongoo"
        },
        {
          id: "UtoPxEFeDrE",
          videoid: "UtoPxEFeDrE",
          title: "Animation",
          creator: "dillongoo"
        },
        {
          id: "Klq8yYV5cLE",
          videoid: "Klq8yYV5cLE",
          title: "Animation",
          creator: "dillongoo"
        },
        {
          id: "tRf4S_ArF_A",
          videoid: "tRf4S_ArF_A",
          title: "Animation",
          creator: "dillongoo"
        }
      ]};
    }

    render() {
        return(
            <div className="watch-container"> 
              <div className="video-player-wrapper">
                <div className="player-container">
                  <iframe width="960px" height="540px" src={this.URL} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
              <div className="video-content-wrapper">
                <Description />
                <Comments />
              </div>
              <div className="related-videos-wrapper">
                <ul>
                  {this.state.videos.map((video) => 
                      <div className="related-video-wrapper"><Thumbnail className="related-video-thumbnail" key={video.id} url={"https://www.youtube.com/watch?" + video.videoid} videoid={video.videoid} /><div className="related-video-content"><h3>{video.title}</h3><p className="related-creator">by {video.creator}</p></div></div>
                  )}
                </ul>
              </div>
            </div>
        );
    }
}

export default Watch;