import React from 'react';
import Category from '../../components/category/category';
import { filterTasksByCategory } from '../../helper/helper-functions';

const homepage = ({ tasks }) => {
  const tasksObject = filterTasksByCategory(tasks);

  return (
    <div>
      <Category tasks={tasksObject.open} name="Open" />
      <Category tasks={tasksObject.active} name="Active" />
      <Category tasks={tasksObject.finished} name="Finished" />
      <Category tasks={tasksObject.closed} name="Closed" />
    </div>
  );
};

export default homepage;
