import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Follow from './Follow.js';
import PatreonButton from './PatreonButton.js';
import FormatDate from './FormatDate.js';
import './Description.css';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Desktop  from 'material-ui/svg-icons/hardware/desktop-windows';

const styles = {
  svgIcons: {
    'verticalAlign': 'middle'
  },
  details: {
    'marginLeft': '10px'
  },
  descBox: {
    'max-height': '150px'
  }
};

class Description extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: {
        snippet: {
          title: '',
          channelTitle: '',
          publishedAt: '',
          description: ''
        },
        statistics: {
          viewCount: '',
          likeCount: ''
        }
      },
      expanded: false
    };

    this.showDescription = this.showDescription.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps !== this.props) {
      this.setState({
        description: nextProps.description
      });
    }
  }

  componentDidUpdate() {
    if (this.state.expanded) {
      this.refs['desc-hidden'].classList.remove('desc-hidden');
      this.refs['see-more'].classList.add('see-more-hidden');
    } else if (!this.state.expanded &&  this.refs['desc-hidden'] && !this.refs['desc-hidden'].classList.contains('desc-hidden')) {
      this.refs['desc-hidden'].classList.add('desc-hidden');
      this.refs['see-more'].classList.remove('see-more-hidden');
    }
  }

  showDescription() {
    var str = this.state.description.snippet.description.replace(/\n/gm,'<br>');
    return {__html: str};
  }

  toggleExpand() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <div>
        <h2> {this.state.description.snippet.title} </h2>
        <div className="description-wrapper">
          <div className="description-avatar-wrapper">
            <Avatar className="description-avatar"/>
            <div className="creator-wrapper">
              <div className="creator">{this.state.description.snippet.channelTitle} | <FormatDate date={this.state.description.snippet.publishedAt}/></div>
              <div>
                <Follow className="follow"/>
                <PatreonButton className="patreon"/>
              </div>
            </div>
          </div>
          <div className="description-stats">
            <div><Desktop style={styles.svgIcons}/><span className="icon-details">{this.state.description.statistics.viewCount} total views</span></div>
            <div><Favorite style={styles.svgIcons}/><span className="icon-details">{this.state.description.statistics.likeCount} total likes</span></div>
          </div>
        </div>
        <div className="description-content-wrapper">
          
            <p className="desc-box desc-hidden" ref="desc-hidden" dangerouslySetInnerHTML={this.showDescription()}/>
            <div className="see-more" ref="see-more" onClick={this.toggleExpand}>See More...</div>
          
        </div>
      </div>
    );
  }
}

export default Description;