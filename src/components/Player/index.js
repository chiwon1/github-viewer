import React from "react";
import Loading from '../Loading';
import PlayerCard from '../PlayerCard';
import "./styles.css";

export default function Player({ player, playersInfo, isLoading, error }) {
  return (
    <div className="player">
      {isLoading(player) && <Loading text="가져오는 중입니다" />}

      {error[player] && <p className="center-text-error">{error[player]}</p>}

      {playersInfo[player] && <PlayerCard
        playersInfo={playersInfo[player]}
      />}
    </div>
  );
}
