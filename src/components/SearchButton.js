import React, { createPortal } from 'preact/compat';

import './SearchButton.scss';
import { useAppContext } from '../hooks';
import { getDomElement } from '../utils';

export const SearchButton = ({ onClick }) => {
  const { config } = useAppContext();

  return createPortal(
    <button
      type="button"
      className="uni-SearchButton"
      title="Search"
      onClick={(event) => {
        event.target.blur();
        onClick();
      }}
    >
      <SearchIcon />

      <div className="uni-SearchButton-InputContent">{config.inputContent}</div>

      {config.keyboardShortcuts?.length > 0 && (
        <kbd className="uni-SearchButton-Shortcut">
          {config.keyboardShortcuts[0]}
        </kbd>
      )}
    </button>,
    getDomElement(config.inputContainer)
  );
};

function SearchIcon(props) {
  return (
    <span className="uni-SearchButton-Icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </span>
  );
}
