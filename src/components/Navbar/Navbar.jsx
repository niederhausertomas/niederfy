import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
        <Link className='navbar-brand' to="/home">
            <img className='logoNavBar' src="./Niederfy_logo.jpg" style={{height: 50, width: 50}} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/category/Lips" className="nav-link" >Lips</Link>
                </li>
                <li className="nav-item">
                    <Link  to='/about' className="nav-link " aria-current="page">About</Link>
                </li>
            </ul>
            <div>
                <Link className="nav-item text-decoration-none" to="/cart">
                    
                </Link>
            </div>
        </div>
    </div>
</nav>);
};

export default Navbar;