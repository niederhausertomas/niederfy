import React from 'react';
import NiederfyLogo from '../../public/images/Niederfy_logo.jpg';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginContainer'>
        <img src={NiederfyLogo} style={{ height: 200, width: 200}} alt="Niederfy Logo" />
        <h1 className="mb-4">Niederfy</h1>
        <form className="mb-5">
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="mb-3 btn btn-outline-light w-100">Submit</button>
        </form>
        <div className="mb-3">
            <button type="button" className="btn btn-outline-light w-100">
                <Link to="../NewUser">Create a new user</Link>
            
            </button>
            <button type="button" className="btn btn-outline-light w-100">
            Forgot your password
            </button>
        </div>
    </div>
  );
}

export default Login;