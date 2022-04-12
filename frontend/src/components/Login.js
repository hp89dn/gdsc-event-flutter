import React, { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { auth, googleAuthProvider } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import fetch from "../axios";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { setRoles } = useAuth();

  const signInWithGoogle = async () => {
    setLoading(true);
    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (res) => {
        const token = await auth.currentUser.getIdToken(true);
        await fetch
          .post("/auth/login/google", { id_token: token })
          .then(async (res) => {
            console.log(token);
            await setRoles(res.data.roles);
            await setLoading(false);
            if (res.data.roles.includes("admin")) {
              history.push("/admin");
            } else {
              history.push("/");
            }
          })
          .catch(async (err) => {
            setLoading(false);
          });
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <Button
            disabled={loading}
            className="w-100 mt-1 bg-danger"
            type="submit"
            onClick={signInWithGoogle}
          >
            LogIn With Google
          </Button>
          <div className="w-100 text-center mt-3">
            <Link to="">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="">Sign Up</Link>
      </div>
    </div>
  );
}
