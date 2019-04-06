import React, { Component } from 'react';
import './App.css';

import FriendList from './Components/FriendList'
import AddFriend from './Components/AddFriend'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>App</h1>
       <FriendList />
       <AddFriend />
      </div>
    );
  }
}

export default App;
