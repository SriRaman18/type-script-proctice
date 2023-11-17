import React from "react";

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
  position: `${HorizontalPosition}-${VerticalPosition}`;
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification - {position}</div>;
};

export default Toast;
