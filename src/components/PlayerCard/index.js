import React from 'react';

export default function PlayerCard({
  subheader,
  avatar,
  href,
  name,
  children,
}) {
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
      {subheader && <h4 className="center-text">{subheader}</h4>}
      <h2 className="header-sm center-text">
        <a className="link" href={href}>
          {name}
        </a>
      </h2>
      {children}
    </div>
  );
}
