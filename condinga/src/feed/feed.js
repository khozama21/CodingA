import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import Footer from './Footer'
import Nav from './Nav'






export const Feed = () => {
    const [anns, setAnns] = useState([]);
    const [ranns, setranns] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            let annlist = [];
            try {
                const q = query(collection(db, "Announcements"), orderBy('number', "desc"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    annlist.push({ id: doc.id, ...doc.data() });
                });
                setAnns(annlist);

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
                    <div class="gap  ">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row" id="page-contents">
                                        <div class="col-lg-3">
                                            <aside class="sidebar static">
                                                <div class="widget">
                                                    <h4 class="widget-title">Shortcuts</h4>
                                                    <ul class="naves">
                                                        <li>
                                                            <i class="fa fa-clipboard"></i>
                                                            <Link to={'/projects'} title="">Projects</Link>
                                                        </li>
                                                        <li>
                                                            <i class="fa fa-inbox"></i>
                                                            <a href="/tasks" title="">Assigments</a>
                                                        </li>

                                                        <li>
                                                            <i class="fa fa-bell"></i>
                                                            <a href="/announcements" title="">Announcments</a>
                                                        </li>

                                                        {/* <li>
                                                            <i class="fa fa-file"></i>
                                                            <a href="fav-page.html" title="">Submissions</a>
                                                        </li>

                                                        <li>
                                                            <i class="fa fa-power-off"></i>
                                                            <a href="landing.html" title="">Events</a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                                {/* <!-- Shortcuts --> */}
                                                <div class="widget">
                                                    <h4 class="widget-title">Recent Announcements</h4>
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
                                                </div>

                                            </aside>
                                        </div>
                                        {/* <!-- sidebar --> */}
                                        <div class="col-lg-9">

                                            {/* <div class="central-meta"  >
                                                <div class="new-postbox">
                                                    <figure>
                                                        <img src="images/resources/admin2.jpg" alt="" />
                                                    </figure>
                                                    <div class="newpst-input">
                                                        <form method="post">
                                                            <textarea rows="2" placeholder="write something"></textarea>
                                                            <div class="attachments">
                                                                <ul  >
                                                                    <li>
                                                                        <i class="fa fa-file"></i>
                                                                        <label class="fileContainer">
                                                                            <input type="file" />
                                                                        </label>
                                                                    </li>

                                                                    <li>
                                                                        <button type="submit">Post</button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* <!-- add post new box --> */}
                                            <div class="loadMore">
                                                {anns.map((ann) => (
                                                    <div class="central-meta item" key={ann.id}>
                                                        <div class="user-post">
                                                            <div class="friend-info">
                                                                {/* <figure>
                                                                <img src="images/resources/friend-avatar10.jpg" alt="" />
                                                            </figure> */}
                                                                <div class="friend-name">
                                                                
                                                                    <ins>
                                                                        <h2> <span class='text-muted'> Annoucement {ann.number} </span> <span>| </span>{ann.title}</h2>
                                                                    </ins>
                                                                    <span>published: june,2 2018 19:PM</span>
                                                                </div>

                                                                {/* <!-- post content + comments --> */}
                                                                <div class="description">
                                                                    <p>
                                                                        {ann.brief} </p>
                                                                        <a href={ann.details} > {ann.details}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div class="coment-area">
                                                        <ul class="we-comet">
                                                            <li>
                                                                <div class="comet-avatar">
                                                                    <img src="images/resources/comet-1.jpg" alt="" />
                                                                </div>
                                                                <div class="we-comment">
                                                                    <div class="coment-head">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">Jason borne</a>
                                                                        </h5>
                                                                        <span>1 year ago</span>
                                                                        <a class="we-reply" href="#" title="Reply">
                                                                            <i class="fa fa-reply"></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div class="comet-avatar">
                                                                            <img src="images/resources/comet-2.jpg" alt="" />
                                                                        </div>
                                                                        <div class="we-comment">
                                                                            <div class="coment-head">
                                                                                <h5>
                                                                                    <a href="time-line.html" title="">alexendra dadrio</a>
                                                                                </h5>
                                                                                <span>1 month ago</span>
                                                                                <a class="we-reply" href="#" title="Reply">
                                                                                    <i class="fa fa-reply"></i>
                                                                                </a>
                                                                            </div>
                                                                            <p>yes, really very awesome car i see the features of this car in the official website of
                                                                                <a href="#" title="">#Mercedes-Benz</a> and really impressed :-)
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="comet-avatar">
                                                                            <img src="images/resources/comet-3.jpg" alt="" />
                                                                        </div>
                                                                        <div class="we-comment">
                                                                            <div class="coment-head">
                                                                                <h5>
                                                                                    <a href="time-line.html" title="">Olivia</a>
                                                                                </h5>
                                                                                <span>16 days ago</span>
                                                                                <a class="we-reply" href="#" title="Reply">
                                                                                    <i class="fa fa-reply"></i>
                                                                                </a>
                                                                            </div>
                                                                            <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div class="comet-avatar">
                                                                    <img src="images/resources/comet-1.jpg" alt="" />
                                                                </div>
                                                                <div class="we-comment">
                                                                    <div class="coment-head">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">Donald Trump</a>
                                                                        </h5>
                                                                        <span>1 week ago</span>
                                                                        <a class="we-reply" href="#" title="Reply">
                                                                            <i class="fa fa-reply"></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>
                                                                        we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                                                        <i class="em em-smiley"></i>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="" class="showmore underline">more comments</a>
                                                            </li>
                                                            <li class="post-comment">
                                                                <div class="comet-avatar">
                                                                    <img src="images/resources/comet-1.jpg" alt="" />
                                                                </div>
                                                                <div class="post-comt-box">
                                                                    <form method="post">
                                                                        <textarea placeholder="Post your comment"></textarea>
                                                                        <div class="add-smiles">
                                                                            <span class="em em-expressionless" title="add icon"></span>
                                                                        </div>
                                                                        <div class="smiles-bunch">
                                                                            <i class="em em---1"></i>
                                                                            <i class="em em-smiley"></i>
                                                                            <i class="em em-anguished"></i>
                                                                            <i class="em em-laughing"></i>
                                                                            <i class="em em-angry"></i>
                                                                            <i class="em em-astonished"></i>
                                                                            <i class="em em-blush"></i>
                                                                            <i class="em em-disappointed"></i>
                                                                            <i class="em em-worried"></i>
                                                                            <i class="em em-kissing_heart"></i>
                                                                            <i class="em em-rage"></i>
                                                                            <i class="em em-stuck_out_tongue"></i>
                                                                        </div>
                                                                        <button type="submit"></button>
                                                                    </form>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div> */}
                                                    </div>
                                                ))}
                                            </div>
                                             
                                          
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


 
            <Footer />

        </div>
    )
}
