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
    <h1>About Me</h1>
    <p>Hey, I’m a Front-End Engineer who’s big on the details — I like making sure things look exactly how they’re supposed to, and that they work just as well on a phone as they do on a big screen. I’m all about clean, responsive design and writing code that feels solid. Right now, I’m looking to break into the dev world and join a team where I can keep learning, build cool things, and grow as a developer. Outside of coding, you’ll usually find me watching sports, gaming, or spending time with the fam.</p>
    </div>
    <div className='work-wrapper'>
    <h2>Work History</h2>
    <div className='works-wrapper'>
    <div className='works-item'>
        <h2 className='works-title'>Website Manager & Developer</h2>
          <p className='works-meta'>
            <span>New York Marketing – Williamsville, NY</span> | 
            <time dateTime='2022-8'> August 2022</time> - <time dateTime='present'>Present</time>
          </p>
          <ul className='works-desc'>
            <li>Managed 120+ WordPress websites for diverse clients.</li>
            <li>Designed and implemented custom website layouts and features.</li>
            <li>Troubleshot scripting issues and ensured website functionality.</li>
            <li>Applied SEO strategies to enhance search engine rankings and drive traffic.</li>
            <li>Collaborated with designers and developers to ensure optimal user experience and visual
            design.</li>
          </ul>
      </div>
      <div className='works-item'>
        <h2 className='works-title'>Jewelry Consultant (Seasonal)</h2>
          <p className='works-meta'>
            <span>Kay Jewelers – Williamsville, NY</span> | 
            <time dateTime='2021-10'> October 2021</time> - <time dateTime='2022-01'>January 2022</time>
          </p>
          <ul className='works-desc'>
            <li>Assisted customers with purchases and product recommendations.</li>
            <li>Handled POS transactions and applied discounts.</li>
            <li>Maintained attractive merchandise displays.</li>
            <li>Delivered high-quality customer service.</li>
          </ul>
      </div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default About