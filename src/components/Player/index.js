import React, { useState, useEffect } from "react";
import { getProfile } from "../../utils/api";
import BattleGrid from '../BattleGrid';

export default function Player() {
  const USER_ID = "facebook";
  const [inputUserId, setInputUserId] = useState(USER_ID);
  const [profile, setProfile] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    updateUsersToSearch(inputUserId);
  }, []);

  function updateUsersToSearch(inputUserId) {
    // setInputUserId(inputUserId);
    setError(null);

    getProfile(inputUserId)
      .then((data) => {
        // console.log("profiles", profiles);
        // console.log("data", data);
        // console.log("[...profiles, data]", [...profiles, data]);
        setProfile(data);
      })
      .catch(() => {
        console.warn("요청 오류: ", error);

        setError({
          error: "저장소 정보를 가져오는데 실패하였습니다.",
        });
      });
  }

  // console.log("profile", profile);

  return (
    <div className="player">
      {/* {isLoading() && <Loading text="가져오는 중입니다" />} */}

      {/* {error && <p className="center-text error">{error}</p>} */}

      {profile && <BattleGrid profile={profile} />}
    </div>
  );
}
