import React from 'react';
import { Link } from 'react-router-dom';
import SingleIssue from '../../components/issue/single-issue-container';
const Issue = ({ issues, query, isAddVisiable }) => {
  return (
    <div>
      {issues.map((issue, i) => (
        <SingleIssue query={query} {...issue} key={i} />
      ))}
      {isAddVisiable && (
        <Link
          style={{ border: '2px solid black', padding: '0.5em' }}
          to={`/add/${issues[0].taskId}`}
        >
          Add new Issue
        </Link>
      )}
    </div>
  );
};

export default Issue;
