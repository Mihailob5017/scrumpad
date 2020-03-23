import React from 'react';
import CustomButton from '../button/button';
import './single-issue.style.scss';
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
    <div
      className={
        isOpen
          ? 'single-issue-container__open'
          : 'single-issue-container__closed'
      }
    >
      {!isOpen && (
        <div className="issue-component-overlay">
          <h1 className="overlay-txt">Closed</h1>
        </div>
      )}
      <div className="single-issue-header">
        <h2 className="single-issue-head">Issue name:{name}</h2>
        <h2 className="single-issue-status__body">
          Issue Status:{isOpen ? 'Open' : 'Closed'}
        </h2>
      </div>
      <div className="single-issue-body">{description}</div>
      <div className="single-issue-footer">
        <h1 className="single-issue-status__footer">Close Issue:</h1>
        {isOpen ? (
          <CustomButton
            isLink={false}
            executable={() => closeIssueExec(id, query, taskId)}
          >
            Close Issue
          </CustomButton>
        ) : (
          <h1>Closed</h1>
        )}
      </div>
    </div>
  );
};

export default SingleIssue;
