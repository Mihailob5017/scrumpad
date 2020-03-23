import React from 'react';
import Task from '../task/task';
import Empty from '../empty/empty';
import './category.style.scss';
const category = props => {
  const { tasks, name } = props;
  return (
    <div className="category-component_container">
      <h1 className="category-component_header">{name}</h1>
      <div className="category-component_body">
        {tasks.length > 0 ? (
          tasks.map((task, i) => <Task key={i} {...task} />)
        ) : (
          <Empty>Tasks</Empty>
        )}
      </div>
    </div>
  );
};

export default category;
