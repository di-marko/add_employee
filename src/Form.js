import React, { useState } from 'react';

const Form = (props) => {
  const initialState = {
    name: '',
    job: '',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = () => {
    props.handleSubmit(state);
    setState(initialState);
  };

  const { name, job } = state;

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      <label htmlFor="job">Job</label>
      <input type="text" name="job" id="job" value={job} onChange={handleChange} />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
