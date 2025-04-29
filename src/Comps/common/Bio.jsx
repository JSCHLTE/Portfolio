import React from 'react'
import AnimatedText from './AnimatedText'

const Bio = () => {
  return (
    <div className='bio-wrapper'>
        <div className='bio-img-wrapper'>
            <img src='/images/pfp.webp'/>
        </div>
        <div className='bio-info-wrapper'>
            <h1 className='bio-info-name'>Jordan Schulte</h1>
            <p className='bio-info-location'>Buffalo, NY</p>
            <p className='bio-info-role'>Front-end Engineer</p>
            <div className='bio-links-wrapper'>
            <a href="https://github.com/JSCHLTE" target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jordan-schulte-9a5961216/" target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/jschlte" target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        </div>
    </div>
  )
}

export default Bio