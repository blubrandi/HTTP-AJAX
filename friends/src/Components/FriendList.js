import React from 'react'
import Axios from 'axios'

class FriendList extends React.Component {
        state = {
            friends: []
        }

    componentDidMount() {
        Axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState( () => ( { friends: response.data }))
            })
            .catch(error => {
                console.error('Server Error', error)
            })
    }

    render() {
        return (
            <div className="friend-list">
                {this.state.friends.map(friend => (
                    <div key={friend.email} >
                        <p>Name: {friend.name}</p>
                        <p>Email:  {friend.email}</p>
                        <p>Age: {friend.age}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendList