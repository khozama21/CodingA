import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

const SignedLinks = () => {
  const navigate= useNavigate();

  const handleLogout = (e) =>
  {
   signOut(auth).then(() => {
       localStorage.setItem('user', null);
       navigate('/')
       
     }).catch((error) => {
        console.log(error)
     });
  }
  return (
    <div>
      
{/*         
          <li>
            <NavLink to={'/'} title="">Profile</NavLink>
          </li>
          <li>
            <NavLink to={'/login'} title="">Edit Profile</NavLink>
          </li> */}
          <li>
            <NavLink to={''}  onClick={handleLogout} title="">Logout</NavLink>
          </li>


     
    

    </div>
  )
}

export default SignedLinks