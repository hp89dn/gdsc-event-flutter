import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function AlertSucess({ show }) {
  if (show) {
    return (
      <Alert variant="success">
        <Alert.Heading>GDSC rất vui được gặp bạn</Alert.Heading>
        <p>Bạn đã điểm danh thành công</p>
        <hr />
        <p className="mb-0"></p>
      </Alert>
    );
  }
  return null;
}
