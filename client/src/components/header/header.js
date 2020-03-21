import React from 'react';
import CustomButton from '../button/button';
const header = () => {
  return (
    <div>
      <h1>Scrumpad</h1>

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
  );
};

export default header;
