import React, {Component} from 'react';
import './Watch.css';
import Description from './Description.js';
import Comments from './Comments.js';
import Thumbnail from './Thumbnail.js';
import * as request from 'superagent';

const urlTemplate = 'https://youtube.com/embed/';

class Watch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        videos: [],
        url: urlTemplate + props.params.videoID
      };
    }

    getVideo(videoId) {
      return request.post('/getVideo')
        .send({ videoid: videoId});
    }

    componentWillReceiveProps(nextProps) {
      var self = this;
      var newVideoId = nextProps.params.videoID;
      
      if ((nextProps && this.props) && (newVideoId && this.props.params.videoID) && (newVideoId !== this.props.params.videoID)) {
        this.getVideo(newVideoId).then(function(res) {
          self.setState({
            description: res.body,
            url: urlTemplate + newVideoId
          })
        });
      }

    }

    componentDidMount() {
    var self = this;
    this.serviceRequest = 
      this.getVideo(this.props.params.videoID).then(function(res) {
         self.setState({
            description: res.body
          });
        })

    request.get('/videoList').then(function(res) {
      self.setState({
        videos: JSON.parse(res.text)
      });
    });

    }

    componentWillUnMount() {
      //Abort service call if component is removed
      this.serviceRequest.abort();
    }

    render() {
        return(
            <div className="watch-container"> 
              <div className="video-player-wrapper">
                <div className="player-container">
                  <iframe width="960px" height="540px" src={this.state.url} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
              <div className="video-content-wrapper">
                 <Description description={this.state.description}/>
                <Comments />
              </div>
              <div className="related-videos-wrapper">
                <ul>
                  {this.state.videos.map((video) => 
                      <div className="related-video-wrapper" key={video.id}><Thumbnail className="related-video-thumbnail" key={video.id} url={"https://www.youtube.com/watch?" + video.videoid} videoid={video.videoid} /><div className="related-video-content"><h3>{video.title}</h3><p className="related-creator">by {video.creator}</p></div></div>
                  )}
                </ul>
              </div>
            </div>
        );
    }
}

export default Watch;