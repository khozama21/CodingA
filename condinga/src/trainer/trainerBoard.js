 
import { collection, getDocs, limit, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { auth, db } from '../firebase';
 


const TrainerBoard = () => {
    const [recenprojects, setrecentProjects] = useState([]);
    const [rtasks, setrecentTasks] = useState([]);

    const [ranns, setranns] = useState([]);


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
    useEffect(() => {
        const fetchData = async () => {
            let tlist = [];
            try {
                const q = query(collection(db, "Assignments"),limit(3));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    tlist.push({ id: doc.id, ...doc.data() });
                });
                 setrecentTasks(tlist);
                console.log(tlist)

            } catch (err) {
                console.log(err);
            }
        };
        fetchData();

    }, [])
    useEffect(() => {
        const fetchData = async () => {
            let alist = [];
            try {
                const q = query(collection(db, "Announcements"),limit(3));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    alist.push({ id: doc.id, ...doc.data() });
                });
                setranns(alist);
                console.log(alist)

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
                                                                    <div class="activity-meta" key={rproject.id}>
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
                                                    {
                                                            rtasks.map((rtask) => (

                                                                <li>
                                                                    <div class="activity-meta" key={rtask.id}>
                                                                        <i>10 hours Ago</i>
                                                                        <span>
                                                                            <a href={rtask.details}title="" >{rtask.title}</a>
                                                                        </span>
                                                                        <h6>
                                                                    Tehchnology: 
                                                                            <a href="time-line.html"> {rtask.technology}</a>
                                                                        </h6>
                                                                    </div>
                                                                </li>



                                                            ))
                                                        }


                                                    </ul>
                                                    <a href='/addTask' className=' btn  btn-primary pull-right m-4'>Add Tasks </a>

                                                </div>

                                            </aside>
                                        </div>
                                        
                                        <div class="container-fluid col-lg-12">

                                            <aside class="sidebar static">
                                                 

                                            <div class="widget">
                                                    <h4 class="widget-title">Recent Tasks</h4>
                                                    <ul class="activitiez">
                                                    {
                                                        ranns.map((rann) => (

                                                                <li>
                                                                    <div class="activity-meta" key={rann.id}>
                                                                        <i>10 hours Ago</i>
                                                                        <span>
                                                                            <h5 href={''}title="" >{rann.title}</h5>
                                                                        </span>
                                                                       <p> {rann.brief}</p>
                                                                    </div>
                                                                </li>



                                                            ))
                                                        }


                                                    </ul>
                                                    <a href='/addann' className=' btn  btn-primary pull-right m-4'>Add Announcement </a>

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