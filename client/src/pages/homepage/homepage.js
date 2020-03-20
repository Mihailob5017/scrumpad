import React from 'react';
import Category from '../../components/category/category';
import { filterTasksByCategory } from '../../helper/helper-functions';
import { Link } from 'react-router-dom';
const homepage = ({ tasks }) => {
  const { open, active, finished, closed } = filterTasksByCategory(tasks);

  return (
    <div>
      <h2>
        View All Issues:<Link to="/issues">Issues</Link>
      </h2>
      <Category tasks={open} name="Open" />
      <Category tasks={active} name="Active" />
      <Category tasks={finished} name="Finished" />
      <Category tasks={closed} name="Closed" />
    </div>
  );
};

export default homepage;
