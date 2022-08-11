import React from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import ProjectList from './ProjectList'

const AllProjects = () => {
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
                                                <div class="card mb-5" style={{ borderRadius: "15px" }}>
                                                    <div class="card-body p-4">
                                                        <h3 class="mb-3">Project Title</h3>
                                                        <p class="small mb-0"><i class="fa fa-star fa-lg"></i> <span class="mx-2">|</span> posted
                                                            <strong> </strong> on 11 April , 2021</p>
                                                        <hr class="my-4" />
                                                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ad ea consectetur nemo quia, nihil debitis soluta id assumenda molestias laudantium exercitationem error magni. Ut a sit tenetur pariatur veritatis.</p>
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
                                                            <button type="button" class="btn  btn-primary btn-floating">
                                                                <i class="fa fa-plus mr-2"></i> See Details
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card" style={{ borderRadius: "15px" }}>
                                                    <div class="card-body p-4">
                                                        <h3 class="mb-3">project title</h3>
                                                        <p class="small mb-0"><i class="fa fa-star fa-lg text-warning"></i> <span class="mx-2">|</span>
                                                            Public <span class="mx-2">|</span> Updated   <strong> </strong> on 11 April , 2021
                                                        </p>
                                                        <hr class="my-4" />
                                                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ad ea consectetur nemo quia, nihil debitis soluta id assumenda molestias laudantium exercitationem error magni. Ut a sit tenetur pariatur veritatis.</p>
                                                        <div class="d-flex pull-right">
                                                            {/* <p class="mb-0 text-uppercase"><i class="fa fa-cog me-2"></i> <span
                                                                class="text-muted small">settings</span></p>
                                                            <p class="mb-0 text-uppercase"><i class="fa fa-link ms-4 me-2"></i> <span
                                                                class="text-muted small">program link</span></p>
                                                            <p class="mb-0 text-uppercase"><i class="fa fa-ellipsis-h ms-4 me-2"></i> <span
                                                                class="text-muted small">program link</span>
                                                                <span class="ms-3 me-4">|</span></p> */}

                                                            <button type="button" class="btn btn-primary btn-floating ">
                                                                <i class="fa fa-plus mr-2"></i> See Details
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
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