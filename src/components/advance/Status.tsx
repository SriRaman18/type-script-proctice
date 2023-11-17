import React from "react";
type StatusProps = {
  status: "loading"|"success"|"error"
};
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = <div>Loading...</div>;
  } else if (props.status === "success") {
    message = <div>Success!</div>;
  } else if (props.status === "error") {
    message = <div>Error!</div>;
  }

  return <div>Status - {message}</div>;
};

export default Status;
