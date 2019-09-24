import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AuthButton, Public, Login, Protected } from "./RedirectR";
import PrivateRoute from "./PrivateRoute";
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time
const AuthExample = () => {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
};

export default AuthExample;
