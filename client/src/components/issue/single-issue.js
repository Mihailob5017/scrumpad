import React from 'react';

const SingleIssue = ({
  name,
  description,
  isOpen,
  closeIssueExec,
  id,
  query,
  taskId
}) => {
 
  return (
    <div style={{ fontWeight: 400, border: '1px solid red', margin: '2em 0' }}>
      <h2>{name}</h2>
      <br />
      <h4>{description}</h4>
      <h5>Issue:{isOpen ? 'Open' : 'Closed'}</h5>
      <br />
      <button onClick={() => closeIssueExec(id, query, taskId)}>
        Close Issue
      </button>
    </div>
  );
};

export default SingleIssue;
