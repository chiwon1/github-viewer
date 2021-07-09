import React, { useState } from "react";
import Popular from "../Popular";
import Battle from "../Battle";
import NavButton from "../NavButton";
import "./styles.css";
import { getUserData } from "../../utils/api";

export default function App() {
  const [showBattle, setShowBattle] = useState(false);

  function toggleView(showBattle) {
    setShowBattle(showBattle);
  }

  const [inputs, setInputs] = useState({
    player1: '',
    player2: '',
  });

  function updateInputs(value) {
    setInputs(value);
  }

  const [playersInfo, setPlayersInfo] = useState({
    player1: '',
    player2: '',
  });

  function updatePlayersInfo(value) {
    setPlayersInfo(value);
  }

  const [battleResult, setBattleResult] = useState();

  function updateBattleResult(value) {
    setBattleResult(value);
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
      {showBattle &&
      <Battle
        inputs={inputs}
        updateInputs={updateInputs}
        playersInfo={playersInfo}
        updatePlayersInfo={updatePlayersInfo}
        battleResult={battleResult}
        updateBattleResult={updateBattleResult}
        />}
    </div>
  );
}
