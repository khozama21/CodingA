import React, { Component, useEffect, useState } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../firebase';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const CreateProject = () => {
    const [file, setFile] = useState("");
    const [project, setProject] = useState({});

    const [per, setPerc] = useState(null);
    const navigate = useNavigate()


    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setProject({ ...project, [id]: value });
    };
    console.log(project);
    // useEffect(() => {
    //     const uploadFile = () => {
    //       const name = new Date().getTime() + file.name;

    //       console.log(name);
    //       const storageRef = ref(storage, file.name);
    //       const uploadTask = uploadBytesResumable(storageRef, file);

    //       uploadTask.on(
    //         "state_changed",
    //         (snapshot) => {
    //           const progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           setPerc(progress);
    //           switch (snapshot.state) {
    //             case "paused":
    //               console.log("Upload is paused");
    //               break;
    //             case "running":
    //               console.log("Upload is running");
    //               break;
    //             default:
    //               break;
    //           }
    //         },
    //         (error) => {
    //           console.log(error);
    //         },
    //         () => {
    //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //             setData((prev) => ({ ...prev, img: downloadURL }));
    //           });
    //         }
    //       );
    //     };
    //     file && uploadFile();
    //   }, [file]);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const newProjectRef = doc(collection(db, "Projects"));
            await setDoc(newProjectRef, project);

         

            swal("Good job!", "A New Project Has Been Added", "success").then((value) => {
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
                                    <h2 class="log-title text-center">Add A Project</h2>

                                    <form onSubmit={handleAdd} >
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="text" id="title" required="required" onChange={handleInput} />
                                            <label class="control-label" for="input">Project's Title</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="number" id="number" required="required" onChange={handleInput} />
                                            <label class="control-label" for="input">Project's Number</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="text" id="technology" required="required" onChange={handleInput} />
                                            <label class="control-label" for="input">Project Technology</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <textarea type="text" id="brief" required="required" rows="3" onChange={handleInput} />
                                            <label class="control-label" for="input">Project's Brief</label>
                                            <i class="mtrl-select"></i>
                                        </div>


                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="text" id="details" required="required"   onChange={handleInput} />
                                            <label class="control-label" for="input">Project's Details link</label>
                                            <i class="mtrl-select"></i>
                                        </div>
                                        <div class="form-group">
                                            <i class="mtrl-select"></i>

                                            <input type="text" id="attachment" required="required"   onChange={handleInput} />
                                            <label class="control-label" for="input">Project's Submission link </label>
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </div >

    )
}

export default CreateProject
