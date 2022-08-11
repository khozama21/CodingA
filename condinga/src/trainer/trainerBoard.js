import React, { Component } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
// import { useNavigate } from "react-router-dom";
// import './board.css'

class TrainerBoard extends Component {
 

    render() {
        const { projects } = this.props;
        return (
            <div>
                <div class="theme-layout">

                    {/* <!-- responsive header --> */}
                    <Nav />
                    {/* <!-- topbar --> */}
                    <section>
                        <div class="gap">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row" id="page-contents">
                                            {/* <div class="col-lg-12">
                                                <aside class="sidebar static">
                                                    <div class="widget col-lg-12">
                                                        <h4 class="widget-title">shortcuts</h4>
                                                        <ul class="naves">
                                                           
                                                            <li>
                                                                <i class="fa fa-file-code-o"></i>
                                                                <a href="fav-page.html" title="">Submissions</a>
                                                            </li>
                                                            <li>
                                                                <i class="fa fa-newspaper-o"></i>
                                                                <a href="timeline-friends.html" title="">Announcments</a>
                                                            </li>

                                                            <li>
                                                                <i class="fa fa-archive"></i>
                                                                <a href="landing.html" title="">Projects</a>
                                                            </li>
                                                            <li>
                                                                <i class="fa fa-bell"></i>
                                                                <a href="newsfeed.html" title="">Notifications</a>
                                                            </li>
                                                            <li>
                                                                <i class="fa fa-inbox"></i>
                                                                <a href="inbox.html" title="">Inbox</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                      

                                                </aside>
                                            </div> */}
                                            
                                            {/* <!-- sidebar --> */}
                                            <div class="col-lg-6">

                                                <aside class="sidebar static">
                                                    <div class="widget">
                                                        <h4 class="widget-title">Recent Projects</h4>
                                                         <ProjectList projects ={projects}/>
                                                    <a href='/addproject' className=' btn  btn-primary pull-right m-4'>Add Projects </a>

                                                    </div>
                                                    <div class="widget">
                                                        <h4 class="widget-title">Recent Tasks</h4>
                                                        <ul class="activitiez">
                                                            <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>  <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>



                                                        </ul>
                                                    <button className=' btn  btn-primary pull-right m-4'>Add Tasks </button>

                                                    </div>
                                                </aside>
                                            </div>
                                            {/* <!-- Shortcuts --> */}

                                            <div class="col-lg-6">

                                                <aside class="sidebar static">
                                                    <div class="widget">
                                                        <h4 class="widget-title">To-do</h4>
                                                        <ul class="activitiez">
                                                            <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>  <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>



                                                        </ul>
                                                    <button className=' btn  btn-primary pull-right m-4'>See More </button>

                                                    </div>

                                                    <div class="widget">
                                                        <h4 class="widget-title">Recent Submissions</h4>
                                                        <ul class="activitiez">
                                                            <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>  <li>
                                                                <div class="activity-meta">
                                                                    <i>10 hours Ago</i>
                                                                    <span>
                                                                        <a href="#" title="">A project was posted</a>
                                                                    </span>
                                                                    <h6>by
                                                                        <a href="time-line.html">author name</a>
                                                                    </h6>
                                                                </div>
                                                            </li>



                                                        </ul>
                                                    <button className=' btn  btn-primary pull-right m-4'>See More </button>

                                                    </div>

                                                </aside>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



                {/* <!-- ======= Footer ======= --> */}
                <Footer />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projects: state.project.projects
    }
  }
  

export default connect(mapStateToProps)(TrainerBoard)