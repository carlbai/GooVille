import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Add from 'material-ui/svg-icons/content/add';

class Follow extends Component {

  constructor(props) {
    super(props);
    this.className = props.className ? props.className : '';
  }

  render() {
    return (
      <div className={this.className}>
        <FlatButton label="Follow" icon={<Add />} backgroundColor="#73ED19" hoverColor="#56B012"/>
      </div>
    );
  }
}

export default Follow;