import React from 'react';
import './error.styles.scss';
import CustomBtn from '../button/button';
const error = ({ error }) => {
  console.log(error);
  return (
    <div className="error_container">
      <h1 className="error_header">OPPS! Something went wrong!</h1>
      <h2 className="error_body">Tip: "Check the console to view the Error"</h2>
      <CustomBtn isLink={true} location={'/'}>
        Go Back to the Homepage
      </CustomBtn>
    </div>
  );
};

export default error;
