import React from 'react';
import { Link } from 'react-router-dom';
const button = ({ location, name }) => {
  return (
    <div>
      <Link to={location}>{name}</Link>
    </div>
  );
};

export default button;
