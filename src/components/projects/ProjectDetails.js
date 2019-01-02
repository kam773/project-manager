import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div>
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repellat doloribus,
                    ut recusandae odit ratione architecto impedit assumenda laboriosam exercitationem,
                    error consequuntur voluptas a quo dolorem dolores facilis iure veniam quis ex.
                    Et, minus quas modi provident saepe odio tempora veritatis ea sequi voluptatibus
                    qui ipsum repellendus aut, accusamus non.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
