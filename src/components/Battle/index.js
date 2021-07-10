import React from "react";
import Player from "../Player";
import "./styles.css";

export default function Battle({
  inputs,
  updateInputs,
  playersInfo,
  updatePlayersInfo,
  battleResult,
  updateBattleResult,
  updatePlayerToSearch,
  isLoading,
  error,
  isInputs,
  updateIsInputs
  }) {
  const { player1, player2 } = inputs;

  function onChange(event) {
    const { name, value } = event.target;
    updateInputs({
      ...inputs,
      [name]: value,
    });
  }

  function onClick(event) {
    const { name } = event.target;

    updateBattleResult();

    updatePlayersInfo({
      ...playersInfo,
      [name]: '',
    });

    updatePlayerToSearch(inputs[name], name);

    isLoading(name);

    updateIsInputs({
      ...isInputs,
      [name]: true,
    });
    if (playersInfo[name]) {
    }
  }

  function onBattle() {
    const scoreOfPlayer1 = playersInfo.player1.score;
    const scoreOfPlayer2 = playersInfo.player2.score;
    let resultMessage = '';

    if (scoreOfPlayer1 > scoreOfPlayer2) {
      resultMessage = "Player 1 Win";
    } else if (scoreOfPlayer1 < scoreOfPlayer2) {
      resultMessage = "Player 2 Win";
    } else {
      resultMessage = "Draw";
    }

    updateBattleResult(resultMessage);
  }

  return (
    <div className="frame">
      <h1 className="center-text">This is Battle!</h1>
      <div className="battle-container">
        <div className="player1-container">
          <input type="text" name="player1" value={player1} placeholder="player1" onChange={onChange}/>
          <button name="player1" onClick={onClick}>Add Player 1</button>
          {isInputs.player1 &&
          <Player
          player="player1"
          playersInfo={playersInfo}
          error={error}
          isLoading={isLoading}
          />}
        </div>

        <div className="middle-container">
          {battleResult && <div className="result-message">{battleResult}</div>}
          {playersInfo.player1 && playersInfo.player2 && <button className="battle-button" onClick={onBattle}>Battle!</button>}
        </div>

        <div className="player2-container">
          <input type="player2" name="player2" value={player2} placeholder="player2" onChange={onChange}/>
          <button name="player2" onClick={onClick}>Add Player 2</button>
          {isInputs.player2 &&
          <Player
          player="player2"
          playersInfo={playersInfo}
          error={error}
          isLoading={isLoading}
          />}
        </div>
      </div>
    </div>
  );
}
