import React from "react";
import { useState } from "react";
import Input from "./components/Input";

//format code => clean

const defaultUser = {
  firstName: "",
  lastName: "",
  address: "",
};

const App = () => {
  //0x1234
  const [user, setUser] = useState(defaultUser);

  const onSubmit = (e) => {
    e.preventDefault();
    //logic
    alert("LOGIN");

    console.log(user);

    setUser(defaultUser);
  };
  const onChangeInput = (event, key) => {
    const value = event.target.value;

    //0x987
    const newPerson = { ...user, [key]: value };
    setUser(newPerson);
  };

  const { firstName, lastName, address } = user;

  return (
    <form onSubmit={onSubmit}>
      <h1>LOGIN FORM</h1>
      <Input
        label={"FirstName"}
        id={"firstName"}
        value={firstName}
        onChangeInput={onChangeInput}
        inputKey="firstName"
      />
      <Input
        label={"LastName"}
        id={"lastName"}
        value={lastName}
        onChangeInput={onChangeInput}
        inputKey="lastName"
      />
      <Input
        label={"Address"}
        id={"address"}
        value={address}
        onChangeInput={onChangeInput}
        inputKey="address"
      />
      <button>SUBMIT</button>
    </form>
  );
};

export default App;
