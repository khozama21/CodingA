import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { db } from '../firebase';

const Managers = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "Users"));
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
                console.log(list);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();

    }, [])
    return (
        <div>

            <div class="theme-layout">


                <Nav />


                <div class="gap">
                    <div class="container-fluid">

                        <section   >
                            <div class="container py-5 h-100">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    {data.map((user) => {
                                        if (user.role == 2) {
                                            return (
                                                <div class="col-lg-4" key={user.id}>
                                                    <div class="card" style={{ borderRadius: "15px" }}>
                                                        <div class="card-body text-center">
                                                            <div class="mt-3 mb-4">
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                                    class="rounded-circle img-fluid" style={{ width: "100px" }} />
                                                            </div>
                                                            <h4 class="mb-2">{user.name}</h4>
                                                            <p class="text-muted mb-4">Education: {user.education} <span class="mx-2">|</span> <a
                                                                href="#!">{user.role}</a></p>
                                                            <div class="mb-4 pb-2">
                                                                <a href={user.linkedlink} type="button" class="btn btn-outline-primary btn-floating m-2 text-light">
                                                                    <i class="fa fa-linkedin fa-lg  "></i>
                                                                </a>
                                                                <a href={user.gitlink} type="button" class="btn btn-outline-primary btn-floating m-2">
                                                                    <i class="fa fa-github fa-lg"></i>
                                                                </a>
                                                                <a href={user.email} type="button" class="btn btn-outline-primary btn-floating m-2">
                                                                    <i class="fa fa-mail-reply fa-lg"></i>
                                                                </a>
                                                            </div>
                                                            <button type="button" class="btn btn-primary btn-rounded btn-lg">
                                                                Message now
                                                            </button>

                                                        </div>
                                                    </div>


                                                </div>
                                            )
                                        }

                                    })}






                                </div>

                            </div>
                        </section>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Managers