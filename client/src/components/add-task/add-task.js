import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../input/input';
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

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'desc') setDesc(value);
    if (name === 'user') setUsername(value);
  };

  return (
    <div>
      <FormInput
        label="Task Name:"
        name="name"
        isTextarea={false}
        handleChange={handleChange}
        value={name}
      />
      <br />
      <FormInput
        label="Task Desciption:"
        name="desc"
        isTextarea={true}
        handleChange={handleChange}
        value={desc}
      />
      <br />
      <FormInput
        label="Task Master:"
        name="user"
        isTextarea={false}
        handleChange={handleChange}
        value={username}
      />
      <button onClick={execute}>Add Task</button>
      <Link to="/">Go To Homepage</Link>
    </div>
  );
};

export default AddTask;
