import React from 'react'

const Bio = () => {
  return (
    <div className='bio-wrapper'>
        <div className='bio-img-wrapper'>
            <img src='/images/logo.png'/>
        </div>
        <div className='bio-info-wrapper'>
            <h1>Jordan Schulte</h1>
            <p>Buffalo, NY</p>
            <p>Front-end Engineer</p>
        </div>
        <div className='bio-links-wrapper'>
            <a href="https://github.com/JSCHLTE" target='_blank'><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
  )
}

export default Bio