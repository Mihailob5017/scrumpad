import React, { useState } from 'react';
import CustomBtn from '../button/button';
import FormInput from '../input/input';
import './add-issue.style.scss';
const AddIssue = ({ color, OpenIssue, taskId, query }) => {
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
    <div className="add-issue-container">
      <FormInput
        inputColor={color}
        label="Issue name:"
        placeholder="Add the Name of the Issue"
        name="name"
        isTextarea={false}
        handleChange={handleChange}
        value={name}
      />
      <br />
      <FormInput
        inputColor={color}
        label="Issue description:"
        placeholder="Add the Issue Description"
        name="desc"
        isTextarea={true}
        handleChange={handleChange}
        value={desc}
      />
      <CustomBtn isLink={false} executable={openIss}>
        Add Issue
      </CustomBtn>
      <CustomBtn isLink={true} location="/issues">
        View All Issues
      </CustomBtn>
    </div>
  );
};

export default AddIssue;
