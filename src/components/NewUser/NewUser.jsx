import React from 'react'
import Navbar from '../Navbar/Navbar'
import './NewUser.css'

const NewUser = () => {
  return (
    <div>
      <Navbar/>
      <div className='container text-center'>
        <h1>New User</h1>
        <form action="" className='container newUserContainer'>
          <label typeof='name' > Name</label><br/>
          <input type="name" /><br/>
          <label typeof='lastName' > Last name</label><br/>
          <input type="lastname" /><br/>
          <label typeof='mail' >e-mail</label><br/>
          <input type="mail" /><br/>
          <button className='btn'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewUser
