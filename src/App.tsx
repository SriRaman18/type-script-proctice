import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/basic/Greet";
import Person from "./components/basic/Person";
import PersonList from "./components/basic/PersonList";
import Status from "./components/advance/Status";
import Heading from "./components/advance/Heading";
import Oscar from "./components/advance/Oscar";
import Button from "./components/eventProps/Button";
import Input from "./components/eventProps/Input";
import Container from "./components/styleProps/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import DomRef from "./components/useRef/DomRef";
import Mutable from "./components/useRef/Mutable";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import ButtonHtml from "./components/htmlElement/Button";

function App() {
  const personName = {
    first: "John",
    last: "Doe",
  };
  const nameList = [
    { first: "will", last: "jack" },
    { first: "John", last: "smith" },
    { first: "mark", last: "Doe" },
  ];

  type Person = {
    first: string;
    last: string;
  };

  return (
    <div className="App">
      {/* --------------Basic------------------- */}
      <Greet name={"Kane"} number={25} loggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      {/* --------------Advance------------------- */}
      <Status status={"loading"} />
      <Heading> Placeholder Text</Heading>
      <Oscar>Award goes to ....</Oscar>
      {/* --------------Event Props------------------- */}
      <Button
        handleClick={(event, id) => {
          console.log("clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      {/* --------------Style Props------------------- */}

      <Container style={{ border: "1px solid black", padding: "1rem" }} />
      {/* --------------State Props------------------- */}
      <LoggedIn />
      <User />
      {/* --------------UseRef Props------------------- */}
      <DomRef />
      <Mutable />
      {/* --------------Component Props------------------- */}
      <Private isLoggedIn={true} Component={Profile} />

      {/* --------------Generic Props------------------- */}

      <List
        items={[
          { first: "will", last: "jack" },
          { first: "John", last: "smith" },
          { first: "mark", last: "Doe" },
        ]}
        onClick={(item) => console.log(item)}
      />
      {/* --------------Restricting Props------------------- */}
      <RandomNumber value={10} isPositive />

      {/* --------------Template Literals Props------------------- */}

      <Toast position="right-top" />

      {/* --------------HTML Element Literals Props------------------- */}
      <ButtonHtml variant="primary">Primary Button</ButtonHtml>
      {/* <input /> */}

      {/* --------------CustomComponent Literals Props------------------- */}

      {/* <CustomComponent name={"joy"} number={125} loggedIn={false} /> */}


    </div>
  );
}

export default App;
