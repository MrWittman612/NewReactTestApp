import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

function Index() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h1>Users</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" component={Index} />
        <Route path="/" component={About} />
        <Route path="/" component={Users} />
      </div>
    </Router>
  );
}

export default App;
