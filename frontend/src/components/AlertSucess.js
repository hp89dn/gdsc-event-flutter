import React, { useLayoutEffect } from "react";
import { Alert } from "react-bootstrap";

export default function AlertSucess({ show, setShow, name }) {
  useLayoutEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 10000);
    }
  }, [show]);

  if (show) {
    return (
      <Alert variant="success">
        <Alert.Heading>Bạn đã điểm danh thành công</Alert.Heading>
        <p>
          Xin chào <strong>{name}</strong>, có phải mục tiêu hôm này của bạn là
          tay phải có ny và tay trái ẳm hết quà của GDSC?
        </p>
        <p>Chúc bạn thành công {`:))`}</p>
      </Alert>
    );
  }
  return null;
}
