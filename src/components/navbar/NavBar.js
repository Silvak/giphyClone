import React from 'react'
import { Link } from 'wouter'
import './navbar.css'

export default function NavBar() {
    return (
        <nav> 
            <div className='navbar'>
                <span className='navbar-logo'>Giffy</span>
                
                <div className='navbar-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <div className='navbar-login'>
                        <Link to='/register'>Register</Link>
                        <span>or</span>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
