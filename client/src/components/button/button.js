import React from 'react';
import { Link } from 'react-router-dom';
import './button.style.scss';
const button = ({ executable, isLink, location, children }) => {
  return (
    <div className="button-component_container">
      {isLink ? (
        <h1 className="button-link_container">
          <Link className="button-link_link" to={location}>
            {children}
          </Link>
        </h1>
      ) : (
        <button className="button_component_btn" onClick={executable}>
          {children}
        </button>
      )}
    </div>
  );
};

export default button;
