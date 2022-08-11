import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedLinks = () => {
  return (
    <div>
      
        
          <li>
            <NavLink to={'/'} title="">Profile</NavLink>
          </li>
          <li>
            <NavLink to={'/login'} title="">Edit Profile</NavLink>
          </li>
          <li>
            <NavLink to={'/login'} title="">Logout</NavLink>
          </li>


     
    

    </div>
  )
}

export default SignedLinks