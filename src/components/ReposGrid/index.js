import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaCodeBranch, FaExclamationTriangle } from "react-icons/fa";
import Card from "../Card";
import "./styles.css";

export default function ReposGrid({ repos }) {
  return (
    <ul className="grid space-between">
      {repos.map((repo, index) => {
        const { owner, html_url, stargazers_count, forks, open_issues } = repo;
        const { login, avatar_url } = owner;

        return (
          <li key={html_url}>
            <Card
              header={`#${index + 1}`}
              avatar={avatar_url}
              href={html_url}
              name={login}
            >
              <ul className="card-list">
                <li>
                  <FaStar color="rgb(255, 215, 0)" size={12} />{" "}
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color="rgb(129, 195, 245)" size={12} />{" "}
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  <FaExclamationTriangle color="rgb(241, 138, 147)" size={12} />{" "}
                  {open_issues.toLocaleString()} open
                </li>
              </ul>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};
