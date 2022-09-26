import { collection, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { db } from '../firebase';

const CreateTask = () => {
    const [file, setFile] = useState("");
    const [task, setTask] = useState({});

    const [per, setPerc] = useState(null);
    const navigate = useNavigate()


    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setTask({ ...task, [id]: value });
    };
    console.log(task);
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const newTaskRef = doc(collection(db, "Assignments"));
            await setDoc(newTaskRef, task);

         

            swal("Good job!", "A New Task Has Been Added", "success").then((value) => {
                navigate(-1);
            });

        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div>


            <div class="theme-layout">
                <Nav />
                <div class="container-fluid pdng0">
                    <div class="row merged">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="login-reg-bg">
                                <div class="log-reg-area sign">
                                    <h2 class="log-title text-center">Add A Task</h2>

                                    <form onSubmit={handleAdd} >
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="text" id="title" required="required" onChange={handleInput} />
                                            <label class="control-label" for="input">Task Title</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="number" id="number" required="required" onChange={handleInput} />
                                            <label class="control-label" for="input">Task Number</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="text" id="technology" required="required" onChange={handleInput} />
                                            <label class="control-label" for="input">Task Technology</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <textarea type="text" id="brief" required="required" rows="3" onChange={handleInput} />
                                            <label class="control-label" for="input">Task Description</label>
                                            <i class="mtrl-select"></i>
                                        </div>


                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <textarea type="text" id="details" required="required"   onChange={handleInput} />
                                            <label class="control-label" for="input">Downloadable link</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        {/* <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="text" id="attachment" required="required"   onChange={handleInput} />
                                            <label class="control-label" for="input">Project's Submission link </label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                         */}


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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </div >

  )
}

export default CreateTask