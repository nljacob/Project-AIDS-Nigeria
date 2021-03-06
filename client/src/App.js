import React, { Component } from 'react';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Auth = new AuthService();


class App extends Component {

  state = {
    // userId: this.props.user.id,
    profileLink: ""
  };

  componentDidMount() {
    // const profileLinkURL = `/profile/${this.state.userId}`;
    // this.setState({
    //   profileLink: profileLinkURL
    // });
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signup');
  };

  goToEditProfile = () => {
    this.props.history.replace(this.state.profileLink);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h2>Welcome {this.props.user.email}</h2> */}
        </div>
        <p className="App-intro">
          <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
          <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        </p>
      </div>
    );
  }
  
}

export default App;
