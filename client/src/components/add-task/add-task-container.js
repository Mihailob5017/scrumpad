import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import AddTask from './add-task';
import { GET_TASKS_QUERY, OPEN_NEW_TASK } from '../../graphql/queries';
const AddTaskContainer = ({ color }) => {
  const [OpenTask] = useMutation(OPEN_NEW_TASK);
  const OpenTaskExec = variableObj => {
    const { name, openedBy, description, status, isOpen, query } = variableObj;
    OpenTask({
      variables: { name, openedBy, description, status, isOpen },
      refetchQueries: [{ query }]
    });
  };

  return (
    <AddTask
      color={color}
      query={GET_TASKS_QUERY}
      OpenTaskExec={OpenTaskExec}
    />
  );
};

export default AddTaskContainer;
