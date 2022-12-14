import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';

const Signup = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate()

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value });
    };

    console.log(data)

    const handleAdd = async (e) => {
        e.preventDefault();
        try {

            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await setDoc(doc(db, "Users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp(),
            });
            swal("Good job!", "Account Has Been Succesfully Created", "success").then((value) => {
                navigate('/login');
            });
        } catch (error) {
            console.log(error);
        }



    }

    return (
        <div>


            <div class="theme-layout">
                <Nav />
                <div class="container-fluid pdng0">
                    <div class="row merged">

                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="login-reg-bg">
                                <div class="log-reg-area sign">
                                    <h2 class="log-title text-center">Create An Account</h2>
                                    <p class="text-center">
                                        Already Have An Account?
                                        {/* <a href="#" title="">Take the tour</a> or */}
                                        <a href="#" title=""> Login now</a>
                                    </p>
                                    <form onSubmit={handleAdd}>
                                        <div class="form-group">
                                            <input type="text" id="name"  required onChange={handleInput} />
                                            <label class="control-label" for="input">Name</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="email" required onChange={handleInput} />
                                            <label class="control-label" for="input">Email</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        
                                        <div class="form-group">
                                            <input type="password" id="password"  required onChange={handleInput} />
                                            <label class="control-label" for="input">Password</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="date" id="dob"  required onChange={handleInput} />
                                            <label class="control-label" for="Date Of Birth">Date of Birth</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="education" required onChange={handleInput} />
                                            <label class="control-label" for="input">Education</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="gitlink" required onChange={handleInput} />
                                            <label class="control-label"  >GitHub Account</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="linkedlink" required onChange={handleInput} />
                                            <label class="control-label"  >Linked Account</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group mb-3">
                                            <select class="custom-select border-bottom  text-muted " style={{ color: '#2a2a2a' }} id="role" required onChange={handleInput}>
                                                <option selected >Choose Your Role</option>
                                                <option value="0">Trainee</option>
                                                <option value="1">Mentor/Trainer</option>
                                                <option value="2">Manager</option>
                                            </select>

                                        </div>

                                        {/* <div class="form-group">
                                                <input type="text" id="git" required="required" onChange={this.handleChange} />
                                                <label class="control-label" for="GitHub">Github</label>
                                                <i class="mtrl-select"></i>
                                            </div> */}
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
                                                <span>Sign Up</span>
                                            </button>
                                            {/* <button class="mtr-btn signin btn btn-primary m-2" onClick={<Navigate to='/'/>}>
                                                    <span>Cancel</span>
                                                </button> */}
                                            {/* <button class="mtr-btn signup btn btn-primary m-2" type="button">
                                                    <span>Register</span>
                                                </button> */}
                                        </div>
                                    </form>
                                </div>
                                {/* <div class="log-reg-area reg">
                                        <h2 class="log-title">Register</h2>
                                        <p>
                                            Don???t use Winku Yet?
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


        </div >
    )
}

export default Signup