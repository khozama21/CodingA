import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { db } from '../firebase';
 

const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let plist = [];
            try {
                const q = query(collection(db, "Projects"), orderBy('number',"desc"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    plist.push({ id: doc.id, ...doc.data() });
                });
                setProjects(plist);
                
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();

    }, [])
    return (
        <div>


            <div class="theme-layout">

                {/* <!-- responsive header --> */}
                <Nav />
                {/* <!-- topbar --> */}
                <section>
                    <div class="gap">
                        <div class="container-fluid">


                            <section >
                                <div class="container py-3 h-100">
                                    <div class="row d-flex justify-content-center align-items-center h-100">
                                        <div class="col col-xl-10">

                                         {projects.map((project)=>(
                                            <div class="card mb-5" style={{ borderRadius: "15px" }} key={project.id}>
                                            
                                            <div class="card-body p-4">
                                                <h3 class="mb-3">
                                            Project  {project.number}<span class="mx-2">|</span> 
                                                {project.title}</h3>
                                                <p class="small mb-0"><i class="fa fa-star fa-lg"></i> <span class="mx-2">|</span> Technology Used
                                                    <strong> </strong>{project.technology}</p>
                                                <hr class="my-4" />
                                                <p> {project.brief}</p>
                                                <div class="d-flex pull-right">
                                                    {/* <p class="mb-0 text-uppercase"><i class="fa fa-cog me-2"></i> <span
                                                            class="text-muted small">settings</span></p>
                                                        <p class="mb-0 text-uppercase"><i class="fa fa-link ms-4 me-2"></i> <span
                                                            class="text-muted small">Project link</span></p>
                                                        <p class="mb-0 text-uppercase"><i class="fa fa-ellipsis-h ms-4 me-2"></i> <span
                                                            class="text-muted small">Project link</span>
                                                            <span class="ms-3 me-4">|</span></p>
                                                        <a href="#!">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                                                                class="img-fluid rounded-circle me-3" width="35" />
                                                        </a> */}
                                                    
                                                    <a href={project.details} type="button" class="btn btn-primary btn-floating text-light mr-1 mb-1 w-100 "   >
                                                        <i class="fa fa-plus mr-2"></i>See Details
                                                    </a>
                                                    <a href={project.attachment} type="button" class="btn  btn-primary btn-floating text-light mb-1 w-100"   >
                                                        <i class="fa fa-plus mr-2"></i>Submit Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                         ))}
                                            
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>



            {/* <!-- ======= Footer ======= --> */}
            <Footer />

        </div>
    )
}

export default AllProjects