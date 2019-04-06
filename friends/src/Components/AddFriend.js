import React from 'react'

import axios from 'axios'

class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: {
                name: '',
                email: '',
                age: ''
            }
        }
    }

    changeHandler = event => {
        event.persist()
        let value = event.target.value
        this.setState(prevState => ({
            friend: { ...prevState.item, [event.target.name]: value }
        }))
    }

    handleSubmit = event => {
        event.preventDefault()
        axios
            .post('http://localhost:5000/friends, this.state.item')
            .then(response => {
                this.props.updateFriends(response.data)
                this.props.history.push('/FriendList')
            })
            .catch(err => console.log(err))
    }

    putHandler = event => {
        event.preventDefault()
        axios.put('http://localhost:5000/friends/${id}, this.state.friend')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='name'
                        onChange={this.changeHandler}
                        placeholder='Name'
                        value={this.state.friend.name}
                    />
                    <input 
                        type='text'
                        name='age'
                        onChange={this.changeHandler}
                        placeholder='Age'
                        value={this.state.friend.age}
                    />
                    <input 
                        type='text'
                        name='email'
                        onChange={this.changeHandler}
                        placeholder='Email'
                        value={this.state.friend.email}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend