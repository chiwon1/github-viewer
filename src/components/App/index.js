import React, { useState } from "react";
import Popular from "../Popular";
import Battle from "../Battle";
import NavButton from "../NavButton";
import "./styles.css";

export default function App() {
  const [showBattle, setShowBattle] = useState(false);

  function toggleView(showBattle) {
    setShowBattle(showBattle);
  }

  return (
    <div className="container">
      <div className="grid space-between">
        <NavButton
          isActive={!showBattle}
          text="인기 저장소"
          onClick={() => toggleView(false)}
        />
        <NavButton
          isActive={showBattle}
          text="Github 대결"
          onClick={() => toggleView(true)}
        />
      </div>
      {!showBattle && <Popular />}
      {showBattle && <Battle />}
    </div>
  );
}
