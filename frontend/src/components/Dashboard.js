import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import AlertSucess from "../components/AlertSucess";
import AlertFaild from "../components/AlertFaild";
import server from "../axios";

export default function Dashboard() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const attendanceSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await server
      .put("/participants", { email })
      .then(async (res) => {
        await setName(res.data.name);
        await setShowSuccess(true);
        await setLoading(false);
      })
      .catch((err) => {
        setShowFail(true);
        setLoading(false);
      });
  };

  return (
    <Container fluid="xl">
      <Card>
        <AlertSucess show={showSuccess} setShow={setShowSuccess} name={name} />
        <AlertFaild show={showFail} setShow={setShowFail} />
        <Card.Body>
          <h2 className="text-center mb-4">Điểm Danh</h2>
          <h5>
            GDSC rất vui được gặp bạn, xin vui lòng điểm danh bằng email bạn đã
            đăng kí qua from. Xin cảm ơn {`(*-*)`}
          </h5>
          <Form onSubmit={attendanceSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                disabled={loading}
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button className="w-100" type="submit" disabled={loading}>
              Gửi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
