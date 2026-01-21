import React, { useState } from 'react'

const FacultyForm = () => {
  const [name, setName] = useState('')

  function handleChange (e) {
    setName(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
   if (name) {
      console.log(name);
    }
    else {
      alert('Please enter name' );
    }
  }
  return (
    <>
      <h1>Faculty Form</h1>
      <input type='text' value={name} onChange={handleChange} />
        &nbsp;
       
      <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default FacultyForm
