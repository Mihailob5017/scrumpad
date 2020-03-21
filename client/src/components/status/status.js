import React, { useState } from 'react';
import './status.style.scss';
const Status = ({ id, status, changeStatus }) => {
  const [state] = useState(status);

  return (
    <select
      className="status_container"
      value={state}
      onChange={e => {
        const obj = { id: id, status: e.target.value };
        changeStatus(obj);
      }}
    >
      <option className="status_option" value="open">
        Open
      </option>
      <option className="status_option" value="active">
        Active
      </option>
      <option className="status_option" value="finished">
        Finished
      </option>
      <option className="status_option" value="closed">
        Closed
      </option>
    </select>
  );
};

export default Status;
