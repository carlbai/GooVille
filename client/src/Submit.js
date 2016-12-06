import React, { Component } from 'react';
import $ from 'jquery'; 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

const styles = {
  div:{
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%'
  },
  title: {
    margin: 10,
    padding: 10
  },
  iframe: {
    border: '2px solid #eeeeee'
  },
  preview:{
    flex: 1,
    height: '100%',
    margin: 10,
    padding: 10
  },
  submit:{
    height: 600,
    flex: 1,
    margin: 10,
    textAlign: 'center',
    borderLeft: '2px solid #eeeeee'
  },
  chip: {
    margin: 4
  },
  chipWrapper: {
    display: 'inline-block',
    width: '256px'
  }
};

const tagOptions = [
  {
    text:'Animation',
    value:'animation'
  }, {
    text:'Comedy',
    value:'comedy'
  }, {
    text:'Drama',
    value:'drama'
  }, {
    text:'Romance',
    value:'romance'
  }
];

class Submit extends Component {
    constructor(props) {
      super(props);
      //TODO: Use global user object
      this.user = {
        name: 'Test User'
      };
      this.state = {
        title: 'Test Title',
        creator: this.user.name,
        description: ''
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      var x = {};
      x[event.target.id] = event.target.value;
      this.setState(x);
    }

    handleSubmit(event) {
      //TODO: Submit to DB
      console.log("submit", event);
    }

    handleVideoPreview(event) {
      //TODO: add URL validation
      $("#videoPreview").attr("src", event.target.value);
    }

    handleRequestDelete(event) {
      //TODO: Remove chip/tag from tag list
    }

    render() {
        return (
          <div>
          <h1 style={styles.title}>Video Upload</h1>
          <div style={styles.div}>
            <div style={styles.preview} id="preview">
              <h3>{this.state.title}</h3>
              <h5>By {this.state.creator}</h5>
              <div>
                  <iframe style={styles.iframe} height="315px" width="560px" src="" id="videoPreview"></iframe>
              </div>
              <h5>Submitted By {this.user.name}</h5>
              <p>{this.state.description}</p>
            </div>
            <div style={styles.submit} id="submitForm">
              <form onSubmit={this.handleSubmit}>
                <TextField hintText="Enter Animation Title" floatingLabelText="Animation Title" floatingLabelFixed={true} value={this.state.title} id="title" onChange={this.handleChange}/><br />
                <TextField hintText="Enter Creator Name" floatingLabelText="Creator Name" floatingLabelFixed={true} value={this.state.creator} id="creator" onChange={this.handleChange}/><br />
                <TextField hintText="Enter Video URL" floatingLabelText="Video URL" floatingLabelFixed={true} onChange={this.handleVideoPreview}/><br />
                <TextField style={{textAlign: 'left'}} hintText="Enter Description" floatingLabelText="Description" floatingLabelFixed={true} value={this.state.description} id="description" onChange={this.handleChange} multiLine={true} rows={4}></TextField><br />
                <AutoComplete floatingLabelText="Select Tags" floatingLabelFixed={true} dataSource={tagOptions} filter={AutoComplete.caseInsensitiveFilter} onNewRequest={(value) => value.text}/><br />
                <div style={styles.chipWrapper}><Chip style={styles.chip} onRequestDelete={this.handleRequestDelete}>Romance</Chip></div><br /><br />
                <RaisedButton label="Submit" primary={true} type="submit"></RaisedButton>
              </form>
            </div>
          </div>
          </div>
        );
    }
}

export default Submit;
