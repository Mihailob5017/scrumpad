import React from 'react';

const SingleIssue = ({ name, description }) => {
  return (
    <div style={{ fontWeight: 400,border:"1px solid red",margin:"2em 0" }}>
      <h2>{name}</h2>
      <br />
      <h4>{description}</h4>
    </div>
  );
};

export default SingleIssue;
