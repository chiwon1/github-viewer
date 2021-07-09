import React from 'react';
import PlayerCard from '../PlayerCard';

export default function BattleGrid({ playersInfo }) {
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
    <ul>
      <li key={html_url}>
        <PlayerCard
          avatar={avatar_url}
          score={score}
          login={login}
          name={name}
          location={location}
          followers={followers}
          following={following}
          public_repos={public_repos}
          href={html_url}
        >
        </PlayerCard>
      </li>
    </ul>
  );
}


