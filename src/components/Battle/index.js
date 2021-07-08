import React, { useState } from "react";
import UserToBattle from "../UserToBattle";

export default function Battle() {
  const [inputs, setInputs] = useState({
    user1: '',
    user2: '',
  });

  const { user1, user2 } = inputs;

  function onChange(event) {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const [isInput, setIsInput] = useState(false);

  function onClick() {
    setIsInput(true);
    console.log("user1", user1);
    console.log("user2", user2);
  }

  return (
    <div>
      <h1 className="center-text">This is Battle!</h1>
      <div>
        <input type="text" name="user1" value={user1} placeholder="user1" onChange={onChange}/>
        <button onClick={onClick}>Add user 1</button>
        <input type="text" name="user2" value={user2} placeholder="user2" onChange={onChange}/>
        <button onClick={onClick}>Add user 2</button>
      </div>
      <button>Battle Start</button>
      <UserToBattle/>
      <UserToBattle/>
      {/* {isInputUser1 && <UsersToBattle/>}
      {isInputUser2 && <UsersToBattle/>} */}
    </div>
  );
}
