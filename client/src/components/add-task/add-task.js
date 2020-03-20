import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AddTask = ({ query, OpenTaskExec }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [username, setUsername] = useState('');

  const execute = () => {
    if (desc === '' || name === '' || username === '') {
      alert('You need to fill in all fields');
      return;
    }
    const object = {
      name,
      openedBy: username,
      description: desc,
      status: 'open',
      isOpen: true,
      query: query
    };
    OpenTaskExec(object);
    alert('Task Successfuly Added');
    setName('');
    setDesc('');
    setUsername('');
  };

  return (
    <div>
      <label htmlFor="name">Task Name:</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <label htmlFor="desc">Task Description:</label>
      <br />
      <textarea
        name="desc"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        rows="10"
      ></textarea>
      <br />
      <label htmlFor="user">Your name</label>
      <br />
      <input
        type="text"
        name="user"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={execute}>Add Task</button>

      <Link to="/">Go To Homepage</Link>
    </div>
  );
};

export default AddTask;
