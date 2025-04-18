import React, { useEffect } from 'react'
import Bio from '../Comps/common/home/Bio'
import '../CSS/about.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

  return (
    <div className="about-wrapper">
    <div className="about-left">
      <Bio />
    </div>
    <div className="about-right">
    <div className='aboutme-wrapper'>
    <h2>About Me</h2>
    <p>Hey, I’m a Front-End Engineer who’s big on the details — I like making sure things look exactly how they’re supposed to, and that they work just as well on a phone as they do on a big screen. I’m all about clean, responsive design and writing code that feels solid. Right now, I’m looking to break into the dev world and join a team where I can keep learning, build cool things, and grow as a developer. Outside of coding, you’ll usually find me watching sports, gaming, or spending time with the fam.</p>
    </div>
    <div className='work-wrapper'>
    <h2>Work History</h2>
    </div>
    </div>
  </div>
  )
}

export default About