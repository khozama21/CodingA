import { collection, getDocs, limit, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

const ProjectSummary = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let plist = [];
            try {
                const q = query(collection(db, "Projects"), limit(3));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    plist.push({ id: doc.id, ...doc.data() });
                });
                setProjects(plist);
                
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();

    }, [])
    return (
        <div >

            <ul class="activitiez">


{
    projects.map((project)=>{

        <li>
                    <div class="activity-meta">
                        <i>10 hours Ago</i>
                        <span>
                            <a href="#" title="">{project.title}</a>
                        </span>
                        <h6>by
                            <a href="time-line.html">trainer name</a>
                        </h6>
                    </div>
                </li>



    })
}
                




            </ul>
        </div>
    )
}

export default ProjectSummary