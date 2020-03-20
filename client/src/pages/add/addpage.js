import React from 'react';
import { withRouter } from 'react-router-dom';
import { getLastArg } from '../../helper/helper-functions';
import AddIssue from '../../components/add-issue/add-issue-container';
import AddTask from '../../components/add-task/add-task-container';
const AddPage = props => {
  const Route = getLastArg(props.location.pathname);

  return <>{Route === 'add' ? <AddTask /> : <AddIssue taskId={Route} />}</>;
};

export default withRouter(AddPage);
