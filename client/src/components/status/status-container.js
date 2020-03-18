import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CHANGE_TASK_STATUS, GET_TASKS_QUERY } from '../../graphql/queries';
import Status from './status';
const StatusContainer = ({ status, id }) => {
  const [ChangeTaskStatus] = useMutation(CHANGE_TASK_STATUS);
 
  const changeStatus = value => {
    ChangeTaskStatus({
      variables: { id: value.id, status: value.status },
      refetchQueries: [{ query: GET_TASKS_QUERY }]
    });
  };

  return <Status status={status} id={id} changeStatus={changeStatus} />;
};

export default StatusContainer;
