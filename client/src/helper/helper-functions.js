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
