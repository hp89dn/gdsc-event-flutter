import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import AlertSucess from "../components/AlertSucess";
import server from "../axios";

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch {}
  }

  const attendanceButton = async () => {
    setLoading(true);
    await server
      .put("/participant")
      .then((res) => {
        setShow(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <AlertSucess show={show} />
          <h2 className="text-center mb-4">Profile</h2>
          <h4>
            Hello, <strong>{currentUser.displayName}</strong>
          </h4>
          <Button
            disabled={loading}
            onClick={attendanceButton}
            className="btn btn-primary w-100 mt-3"
          >
            Attendance
          </Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button disabled={loading} variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
