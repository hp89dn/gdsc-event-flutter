import React, { useLayoutEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../contexts/AuthContext";
import AdminPage from "./AdminPage";

function App() {
  const { roles } = useAuth();
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Dashboard} />
          {roles.includes("admin") && (
            <Route path="/admin" exact component={AdminPage} />
          )}
          <Route exact path="/*" component={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
