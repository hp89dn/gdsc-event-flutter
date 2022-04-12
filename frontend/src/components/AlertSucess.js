import React, { useState, useLayoutEffect } from "react";
import { Alert, Button } from "react-bootstrap";

export default function AlertSucess({ show, setShow }) {
  useLayoutEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [show]);

  if (show) {
    return (
      <Alert variant="success">
        <Alert.Heading>GDSC rất vui được gặp bạn</Alert.Heading>
        <p>Bạn đã điểm danh thành công</p>
      </Alert>
    );
  }
  return null;
}
