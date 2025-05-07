import { projectsThumbData } from "../Comps/common/projects/projectsThumbData"
import ProjectsCard from "../Comps/common/projects/ProjectsCard"
import '../CSS/projects.css'

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