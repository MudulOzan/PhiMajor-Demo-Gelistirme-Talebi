import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>PhiMajor Demo App</h1>
          <ul className="header">
            <li><NavLink to="/">Users</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Users}/>
          </div>
        </div>
      </HashRouter>
    );
  }

  state = {
    users: []
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: JSON.stringify(data) })
    })
    .catch(console.log)
  }
  
}
 
export default App;