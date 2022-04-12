import React, { useState, useLayoutEffect } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import server from "../axios";

export default function AdminPage() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const fetchParticipants = async () => {
    await server
      .get("/participant")
      .then((res) => {
        setParticipants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    fetchParticipants();
  }, []);

  const handleButtonAdd = async () => {
    setLoading(true);

    await server
      .post("/participant", { email })
      .then(async (res) => {
        const checkParticipant = await participants.some(
          (participant) => participant.email === res.data.email
        );

        if (!checkParticipant)
          await setParticipants([...participants, res.data]);
        await setEmail("");
        await setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleButtonAttendance = async (id) => {
    setLoading(true);
    await server
      .put(`/participant/${id}`)
      .then(async (res) => {
        await setParticipants(
          participants.map((participant) =>
            participant.refDoc == res.data.refDoc ? res.data : participant
          )
        );
        await setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleButtonDelete = async (id) => {
    await server.delete(`/participant/${id}`).then(async (res) => {
      await setParticipants(participants.filter((p) => p.refDoc !== id));
    });
  };

  return (
    <Container className="fluid">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button disabled={loading} onClick={handleButtonAdd} className="mt-2">
          Add Participant
        </Button>
      </Form.Group>
      <div>
        <h4>Count: {participants.length}</h4>
      </div>
      <div className="mb-2">
        <h4>
          Participated:{" "}
          {participants.reduce((sum, participants) => {
            if (participants.status === "participated") {
              return sum + 1;
            } else {
              return sum;
            }
          }, 0)}
        </h4>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => {
            return (
              <tr key={participant.refDoc}>
                <td>{index + 1}</td>
                <td>{participant.email}</td>
                <td
                  className={
                    participant.status == "participated" && "text-success"
                  }
                >
                  {participant.status}
                </td>
                <td>
                  <Button
                    onClick={() => {
                      handleButtonDelete(participant.refDoc);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      handleButtonAttendance(participant.refDoc);
                    }}
                  >
                    Attendance
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Container></Container>
    </Container>
  );
}
