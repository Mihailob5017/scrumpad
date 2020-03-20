import React from 'react';
import './input.styles.scss';
const input = ({ isTextarea, handleChange, label, name, ...otherProps }) => {
  return (
    <div className="form-input__container">
      <label htmlFor={name}>{label}</label>
      <br />
      {!isTextarea ? (
        <input
          className="form-input__input"
          type="text"
          name={name}
          onChange={handleChange}
          {...otherProps}
        />
      ) : (
        <textarea
          onChange={handleChange}
          className="form-input__textarea"
          name={name}
          {...otherProps}
        ></textarea>
      )}
    </div>
  );
};

export default input;
