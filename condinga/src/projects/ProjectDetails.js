import React, { useEffect, useState } from 'react'
import Footer from '../feed/Footer'
import Nav from '../feed/Nav'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, where } from 'firebase/firestore'
import { db } from '../firebase'

const ProjectDetails = () => {

    const { projectId } = useParams();
    const [title, setTitle] = useState('');
    const [brief, setBrief] = useState('');
    const [tech, setTech] = useState('');
    // const [title, setTitle] = useState('');



    
    // useEffect(() => {
    //     const fetchsingle = async () => {
    //         const docRef = doc(db, "Projects", "1xFWXjuKSYFxS7rn4pFX");
    //         const docSnap = await getDoc(docRef);
            
    //         if (docSnap.exists()) {
    //           console.log("Document data:",   docSnap.data());
    //            console.log(docSnap)
    //         } else {
               
    //           console.log("No such document!");
    //         }
            
    //     };
    //     fetchsingle();

    // }, [])
  


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
                                                    <h3 class="mb-3">    </h3>
                                                    <p class="small mb-0"> technology <span class="mx-2">|</span> posted
                                                        <strong> </strong> on 11 April , 2021</p>
                                                    <hr class="my-4" />
                                                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ad ea consectetur nemo quia, nihil debitis soluta id assumenda molestias laudantium exercitationem error magni. Ut a sit tenetur pariatur veritatis.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate illum pariatur magni odit illo deserunt, modi suscipit officia vero ratione saepe autem obcaecati necessitatibus eaque, amet iste ipsum doloribus accusantium.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet facilis nobis ab, nihil voluptatem! Natus voluptatum laudantium facere debitis repellat facilis nisi incidunt totam aliquid? Magni impedit ex suscipit!</p>

                                                </div>


                                            </div>
                                            <button type="button" class="btn  btn-floating pull-right ">
                                                <i class="fa fa-download mr-2"></i> Download Document
                                            </button>
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

export default ProjectDetails