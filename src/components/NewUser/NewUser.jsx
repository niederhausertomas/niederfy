import React from 'react';
import { Link } from 'react-router-dom';

const NewUser = () => {
  return (
    <div>
      <h1>New User</h1>
      <Link to="/home"> <h2>Home</h2></Link>
    </div>
  )
}

export default NewUser
