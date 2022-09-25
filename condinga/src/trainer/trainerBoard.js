import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import React, { Component, useEffect, useState } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { auth, db } from '../firebase';
import ProjectSummary from '../projects/ProjectSummary';

// import { useNavigate } from "react-router-dom";
// import './board.css'


const TrainerBoard = () => {
    const [recenprojects, setrecentProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let rplist = [];
            try {
                const q = query(collection(db, "Projects"),limit(3));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    rplist.push({ id: doc.id, ...doc.data() });
                });
                setrecentProjects(rplist);
                console.log(rplist)

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
                                                <div class="widget  ">
                                                    <h4 class="widget-title">Recent Projects</h4>
                                                    <ul class="activitiez">
                                                        {
                                                            recenprojects.map((rproject) => (

                                                                <li>
                                                                    <div class="activity-meta">
                                                                        <i>10 hours Ago</i>
                                                                        <span>
                                                                            <a href={rproject.details}title="" >{rproject.title}</a>
                                                                        </span>
                                                                        <h6>
                                                                    Tehchnology: 
                                                                            <a href="time-line.html"> {rproject.technology}</a>
                                                                        </h6>
                                                                    </div>
                                                                </li>



                                                            ))
                                                        }
                                                    </ul>
                                                    <a href='/addproject' className=' btn  btn-primary pull-right m-4'>Add Projects </a>

                                                </div>
                                               
                                            </aside>
                                        </div>
                                        {/* <!-- Shortcuts --> */}

                                        <div class="col-lg-6">

                                            <aside class="sidebar static">
                                                 

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

export default TrainerBoard