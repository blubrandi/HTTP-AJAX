import React, { Component } from 'react';
import './App.css';

import FriendList from './Components/FriendList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>App</h1>
       <FriendList />
      </div>
    );
  }
}

export default App;
