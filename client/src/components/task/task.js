import React from 'react';
import Status from '../status/status-container';
import './task.style.scss';

const task = ({ id, name, description, openedBy, status }) => {

  return (
    <div style={{ border: '1px solid black', margin: '1em 0' }}>
      <h1>
        Name:{name}Posted By:{openedBy}
      </h1>
      <br />
      <div>Desc: {description}</div>
      <br />
      <Status status={status} id={id} />
    </div>
  );
};

export default task;
