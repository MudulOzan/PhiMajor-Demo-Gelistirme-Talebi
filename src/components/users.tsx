import React, { Component } from 'react';
import './../App.css';
import UsersData from './data/UsersData';
import 'bootstrap/dist/css/bootstrap.min.css';

class Users extends Component {
  render() {
    return (
      <div className="App">
        <UsersData users={this.state.users} />
      </div>
    )
  }
  
  state = {
      users: []
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
    
      this.setState({ users: data })
    })
    .catch(console.log)
  }
  
}

export default Users;