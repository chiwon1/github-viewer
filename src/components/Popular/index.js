import React, { useState, useEffect } from "react";
import { fetchPopularRepos } from "../../utils/api";
import Loading from "../Loading";
import LanguagesNavigation from "../LanguagesNavigation";
import ReposGrid from "../ReposGrid";
import LANGUAGES from "../../constants/languages";

export default function Popular() {
  const DEFAULT_LANGUAGE = LANGUAGES[0];
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE.en);
  const [repos, setRepos] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    updateLanguage(selectedLanguage);
  }, []);

  function updateLanguage(selectedLanguage) {
    setSelectedLanguage(selectedLanguage);
    setError(null);

    fetchPopularRepos(selectedLanguage)
      .then((data) => {
        setRepos({
          ...repos,
          [selectedLanguage]: data,
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
    return !repos[selectedLanguage] && error === null;
  }

  return (
    <>
      <LanguagesNavigation
        selected={selectedLanguage}
        onUpdateLanguage={updateLanguage}
      />

      {isLoading() && <Loading text="가져오는 중입니다" />}

      {error && <p className="center-text error">{error}</p>}

      {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
    </>
  );
}
