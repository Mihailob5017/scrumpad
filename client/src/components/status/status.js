import React, { useState } from 'react';

const Status = ({ id, status, changeStatus }) => {
  const [state] = useState(status);

  return (
    <select
      value={state}
      onChange={e => {
        const obj = { id: id, status: e.target.value };
        changeStatus(obj);
      }}
    >
      <option value="open">Open</option>
      <option value="active">Active</option>
      <option value="finished">Finished</option>
      <option value="closed">Closed</option>
    </select>
  );
};

export default Status;
