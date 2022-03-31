import React from 'react'
import { Link } from 'wouter'
import './navbar.css'

export default function NavBar() {
  return (
    <nav> 
      <div className='navbar'>
        <Link to='/'>
          <span className='navbarLogo'>GIPHY</span>
        </Link>
      </div>
        
      <div className='navbarContainer'>
        <Link to='/create'>
          <button className='btnCreate'>+</button>
        </Link>
        <div className='Avatar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlAGIvhKuLBgZOUFz7d3pL3iGRGl_J9H7pw&usqp=CAU" alt="image_avatar"/>
        </div>
        <button className='btnMenu'>[ ]</button>
      </div>
    </nav>
  )
}
