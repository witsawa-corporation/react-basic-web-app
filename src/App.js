import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './components/HomePage'

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav> */}

            <Route path="/" exact component={HomePage} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
