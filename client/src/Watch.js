import React, {Component} from 'react';

class Watch extends Component {
    render() {
        return(
            <div> 
                <h2> Watch this video </h2>
                <p> {this.props.params.videoID} </p>
            </div>
        );
    }
}

export default Watch;
