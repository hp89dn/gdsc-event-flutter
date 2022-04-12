import React from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
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
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          {roles.includes("admin") && (
            <Route path="/admin" exact component={AdminPage} />
          )}
          <Route exact path="/*" component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
