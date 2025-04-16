import React from 'react'

const ProjectsCard = ({ project }) => {
    const { thumbnail, title, desc, tags, github, live } = project

  return (
    <div className='projects-card-wrapper'>
        <div className='projects-card-thumbnail-wrapper'>
            <div className='projects-card-tags-wrapper'>
                {tags.map((tag) => (
                    <span className='projects-card-tag' key={tag}>{tag}</span>
                ))}
            </div>
            <img src={thumbnail} alt='Project thumbnail'/>
        </div>
        <div className='projects-card-info-wrapper'>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
        <div className='projects-card-links-wrapper'>
            <a href={github}>Github</a>
            <a href={live}>Live Site</a>
        </div>
    </div>
  )
}

export default ProjectsCard