import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddFriend from './container/AddFriend';
import FriendList from './container/friend_list';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1> MY FRIENDS </h1>
            <hr />

          <div style={{float:'left',margin:'20px'}}>
          <AddFriend/>
          </div>
          <div style={{float:'left',margin:'20px'}}>
          <FriendList/>
          </div>


      </div>
    );
  }
}

export default connect()(App)
