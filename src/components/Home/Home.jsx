import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <h1>Home</h1>
            <h2>
                <Link to="/sportsList">Your sports</Link> 
            </h2>
            <h2>
                <Link to="/sportsList">Your dashbords</Link> 
            </h2>
            <h2>
                <Link to="/sportsList">Add a sport to your profile</Link> 
            </h2>
        </div>
    </div>
  )
}

export default Home
