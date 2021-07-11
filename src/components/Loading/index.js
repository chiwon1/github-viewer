import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Loading({ text, speed }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const interval = window.setInterval(() => {
      content === text + "..."
        ? setContent(text)
        : setContent((content) => (content + "."));
    }, speed);

    return (() => {
      window.clearInterval(interval);
    });
  }, [content, speed, text]);

  return (
    <p className="content">{content}</p>
  );
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
