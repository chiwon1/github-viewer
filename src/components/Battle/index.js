import React, { useState } from "react";
import Player from "../Player";
import "./styles.css";

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

  const [isInput, setIsInput] = useState({
    isUser1Input: false,
    isUser2Input: false,
  });

  // const { isUser1Input, isUser2Input } = isInput;

  function onClick(event) {
    const { name } = event.target;

    let foo = "";

    if (name === "user1") {
      foo = "isUser1Input";
    } else if (name === "user2") {
      foo = "isUser2Input";
    }

    setIsInput({
      ...isInput,
      [foo]: true,
    });
  }

  return (
    <div>
      <h1 className="center-text">This is Battle!</h1>
      <div className="battle-container">
        <div className="upper-container">
          <div>
            <input type="text" name="user1" value={user1} placeholder="user1" onChange={onChange}/>
            <button name="user1" onClick={onClick}>Add user 1</button>
          </div>
          <div>
            <input type="text" name="user2" value={user2} placeholder="user2" onChange={onChange}/>
            <button name="user2" onClick={onClick}>Add user 2</button>
          </div>
        </div>

        <div className="lower-container">
          {isInput.isUser1Input && <Player user={inputs.user1}/>}
          <button className="battle-button">Battle!</button>
          {isInput.isUser2Input && <Player user={inputs.user2}/>}
        </div>
      </div>
    </div>
  );
}
