import React, { useState, useEffect } from "react";
import { getUserData } from "../../utils/api";
import BattleGrid from '../BattleGrid';
import Loading from '../Loading';

export default function Player({ player, playerId, playersInfo, updatePlayersInfo, inputs, updateInputs }) {
  const PLAYER_ID = playerId;
  const [error, setError] = useState(null);

  useEffect(() => {
    updatePlayerToSearch(PLAYER_ID);
    updateInputs({
      ...inputs,
      [player]: '',
    });
  }, []);

  function updatePlayerToSearch(playerId) {
    setError(null);

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
          error: "저장소 정보를 가져오는데 실패하였습니다.",
        });
      });
  }

  function isLoading() {
    return !playersInfo[player] && error === null;
  }



  return (
    <div className="player">
      {isLoading() && <Loading text="가져오는 중입니다" />}

      {error && <p className="center-text error">{error.error}</p>}

      {playersInfo[player] && <BattleGrid playersInfo={playersInfo[player]}/>}
    </div>
  );
}
