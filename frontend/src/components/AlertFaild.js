import React, { useState, useLayoutEffect } from "react";
import { Alert, Button } from "react-bootstrap";

export default function AlertFaild({ show, setShow }) {
  useLayoutEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [show]);

  if (show) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Email có thể chưa được đăng ký</Alert.Heading>
        <p>
          Bạn hãy thử lại nêu vẫn không được hãy liên hệ với tụi mình để được
          trợ giúp
        </p>
      </Alert>
    );
  }
  return null;
}
