import React from 'react';
import Status from '../status/status-container';
import CustomBtn from '../button/button';
import './task.style.scss';

const task = ({ id, name, description, openedBy, status, isOpen }) => {
  return (
    <div className="task-component_container">
      {!isOpen && (
        <div className="task-component-overlay">
          <h1 className="overlay-txt">Closed</h1>
        </div>
      )}
      <div className="task-component_header">
        <h2>Name:{name}</h2>
        <h2>Posted By:{openedBy}</h2>
      </div>

      <div className="task-component_body">Description: {description}</div>
      <div className="task-component_footer">
        <Status status={status} id={id} />
        <CustomBtn isLink={true} location={`/issues/${id}`}>
          View Issues
        </CustomBtn>
      </div>
    </div>
  );
};
export default task;
