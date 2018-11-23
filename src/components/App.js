import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersRequest } from '../actions/users';
import UserList from './userList'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.props.getUsersRequest()
  }
  render() {
    const users = this.props.users
    return (
      <div className="App">
        <UserList users={users.items}/>
      </div>
    )
  }
}

export default connect(({users}) => ({users}), {
  //Mapdispatchtoprops
  getUsersRequest
})(App)
