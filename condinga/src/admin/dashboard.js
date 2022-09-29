import React from 'react'

const Dashboard = () => {
    return (
        <div>

            <div class="container-scroller">
               
                <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row ">
                    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a class="p-5" href="/dashboard"><img src="images/TheBooksClub-logos_transparent (3).png" alt="logo" /></a>
                        {/* <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a> */}
                    </div>
                    <div class="navbar-menu-wrapper d-flex align-items-stretch">
                        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span class="mdi mdi-menu"></span>
                        </button>
                        
                        <ul class="navbar-nav navbar-nav-right">
                            
                            <li class="nav-item d-none d-lg-block full-screen-link">
                                <a class="nav-link">
                                    <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                            
                            </li>
                      
                            <li class="nav-item nav-logout d-none d-lg-block">
                                <a class="nav-link" href="#">
                                    <i class="mdi mdi-power"></i>
                                </a>
                            </li>
                            <li class="nav-item nav-settings d-none d-lg-block">
                                <a class="nav-link" href="#">
                                    <i class="mdi mdi-format-line-spacing"></i>
                                </a>
                            </li>
                        </ul>
                        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span class="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav>
                {/* <!-- partial --> */}
                <div class="container-fluid page-body-wrapper">
                    {/* <!-- partial:partials/_sidebar.html --> */}
                    <nav class="sidebar sidebar-offcanvas" id="sidebar">
                        <ul class="nav">
                            <li class="nav-item nav-profile">
                                <a href="#" class="nav-link">
                                    <div class="nav-profile-image">
                                        <img src="https://caillouetland.com/wp-content/uploads/2017/07/avatar-blank.png" alt="profile" />
                                        <span class="login-status online"></span>
                                        {/* <!--change to offline or busy as needed--> */}
                                    </div>
                                    <div class="nav-profile-text d-flex flex-column">
                                        <span style={{ color: '#000' }} class="font-weight-bold mb-2"> </span>
                                        <span class="text-secondary text-small">Admin</span>
                                    </div>
                                    <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../dashboard">
                                    <span class="menu-title">Dashboard</span>
                                    <i class="mdi mdi-home menu-icon"></i>
                                </a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link" href="../Users">
                                    <span class="menu-title">Users</span>
                                    <i class="mdi mdi-contacts menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../Posts">
                                    <span class="menu-title">Posts</span>
                                    <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../comments">
                                    <span class="menu-title">Comments</span>
                                    <i class="mdi mdi-comment menu-icon"></i>
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                    {/* <!-- partial --> */}
                    <div class="main-panel">
                        <div class="content-wrapper">
                            <div class="page-header">
                                <h3 class="page-title">
                                    <span class="page-title-icon bg-gradient-primary text-white me-2">
                                        <i class="mdi mdi-home"></i>
                                    </span> Dashboard
                                </h3>
                                <nav aria-label="breadcrumb">
                                    {/* <ul class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page">
                                    <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                                </li>
                            </ul> */}
                                </nav>
                            </div>
                            <div class="row">
                                <div class="col-md-4 stretch-card grid-margin">
                                    <div class="card bg-gradient-danger card-img-holder text-white">
                                        <div class="card-body">
                                            <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                                            <h4 style={{ color: "white" }} class="font-weight-normal mb-3">Users <i class="mdi mdi-contacts menu-icon mdi-24px float-right" ></i>
                                            </h4>
                                            {/* {users && users.map((user) => ( */}
                                            {/* <h2 class="mb-5">{users.length}</h2> */}
                                            {/* // <h6 class="card-text">Increased by 60%</h6> */}
                                            {/* ))} */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 stretch-card grid-margin">
                                    <div class="card bg-gradient-info card-img-holder text-white">
                                        <div class="card-body">
                                            <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                                            <h4 style={{ color: "white" }} class="font-weight-normal mb-3">Posts <i class="mdi mdi-format-list-bulleted menu-icon mdi-24px float-right"></i>
                                            </h4>
                                            {/* <h2 class="mb-5">{posts.length}</h2> */}
                                            {/* <h6 class="card-text">Decreased by 10%</h6> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 stretch-card grid-margin">
                                    <div class="card bg-gradient-success card-img-holder text-white">
                                        <div class="card-body">
                                            <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                                            <h4 style={{ color: "white" }} class="font-weight-normal mb-3">Comments <i class="mdi mdi-comment menu-icon mdi-24px float-right"></i>
                                            </h4>
                                            {/* <h2 class="mb-5">{comments.length}</h2> */}
                                            {/* <h6 class="card-text">Increased by 5%</h6> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-7 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="clearfix">
                                                <h4 class="card-title float-left">Visit And Sales Statistics</h4>
                                                <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right"></div>
                                            </div>
                                            <canvas id="visit-sale-chart" class="mt-4"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Traffic Sources</h4>
                                            <canvas id="traffic-chart"></canvas>
                                            <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <div class="col-12 grid-margin">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Recent Users</h4>
                                            <div class="table-responsive">
                                                <table class="table text-center">
                                                    <thead>
                                                        <tr>
                                                            <th> ID </th>
                                                            <th> User Name </th>
                                                            <th> Email </th>
                                                            <th> Created At </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users && users.slice(-4).reverse().map((user) => (
                                                            <tr key={user.id}>
                                                                <td> {user.id} </td>
                                                                <td> {user.name} </td>
                                                                <td> {user.email} </td>
                                                                <td> {user.created_at} </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                      
                            <div class="row">
                           
                                <div class="col-md-12 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Todo</h4>
                                            <div class="add-items d-flex">
                                                <input type="text" class="form-control form-control-lg todo-list-input" placeholder="What do you need to do today?" />
                                                <button class="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Add</button>
                                            </div>
                                            <div class="list-wrapper">
                                                <ul class="d-flex flex-column-reverse todo-list todo-list-custom">
                                                    <li>
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" /> Check Comments </label>
                                                        </div>
                                                        <i class="remove mdi mdi-close-circle-outline"></i>
                                                    </li>
                                                    <li class="completed">
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" checked /> Check New Users </label>
                                                        </div>
                                                        <i class="remove mdi mdi-close-circle-outline"></i>
                                                    </li>
                                                    <li>
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" /> Add New Admin </label>
                                                        </div>
                                                        <i class="remove mdi mdi-close-circle-outline"></i>
                                                    </li>
                                                    <li>
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" /> Add Advertisments </label>
                                                        </div>
                                                        <i class="remove mdi mdi-close-circle-outline"></i>
                                                    </li>
                                                    <li class="completed">
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" checked /> Check New Posts </label>
                                                        </div>
                                                        <i class="remove mdi mdi-close-circle-outline"></i>
                                                    </li>
                                               
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                     
                    </div>
               
                </div>
            
            </div>

        </div>
    )
}

export default Dashboard