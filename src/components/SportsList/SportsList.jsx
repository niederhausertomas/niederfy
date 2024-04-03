import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './SportsList.css'

const SportsList = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <h1>Add a sport to your profile</h1>
        <ul>
          <li>
            <Link className='sportName' rel="stylesheet" to="/sports/football" >
              Football
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SportsList
