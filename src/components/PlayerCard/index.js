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
    public_repos,
    html_url,
    avatar_url,
  } = profile;

  return (
    <div className="card">
      <img className="avatar" src={avatar_url} alt={`Avatar for ${name}`} />
      <div className="link">
        <a href={html_url}>
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
          <li>Repository Count : {public_repos}</li>
        </ul>
    </div>
  );
}
