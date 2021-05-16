import React from "react";
import "./styles.css";

export default function NavButton({ text, isActive, onClick }) {
  return (
    <button
      className={`nav-button ${isActive ? "active" : ""}`}
      onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
}
