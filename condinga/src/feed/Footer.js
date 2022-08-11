import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer class="feedfooter" role="contentinfo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 mb-4 mb-md-0">
                            <h3>About CodingA+</h3>
                            <p>
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
                                <div class="col-md-4 mb-4 mb-md-0">
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
                        <div class="col-md-4 pt-5 justify-content-center">
                            <p class="copyright">&copy; Copyright CodingA+. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-up-short"></i>
            </a>
        </div>
    )
}

export default Footer