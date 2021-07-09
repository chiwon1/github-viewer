import React from "react";
import BattleGrid from '../BattleGrid';
import Loading from '../Loading';
import "./styles.css";

export default function Player({ player, playersInfo, isLoading, error }) {
  return (
    <div className="player">
      {isLoading(player) && <Loading text="가져오는 중입니다" />}

      {error[player] && <p className="center-text-error">{error[player]}</p>}

      {playersInfo[player] && <BattleGrid playersInfo={playersInfo[player]}/>}
    </div>
  );
}
