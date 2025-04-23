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
        </div>
        <div className='bio-links-wrapper'>
            <a href="https://github.com/JSCHLTE" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
    </div>
  )
}

export default Bio