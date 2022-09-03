import React from 'react'
import { Link } from 'react-router-dom'
// import './main'

export const Landing = () => {
    return (
        <div>

            <header id="header" style={{ backgroundColor: "#c299d7E3" }} class="container-fluid sticky d-flex align-items-center ">
                <div class="container d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <h1>
                            <a href="index.html">CodingA+</a>
                        </h1>
                        {/* <!-- Uncomment below if you prefer to use an image logo -->
                        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
                    </div>
                    <nav id="navbar" class="navbar ">
                        <ul>
                            <li>
                                <Link class="active " to={'/'} >Home</Link>
                            </li>
                            <li>
                                <Link   to={'/about'} >About</Link>
                            </li>
                            <li>
                                <Link   to={'/contact'}  >Contact Us</Link>
                            </li>
                            <li class="dropdown">
                                <Link to={'/register'}>
                                    <span>Get Started</span>
                                    <i class="bi bi-chevron-down"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={'/signup'}>Register</Link>
                                    </li>
                                 
                                    <li>
                                        <Link   to={'/login'} >Login</Link>
                                    </li>
                                    {/* <!-- <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li> --> */}
                                </ul>
                            </li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
            <section class="hero-section" id="hero">
                <div class="wave">
                    <svg
                        width="100%"
                        height="355px"
                        viewBox="0 0 1920 355"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
                                <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z" id="Path"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="container">
                    <div class="row align-items-center ">
                        <div class="col-12 hero-text-image text-center">
                            <div class="row">
                                <div class="col-lg-6   ">
                                    <h1 data-aos="fade-right" class="text-wrap">Land Your Dream Job</h1>
                                    <p class="mb-4" data-aos="fade-right" data-aos-delay="100">CodingA+ Platform For Job Training, and Intensive Bootcamps. Providing Best Coding Road Maps and Learning Methadologies.</p>
                                    <a
                                        href='#about'
                                        data-aos="fade-right"
                                        data-aos-delay="200"
                                        data-aos-offset="-500"
                                        class="btn m-2"
                                    >Learn More</a>
                                    <Link
                                        to={'/feed'}
                                        data-aos="fade-right"
                                        data-aos-delay="400"
                                        data-aos-offset="-500"
                                        class="btn btn-outline-white"
                                    >Get Started</Link>
                                </div>
                                <div class="col-lg-6">
                                    <img
                                        src="../assets/img/9 SCENE.svg"
                                        alt="Image"
                                        class="phone-1"
                                        data-aos="fade-right"
                                        data-aos-delay="200"
                                    />
                                    {/* <!-- <img src="assets/img/7 SCENE.svg" width="200px" alt="Image" class="phone-2" data-aos="fade-right" data-aos-delay="200"> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main"></main>

            <section id='about' class="section">
                <div class="container">
                    <div class="row justify-content-center text-center mb-5">
                        <div class="col-md-5" data-aos="fade-up">
                            <h2 class="section-heading"> All-In-One Learning Hub</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="">
                            <div class="feature-1 text-center">
                                <div class="wrap-icon icon-1">
                                    <i class="bi bi-people"></i>
                                </div>
                                <h3 class="mb-3">Manage Your Academy</h3>
                                <p>Academy managers can initiate dashboards and manage academy trainers and trainees accounts.</p>
                            </div>
                        </div>
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="feature-1 text-center">
                                <div class="wrap-icon icon-1">
                                    <i class="bi-arrows-angle-contract"></i>
                                </div>
                                <h3 class="mb-3">Connect Dirrectly with Trainees</h3>
                                <p>Trainers and communicate and with trainees, check and keep track of their progress</p>
                            </div>
                        </div>
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="feature-1 text-center">
                                <div class="wrap-icon icon-1">
                                    <i class="bi-calendar-week"></i>
                                </div>
                                <h3 class="mb-3">Keep Track of Everything</h3>
                                <p>Trainees can keep track and document their progress, tasks, and upcoming projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row justify-content-center text-center mb-5" data-aos="fade-right" data-aos-delay="200">
                        <div class="col-md-6 mb-5">
                            <h2 class="section-heading">How to set up your dashboard as a trainee</h2>
                            <img src="../assets/img/7 SCENE.svg" alt="Image" class="img-fluid" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="step">
                                <span class="number">01</span>
                                <h3>Sign Up</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="step">
                                <span class="number">02</span>
                                <h3>Create Profile</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="step">
                                <span class="number">03</span>
                                <h3>Customize</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4 me-auto">
                            <h2 class="mb-4">Seamlessly Communicate And Connect</h2>
                            <p class="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio,
                                laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt
                                dolore mollitia esse natus beatae.
                            </p>
                            <p>
                                <a href="#" class="btn btn-primary">See More</a>
                            </p>
                        </div>
                        <div class="col-md-6" data-aos="fade-left">
                            <img src="../assets/img/4 SCENE.svg" alt="Image" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4 ms-auto order-2">
                            <h2 class="mb-4">Track Your Progrees and Keep Everyone Updated</h2>
                            <p class="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio,
                                laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt
                                dolore mollitia esse natus beatae.
                            </p>
                            <p>
                                <a href="#" class="btn btn-primary">See More</a>
                            </p>
                        </div>
                        <div class="col-md-6" data-aos="fade-right">
                            <img src="../assets/img/6 SCENE.svg" alt="Image" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>



            {/* foooteer */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                <path fill=" #ec89c0" fill-opacity="0.8" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            <footer class="footer" role="contentinfo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 mb-4 mb-md-0">
                            <h3>About CodingA+</h3>
                            <p style={{ color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam
                                dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.
                            </p>
                        </div>
                        <div class="col-md-8 ms-auto">
                            <div class="row site-section pt-0">
                                <div class="col-md-4 mb-4 mb-md-0">
                                    <h3>Navigation</h3>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Login</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-4 mb-md-0">
                                    <h3>Services</h3>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#">Team</a>
                                        </li>
                                        <li>
                                            <a href="#">Team</a>
                                        </li>
                                        <li>
                                            <a href="#">Team</a>
                                        </li>
                                        <li>
                                            <a href="#">Collaboration</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-2 mb-4 mb-md-0">
                                    <p class="social">
                                        <a href="#">
                                            <span class="bi bi-twitter"></span>
                                        </a>
                                        <a href="#">
                                            <span class="bi bi-facebook"></span>
                                        </a>
                                        <a href="#">
                                            <span class="bi bi-instagram"></span>
                                        </a>
                                        <a href="#">
                                            <span class="bi bi-linkedin"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-md-4 pt-4">
                            <p style={{ color: "white" }} class="copyright">&copy; Copyright CodingA+. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
