import React, { useState } from "react";

export default function Battle() {
  const [text, setText] = useState("");

  function onChange(event) {
    setText(event.target.value);
  }

  function onClick(event) {
    event.preventDefault();
    console.log("event.target.value", event.target.value);
  }

  return (
    <div>
      <h1 className="center-text">This is Battle!</h1>
      <form>
        <input placeholder="User 1" onChange={onChange}/>
        <br></br>
        <input placeholder="User 2" onChange={onChange}/>
        <button onClick={onClick}>입력</button>
      </form>
    </div>
  );
}
