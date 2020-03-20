import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../input/input';
const AddIssue = ({ OpenIssue, taskId, query }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'desc') setDesc(value);
  };

  const openIss = () => {
    if (name === '' || desc === '') {
      alert('You need to enter both fields');
      return;
    }
    const obj = {
      name,
      description: desc,
      isOpen: true,
      taskId: taskId,
      query
    };

    OpenIssue(obj);

    setName('');
    setDesc('');
  };
  return (
    <div>
      <FormInput
        label="Issue name:"
        name="name"
        isTextarea={false}
        handleChange={handleChange}
        value={name}
      />
      <br />
      <FormInput
        label="Issue description:"
        name="desc"
        isTextarea={true}
        handleChange={handleChange}
        value={desc}
      />
      <button onClick={openIss}>Open New Issue</button>
      <Link to={`/issues/${taskId}`}>Go to Issues</Link>
    </div>
  );
};

export default AddIssue;
