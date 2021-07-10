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

  const [isInputs, setIsInputs] = useState({
    player1: false,
    player2: false,
  });

  function updateIsInputs(value) {
    setIsInputs(value);
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

  const [error, setError] = useState({
    player1: null,
    player2: null,
  });

  function updatePlayerToSearch(playerId, player) {
    setError({
      ...error,
      [player]: null,
    });

    getUserData(playerId)
      .then((data) => {
        updatePlayersInfo({
          ...playersInfo,
          [player]: data,
        });
      })
      .catch(() => {
        console.warn("요청 오류: ", error);

        setError({
          ...error,
          [player]: "저장소 정보를 가져오는데 실패하였습니다.",
        });
      });
  }

  function isLoading(player) {
    return !playersInfo[player] && error[player] === null;
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
        updatePlayerToSearch={updatePlayerToSearch}
        isLoading={isLoading}
        error={error}
        isInputs={isInputs}
        updateIsInputs={updateIsInputs}
        />}
    </div>
  );
}
