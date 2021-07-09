import React from 'react';
import PropTypes from "prop-types";
import { FaStar, FaCodeBranch, FaExclamationTriangle } from "react-icons/fa";
import Card from "../Card";

export default function BattleGrid({ profile }) {
  const { login, html_url, avatar_url, location, followers, following, public_repos } = profile;
  console.log("profile", profile);
  console.log("profile.login", profile.login);
  console.log(profile[login]);

  return (
    <ul className="grid space-between">
      <li key={html_url}>
        <Card
          header="1"
          avatar={avatar_url}
          href={html_url}
          name={login}
        >
          <ul className="card-list">
            <li>
              <FaStar color="rgb(255, 215, 0)" size={12} />{" "}
              {/* {stargazers_count.toLocaleString()} stars */}
            </li>
            <li>
              <FaCodeBranch color="rgb(129, 195, 245)" size={12} />{" "}
              {/* {forks.toLocaleString()} forks */}
            </li>
            <li>
              <FaExclamationTriangle color="rgb(241, 138, 147)" size={12} />{" "}
              {/* {open_issues.toLocaleString()} open */}
            </li>
          </ul>
        </Card>
      </li>
    </ul>
  );
}
