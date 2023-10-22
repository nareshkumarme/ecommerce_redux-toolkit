import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTab = () => {

  return (
    <div>
      <nav>
        <p>Comfy Sloth</p>
        <nav>
        <NavLink  to="/Subcomponents/Home">Home</NavLink>
        <NavLink  to="/Subcomponents/About">About</NavLink>
        <NavLink  to ="/Subcomponents/Products">Products</NavLink>
        </nav>
        <div className='cart'>
            <p>Cart</p>
            <p>Login</p>
        </div>
      </nav>
    </div>
  )
}

export default NavTab
