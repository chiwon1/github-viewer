import React, { useState, useEffect } from "react";
import { getRepos } from "../../utils/api";
import ReposGrid from "../ReposGrid";

function UsersToBattle() {
  const USER_ID = "Ken123777";
  const [inputUserId, setInputUserId] = useState(USER_ID);
  const [repos, setRepos] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    updateUsersToSearch(inputUserId);
  }, []);

  function updateUsersToSearch(inputUserId) {
    setInputUserId(inputUserId);
    setError(null);

    getRepos(inputUserId)
      .then((data) => {
        setRepos({
          ...repos,
          [inputUserId]: data,
        });
      })
      .catch(() => {
        console.warn("요청 오류: ", error);

        setError({
          error: "저장소 정보를 가져오는데 실패하였습니다.",
        });
      });
  }

  return (
    <>
      {/* {isLoading() && <Loading text="가져오는 중입니다" />} */}

      {/* {error && <p className="center-text error">{error}</p>} */}

      {repos[inputUserId] && <ReposGrid repos={repos[inputUserId]} />}
    </>
  );
}

export default UsersToBattle;
