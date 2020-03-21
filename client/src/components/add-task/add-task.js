import React, { useState } from 'react';
import CustomBtn from '../button/button';
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
      <CustomBtn isLink={false} executable={execute}>
        Add Task
      </CustomBtn>
      <CustomBtn isLink={true} location="/">View All Tasks</CustomBtn>
    </div>
  );
};

export default AddTask;
