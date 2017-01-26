import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Money from 'material-ui/svg-icons/editor/monetization-on';

class PatreonButton extends Component {

  constructor(props) {
    super(props);
    this.className = props.className ? props.className : '';
  }

  render() {
    return (
      <div className={this.className}>
        <FlatButton label="Support on Patreon" icon={<Money />} backgroundColor="#E98146" hoverColor="#C16A3A"/>
      </div>
    );
  }
}

export default PatreonButton;