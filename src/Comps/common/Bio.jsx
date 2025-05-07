import React from 'react'
import AnimatedText from './AnimatedText'

const Bio = () => {
  return (
    <div className='bio-wrapper'>
        <div className='bio-img-wrapper'>
            <img src='/images/pfp.webp' alt="Stylized portrait of Jordan wearing sunglasses, created with a swirling, abstract filter effect that resembles painted brush strokes. The sunglasses reflect the word 'Vibes' in a bold, colorful font."/>
        </div>
        <div className='bio-info-wrapper'>
            <h1 className='bio-info-name'>Jordan Schulte</h1>
            <p className='bio-info-location'>Buffalo, NY</p>
            <p className='bio-info-role'>Front-end Engineer</p>
            <div className='bio-links-wrapper'>
            <a href="https://github.com/JSCHLTE" target='_blank' rel='noreferrer noopener' aria-label='Checkout my GitHub'><i className="fa-brands fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/jordan-schulte-9a5961216/" target='_blank' rel='noreferrer noopener' aria-label='Checkout my LinkedIn'><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://x.com/jschlte" target='_blank' rel='noreferrer noopener' aria-label='Checkout my Twitter'><i className="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
        </div>
        </div>
    </div>
  )
}

export default Bio