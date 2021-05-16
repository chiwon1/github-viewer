import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Card({
  header,
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
        {header}{" "}
        <a className="link" href={href}>
          {name}
        </a>
      </h2>
      {children}
    </div>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
