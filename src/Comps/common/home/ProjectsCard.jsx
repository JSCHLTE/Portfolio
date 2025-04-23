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
            <h4><AnimatedText text={title} /></h4>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectsCard