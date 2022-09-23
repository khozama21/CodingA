import React, { useContext, useState } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Signin = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {dispatch}= useContext(AuthContext)

    const navigate= useNavigate();



    const handlelogin = (e) => {
        e.preventDefault()
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
            //  dispatch({type:"LOGIN", payload:user})

                navigate('/projects')
              
            })
            .catch((error) => {
               setError(true);
            
            });

    }
    return (
        <div>


            <div class="theme-layout">
                
                <div class="container-fluid pdng0">
                    <div class="row merged">

                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="login-reg-bg">
                                <div class="log-reg-area sign">
                                    <h2 class="log-title text-center">Login</h2>
                                    <p class="text-center">
                                        Don’t Have An Account Yet? 
                                        <a href="/home" title=""> Take the tour</a> or
                                        <a href="/Signup" title=""> Join now</a>
                                    </p>
                                    {error && <div class="alert alert-danger" role="alert">
                                        Username or Password is incorrect
                                    </div>}
                                    <form onSubmit={handlelogin} >
                                        <div class="form-group">
                                            <input type="text" id="email" required="required" onChange={e=>setEmail(e.target.value)} />
                                            <label class="control-label" > Email </label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="password" required="required" onChange={e=>setPassword(e.target.value)}/>
                                            <label class="control-label" for="input">Password</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        {/* <div class="checkbox">
                                            <label>
                                                <input type="checkbox" checked="checked" />
                                                <i class="check-box"></i>
                                                Remember Me.
                                            </label>
                                        </div> */}
                                        {/* <a href="#" title="" class="forgot-pwd">Forgot Password?</a> */}
                                        <div class=" pull-right">
                                            <button class="mtr-btn signin btn btn-primary m-2" type="submit">
                                                <span>Login</span>
                                            </button>
                                            {/* <button class="mtr-btn signup btn btn-primary m-2" type="button">
                                        <span>Register</span>
                                    </button> */}
                                        </div>
                                    </form>
                                </div>
                                {/* <div class="log-reg-area reg">
                                    <h2 class="log-title">Register</h2>
                                    <p>
                                        Don’t use Winku Yet?
                                        <a href="#" title="">Take the tour</a> or
                                        <a href="#" title="">Join now</a>
                                    </p>
                                    <form method="post">
                                        <div class="form-group">
                                            <input type="text" required="required" />
                                            <label class="control-label" for="input">First & Last Name</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" required="required" />
                                            <label class="control-label" for="input">User Name</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" required="required" />
                                            <label class="control-label" for="input">Password</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-radio">
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="radio" checked="checked" />
                                                    <i class="check-box"></i>
                                                    Male
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <i class="check-box"></i>
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" required="required" />
                                            <label class="control-label" for="input">
                                                <a href="https://wpkixx.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6c29010d05002c">[email&#160;protected]</a>
                                            </label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" checked="checked" />
                                                <i class="check-box"></i>
                                                Accept Terms & Conditions ?
                                            </label>
                                        </div>
                                        <a href="#" title="" class="already-have">Already have an account</a>
                                        <div class="submit-btns">
                                            <button class="mtr-btn signup" type="button">
                                                <span>Register</span>
                                            </button>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />



        </div>
    )
}
