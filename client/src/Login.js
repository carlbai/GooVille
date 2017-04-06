import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

  const styles = {
    flexWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    header: {
      textAlign: 'center'
    }
  }

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    //call into endpoint to submit
    console.log('submitted');
  }

  handleChange(event) {
    var x = {};
      x[event.target.id] = event.target.value;
      this.setState(x);
  }

  render() {
    return(
      <div className="login-container">
      <h1 style={styles.header}>Login</h1>
        <form onSubmit={this.handleSubmit} style={styles.flexWrapper}>
          <TextField hintText="Enter Username" floatingLabelText="Username" id="username" value={this.state.username} onChange={this.handleChange}/>
          <br />
          <TextField hintText="Enter password" floatingLabelText="Password" id="password" value={this.state.password} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Login;