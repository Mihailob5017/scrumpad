import React from 'react';
import './input.styles.scss';
const input = ({
  inputColor,
  isTextarea,
  handleChange,
  label,
  name,
  ...otherProps
}) => {
  return (
    <div className="form-input__container">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <br />
      {!isTextarea ? (
        <input
          className="form-input__input"
          style={{ borderBottom: `2px solid ${inputColor}` }}
          type="text"
          name={name}
          onChange={handleChange}
          {...otherProps}
        />
      ) : (
        <textarea
          onChange={handleChange}
          style={{ border: `2px solid ${inputColor}` }}
          className="form-input__textarea"
          name={name}
          {...otherProps}
        ></textarea>
      )}
    </div>
  );
};

export default input;
