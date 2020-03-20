import React from 'react';
import { Link } from 'react-router-dom';
const header = () => {
  return (
    <div>
      <h1>Scrumpad</h1>

      <Link to="/">Home Page</Link>
      <Link to="/issues">All Issues</Link>
      <Link to="/add">Add Task</Link>
    </div>
  );
};

export default header;
