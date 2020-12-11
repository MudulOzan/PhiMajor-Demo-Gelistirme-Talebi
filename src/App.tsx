import React, { Component } from 'react';
import './App.css';
import Users from './components/users';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />

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
export default App;

