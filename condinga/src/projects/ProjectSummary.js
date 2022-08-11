import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div >

            <ul class="activitiez">



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






            </ul>
        </div>
    )
}

export default ProjectSummary