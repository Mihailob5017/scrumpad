import React from 'react';
import SingleIssue from '../../components/issue/single-issue-container';
const Issue = ({ issues, query }) => {
  return (
    <div>
      {issues.map((issue, i) => (
        <SingleIssue query={query} {...issue} key={i} />
      ))}
    </div>
  );
};

export default Issue;
