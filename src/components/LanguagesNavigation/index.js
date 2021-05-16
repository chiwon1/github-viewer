import React from "react";
import PropTypes from "prop-types";
import LANGUAGES from "../../constants/languages";
import "./styles.css";

export default function LangaugesNav({ selected, onUpdateLanguage }) {
  return (
    <ul className="flex-center">
      {LANGUAGES.map((language) => {
        const en = language.en;
        const ko = language.ko;

        return (
          <li key={en}>
            <button
              className="btn-clear"
              style={en === selected ? { color: "#2574D0" } : null}
              onClick={() => onUpdateLanguage(en)}
            >
              {ko}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

LangaugesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};
