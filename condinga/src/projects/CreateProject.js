import React, { Component } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
 

class CreateProject extends Component {
  

    render() {

        return (
            <div>


                <div class="theme-layout">
                    <Nav />
                    <div class="container-fluid pdng0">
                        <div class="row merged">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="login-reg-bg">
                                    <div class="log-reg-area sign">
                                        <h2 class="log-title text-center">Add A Project</h2>
                                        
                                        <form onSubmit={this.handleSubmit}>
                                            <div class="form-group">
                                                <input type="text" id="title" required="required" onChange={this.handleChange} />
                                                <label class="control-label" for="input">Project's Title</label>
                                                <i class="mtrl-select"></i>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" id="technology" required="required" onChange={this.handleChange} />
                                                <label class="control-label" for="input">Project Technology</label>
                                                <i class="mtrl-select"></i>
                                            </div>
                                            <div class="form-group">
                                                <textarea type="text" id="brief" required="required" onChange={this.handleChange} />
                                                <label class="control-label" for="input">Project's Brief</label>
                                                <i class="mtrl-select"></i>
                                            </div>
                                             
                                            
                                            <div class=" pull-right">
                                                <button class="mtr-btn signin btn btn-primary m-2" type="submit">
                                                    <span>Add </span>
                                                </button>
                                                {/* <button class="mtr-btn signup btn btn-primary m-2" type="button">
                                                    <span>Register</span>
                                                </button> */}
                                            </div>
                                        </form>
                                    </div>
                                    <div class="log-reg-area reg">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />


            </div >
        )
    }
}
 
  
export default CreateProject