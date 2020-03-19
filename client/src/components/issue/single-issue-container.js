import React from 'react';
import SingleIssue from './single-issue';
import { useMutation } from '@apollo/react-hooks';
import { CLOSE_SPECIFIC_ISSUE } from '../../graphql/queries';
const SingleIssueContainer = props => {
  const [CloseIssue] = useMutation(CLOSE_SPECIFIC_ISSUE);
  const closeIssueExec = (id, query, taskId) => {
    CloseIssue({
      variables: { id },
      refetchQueries: [{ query: query, variables: { id: taskId } }]
    });
  };
  return <SingleIssue closeIssueExec={closeIssueExec} {...props} />;
};

export default SingleIssueContainer;
