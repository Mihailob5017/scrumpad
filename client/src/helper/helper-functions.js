import {
  GET_ALL_ISSUES_QUERY,
  GET_SPECIFIC_ISSUE_QUERY
} from '../graphql/queries';
export const filterTasksByCategory = allTasks => {
  const filterObj = {
    open: [],
    active: [],
    finished: [],
    closed: []
  };
  for (let task of allTasks) {
    if (task.status === 'open') filterObj.open.push(task);
    if (task.status === 'active') filterObj.active.push(task);
    if (task.status === 'finished') filterObj.finished.push(task);
    if (task.status === 'closed') filterObj.closed.push(task);
  }

  return filterObj;
};

const getLastArg = (route = '/nesto/12') => {
  const arg = route.split('/');
  return arg[arg.length - 1];
};

export const returnIssueQuery = arg => {
  const res = getLastArg(arg);
  if (res === 'issues') return { query: GET_ALL_ISSUES_QUERY, id: '' };
  else return { query: GET_SPECIFIC_ISSUE_QUERY, id: res };
};
