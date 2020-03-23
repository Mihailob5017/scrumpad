import React from 'react';

import './issue.style.scss';
import SingleIssue from '../../components/issue/single-issue-container';
import Empty from '../../components/empty/empty';
import CustomButton from '../../components/button/button';
const Issue = ({ taskId, issues, query, isAddVisiable }) => {
  


  return (
    <div className="issue-page-container">
      <h1 className="issue-page-header">All current Issues</h1>
      <div className="issue-page-body">
        {issues.length > 0 ? (
          issues.map((issue, i) => (
            <SingleIssue query={query} {...issue} key={i} />
          ))
        ) : (
          <Empty>Issues</Empty>
        )}
      </div>

      {isAddVisiable && (
        <div className="issue-page-footer">
          <CustomButton isLink={true} location={`/add/${taskId}`}>
            Add new Issue
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default Issue;
