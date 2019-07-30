import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nested from "./pages/mockRoutes/nestedR";
import Protected from "./pages/mockRoutes/AuthExample";

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
            <li>
              <Link to="/nested">Nested routes</Link>
            </li>
            <li>
              <Link to="/redirect">Redirected routes</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/nested" component={Nested} />
        <Route exact path="/redirect" component={Protected} />
      </div>
    </Router>
  );
}

export default App;
