import React from 'react';
import Task from '../task/task';
const category = props => {
  const { tasks, name } = props;
  return (
    <div style={{ backgroundColor: 'lightgrey', margin: '2 0em' }}>
      <h2 style={{ textAlign: 'center' }}>{name}</h2>
      {tasks.map((task, i) => (
        <Task key={i} {...task} />
      ))}
    </div>
  );
};

export default category;
