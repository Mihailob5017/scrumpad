import React from 'react';
import Category from '../../components/category/category';
import { filterTasksByCategory } from '../../helper/helper-functions';

const homepage = ({ tasks }) => {
  const { open, active, finished, closed } = filterTasksByCategory(tasks);

  return (
    <div>
      <Category tasks={open} name="Open" />
      <Category tasks={active} name="Active" />
      <Category tasks={finished} name="Finished" />
      <Category tasks={closed} name="Closed" />
    </div>
  );
};

export default homepage;
