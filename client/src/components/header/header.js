import React from 'react';
import CustomButton from '../button/button';
import './header.style.scss';
const header = () => {
  return (
    <div className="header-component_container">
      <h1 className="header-component_left">Scrumpad</h1>

      <div className="header-component_right">
        <CustomButton isLink={true} location="/">
          Home Page
        </CustomButton>
        <CustomButton isLink={true} location="/issues">
          All Issues
        </CustomButton>
        <CustomButton isLink={true} location="/add">
          Add Task
        </CustomButton>
      </div>
    </div>
  );
};

export default header;
