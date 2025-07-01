import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
        <h1 className="text-2xl md:text-4xl text-white
        font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5 ">

      <ProjectsCard 
      title="Bloging Website" 
      main="This is a bloging website created in next js and use some components library "
      />

      <ProjectsCard 
      title="Youtube Clone" 
      main="This is a bloging website created in next js and use some components library "
      />

      <ProjectsCard 
      title="Netflix Clone" 
      main="This is a bloging website created in next js and use some components library "
      />

    </div>
    </div>
  )
}

export default Projects
