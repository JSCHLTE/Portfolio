import React from 'react'
import AnimatedText from '../AnimatedText';

const ProjectsCard = ({ project }) => {
    const { thumbnail, title, desc, tags, github, live } = project

    function formatClassName(tag) {
        return tag.trim().toLowerCase().replace(/[^a-z0-9\-]/g, '-');
    }    

  return (
    <div className='projects-card-wrapper'>
        <div className='projects-card-thumbnail-wrapper'>
            <div className='projects-card-tags-wrapper'>
            {tags.map((tag) => (
                <span className={`projects-card-tag ${formatClassName(tag)}`} key={tag}>
                    {tag}
                </span>
                ))}

            </div>
            <img src={thumbnail} alt='Project thumbnail'/>
        </div>
        <div className='projects-card-info-wrapper'>
            <h4 className='projects-card-title'><AnimatedText text={title} /></h4>
            <p className='projects-card-desc'>{desc}</p>
        </div>
        <div className='projects-card-buttons'>
            <a href={live} target='_blank' rel='noopener noreferrer' className='projects-card-button live'>View Live <i className="fa-solid fa-up-right-from-square"></i></a>
            <a href={github} target='_blank' rel='noopener noreferrer' className='projects-card-button github'>View Repo <i className="fa-brands fa-github"></i></a>
        </div>
    </div>
  )
}

export default ProjectsCard