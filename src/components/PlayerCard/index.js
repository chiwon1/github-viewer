import React from 'react';
import "./styles.css";

export default function PlayerCard({
  avatar,
  score,
  login,
  name,
  location,
  followers,
  following,
  public_repos,
  href,
}) {

  if (name === null) {
    name = login;
  }

  return (
    <div className="card">
      <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
      <div className="link">
        <a href={href}>
          {name}
        </a>
      </div>
        <ul>
          <li>score : {score}</li>
          <li>Github Username : {login}</li>
          <li>name : {name}</li>
          <li>location : {location}</li>
          <li>followers : {followers}</li>
          <li>following : {following}</li>
          <li>Repository Count : {public_repos}</li>
        </ul>
    </div>
  );
}
