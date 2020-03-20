import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AddIssue = ({ OpenIssue, taskId, query }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

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
    alert('Issue Successfully added');
    setName('');
    setDesc('');
  };
  return (
    <div>
      <label htmlFor="name">Issue Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="desc">Issue Description:</label>
      <textarea
        name="desc"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        rows="10"
      ></textarea>
      <button onClick={openIss}>Open New Issue</button>
      <Link to={`/issues/${taskId}`}>Go to Issues</Link>
    </div>
  );
};

export default AddIssue;
