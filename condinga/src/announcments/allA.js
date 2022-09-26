import React, { useEffect, useState }  from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Footer from '../feed/Footer';
import Nav from '../feed/Nav';
import { db } from '../firebase';

const AllAnns = () => {
    const [anns, setAnns] = useState([]);

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

                                            {anns.map((ann) => (
                                                <div class="card mb-5" style={{ borderRadius: "15px" }} key={ann.id}>

                                                    <div class="card-body p-4">
                                                        <h3 class="mb-3">
                                                            Annoucement  {ann.number}<span class="mx-2">|</span>
                                                            {ann.title}</h3>
                                                       
                                                        <hr class="my-4" />
                                                        <p> {ann.brief}</p>
                                                        <p> {ann.details}</p>

                                                        
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

{/* 
                                                            <a href={ann.attachment} type="button" class="btn  btn-primary btn-floating text-light mb-1 w-100"   >
                                                                <i class="fa fa-plus mr-2"></i>Submit
                                                            </a> */}
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




            <Footer />

        </div>
  )
}

export default AllAnns