import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import { Route } from 'react-router-dom'

import FriendList from './Components/FriendList'
import AddFriend from './Components/AddFriend'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  }

  addFriend = data => {
    axios
      .post("http://localhost:5000/friends", data)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err));
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
      <h1>My Friendlist</h1>
      <FriendList
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
          />
          <Route
            path='/add-friend'
            render={() => <AddFriend addFriend={this.addFriend} />}
          />
      </div>
    );
  }
}

export default App;
