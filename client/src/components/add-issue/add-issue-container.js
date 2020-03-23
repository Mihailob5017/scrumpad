import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import AddIssue from './add-issue';
import {
  GET_SPECIFIC_ISSUE_QUERY,
  OPEN_NEW_ISSUE
} from '../../graphql/queries';
const AddIssueContainer = ({ color, taskId }) => {
  const [OpenIssue] = useMutation(OPEN_NEW_ISSUE);

  const OpenIssueExec = variableObj => {
    const { query, name, description, isOpen, taskId } = variableObj;
    OpenIssue({
      variables: { name, description, isOpen, taskId },
      refetchQueries: [{ query, variables: { id: taskId } }]
    });
  };
  return (
    <AddIssue
      color={color}
      OpenIssue={OpenIssueExec}
      taskId={taskId}
      query={GET_SPECIFIC_ISSUE_QUERY}
    />
  );
};

export default AddIssueContainer;
