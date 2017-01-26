import React, {Component} from 'react';

class Avatar extends Component {

  constructor(props) {
    super(props);
    this.className = props.className ? props.className : '';
  }

  render(className) {
    return (
      <div className={this.className}>
        <img width="100px" height="100px" src={require("../images/photo.jpg")} alt="Avatar Img"/>
      </div>
    );
  }
}

export default Avatar;