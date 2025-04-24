import { projectsData } from "./projectsData"
import ProjectsCard from "./ProjectsCard"

const Projects = () => {
  return (
    <div className='projects-wrapper'>
        {projectsData.map((project) => (
            <ProjectsCard key={project.slug} project={project}/>
        ))}
    </div>
  )
}

export default Projects