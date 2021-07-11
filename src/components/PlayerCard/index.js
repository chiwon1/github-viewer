import React from 'react';
import "./styles.css";

export default function PlayerCard({ playersInfo }) {
  const { profile, score } = playersInfo;

  const {
    login,
    name,
    location,
    followers,
    following,
    public_repos: publicRepos,
    html_url: htmlUrl,
    avatar_url: avatarUrl,
  } = profile;

  return (
    <div className="card">
      <img className="avatar" src={avatarUrl} alt={`Avatar for ${name}`} />
      <div className="link">
        <a href={htmlUrl}>
          {name}
        </a>
      </div>
        <ul>
          <li>score : {score}</li>
          <li>Github Username : {login}</li>
          {name && <li>name : {name}</li>}
          <li>location : {location}</li>
          <li>followers : {followers}</li>
          <li>following : {following}</li>
          <li>Repository Count : {publicRepos}</li>
        </ul>
    </div>
  );
}
