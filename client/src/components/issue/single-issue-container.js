import React from 'react';
import SingleIssue from './single-issue';

const SingleIssueContainer = ({ name, description }) => {
  return <SingleIssue name={name} description={description} />;
};

export default SingleIssueContainer;
