import React, { Component } from 'react';

class FormatDate extends Component {

  render() {
    if (this.props.date) {
      var formattedDate = new Date(this.props.date);
      formattedDate = formattedDate.toLocaleDateString();
      return (
        <span>{formattedDate}</span>
      )
    } else {
      return (
        <span>0/0/0000</span>
      )
    }
  }

}

export default FormatDate;