import React from "react";

type GreetProps = {
  name: string;
  number?: number;
  loggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { number = 0 } = props;
  return (
    <div>
      {props.loggedIn ? (
        <h1>
          Welcome..!{props.name},Your Number is {number}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default Greet;
