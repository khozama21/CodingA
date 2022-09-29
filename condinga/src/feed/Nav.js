import React from 'react'
import { Link } from 'react-router-dom'
import { auth ,useAuthState} from '../firebase';
 
import SignedLinks from './SignedLinks'
 

const Nav = () => {

     
    
    return (
        <div>
            <div class="topbar stick">
                <div class="logo">
                    <h1 style={{ fontSize: '28px', margin: 0, padding: '4px 0', lineHeight: '1', fontWeight: '500', color: 'white' }} >

                        <a href="index.html">CodingA+</a>
                    </h1>
                </div>
                <div class="top-area">
                    <ul class="main-menu">
                        <li>
                            <Link to={'/'} title="">Home</Link>
                            {/* <ul>
                                <li>
                                    <a href="index-2.html" title="">Home Social</a>
                                </li>
                                <li>
                                    <a href="index2.html" title="">Home Social 2</a>
                                </li>

                            </ul> */}
                        </li>
                        <li className='dropdown2'>
                            <Link to={'/feed'} title="">Feed</Link>
                            <ul>
                                <li>
                                    <Link to={'/feed'} title="">Feed</Link>
                                </li>
                              
                                <li>
                                    <a href="/trainer" title="">MyBoard</a>
                                </li>

                            </ul>
                        </li>
                        <li className='dropdown2'>
                            <Link to={'/profile'} title=""> Account </Link>
                            <ul>
                            <SignedLinks />
                           
                            </ul>

                        </li>
                        <li className='dropdown2'>
                            <Link to={'/'} title="">Academy Team</Link>
                            <ul>
                                <li>
                                    <Link to={'/trainees'}>Trainees</Link>
                                </li>
                                <li>
                                    <Link to={'/trainers'}>Trainers</Link>
                                </li>
                                <li>
                                    <Link to={'/managers'}>Management</Link>
                                </li>

                            </ul>
                        </li>
                    </ul>

                    <span class="fa fa-menu main-menu" data-ripple=""></span>
                </div>
            </div>


        </div>
    )
}

export default Nav