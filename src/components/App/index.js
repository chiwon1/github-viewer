import React, { useState } from "react";
import Popular from "../Popular";
import Battle from "../Battle";
import NavButton from "../NavButton";
import "./styles.css";
import { getUserData } from "../../utils/api";

export default function App() {
  const [showBattle, setShowBattle] = useState(false);

  const [inputs, setInputs] = useState({
    player1: '',
    player2: '',
  });

  const [isInputs, setIsInputs] = useState({
    player1: false,
    player2: false,
  });

  const [playersInfo, setPlayersInfo] = useState({
    player1: '',
    player2: '',
  });

  const [battleResult, setBattleResult] = useState();

  const [error, setError] = useState({
    player1: null,
    player2: null,
  });

  function toggleView(showBattle) {
    setShowBattle(showBattle);
  }

  function updateInputs(value) {
    setInputs(value);
  }

  function updateIsInputs(value) {
    setIsInputs(value);
  }

  function updatePlayersInfo(value) {
    setPlayersInfo(value);
  }

  function updateBattleResult(value) {
    setBattleResult(value);
  }

  async function updatePlayerToSearch(playerId, player) {
    setError({
      ...error,
      [player]: null,
    });

    try {
      const data = await getUserData(playerId);

      updatePlayersInfo({
        ...playersInfo,
        [player]: data,
      });
    } catch(err) {
      console.warn("요청 오류: ", err);

      setError({
        ...error,
        [player]: "저장소 정보를 가져오는데 실패하였습니다.",
      });
    }
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
