import React from 'react';
import SingleIssue from '../../components/issue/single-issue';
const Issue = ({ issues }) => {
  return (
    <div>
      {issues.map(({ name, description }, i) => (
        <SingleIssue name={name} description={description} key={i} />
      ))}
    </div>
  );
};

export default Issue;
