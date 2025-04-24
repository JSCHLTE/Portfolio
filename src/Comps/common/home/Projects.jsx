import { projectsThumbData } from "./projectsThumbData"
import ProjectsCard from "./ProjectsCard"

const Projects = () => {
  return (
    <div className='projects-wrapper'>
        {projectsThumbData.map((project) => (
            <ProjectsCard key={project.slug} project={project}/>
        ))}
    </div>
  )
}

export default Projects