import React, {Component} from 'react';
import {Link} from 'react-router';
import './Home.css';
import * as request from "superagent";

// Youtube thumbnails: http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
function Thumbnail(props) {
    return(
        <li className="thumbnail">
            <Link to={"/watch/" + props.videoid}>
                <img src={"https://img.youtube.com/vi/" + props.videoid + "/default.jpg"} alt="title of video here"/>
            </Link>
        </li> 
    );
}

class ThumbnailList extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({videos: nextProps.videos});
        }
    }

    render() {
        return (
            <ul className="home-thumbnailList">
                {this.state.videos.map((video) =>
                    <Thumbnail key={video.id} url={"https://www.youtube.com/watch?" + video.videoid} videoid={video.videoid} />
                )}
            </ul>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {videolist: []};
    }

    componentDidMount() {
        var self = this;
        request
            .get('/videolist')
            .end(function(err, res) {
                if(err) {
                    console.log('could not retrieve video list');
                } else {
                    self.setState({videolist: JSON.parse(res.text)});
                }
            });
    }

    render () {
        return(
            <div>
                <ThumbnailList videos={this.state.videolist} />
            </div>
        );
    }
}

export default Home;
