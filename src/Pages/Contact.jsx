import React, { useEffect } from 'react'
import Bio from '../Comps/common/Bio'
import '../CSS/bio.css'
import '../CSS/contact.css'
import AnimatedText from '../Comps/common/AnimatedText'


const Contact = () => {

    const useScrollLockOnLargeScreens = () => {
    
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth > 768) {
              window.scrollTo(0, 0);
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = 'auto';
            }
          };
      
          handleResize(); // Call on mount
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
            document.body.style.overflow = 'auto'; // Clean up
          };
        }, []);
      };  
    
      useScrollLockOnLargeScreens();

  return (
    <div className="contact-wrapper">
    <div className="contact-left">
      <Bio />
    </div>
    <div className="contact-right">
        <h1><AnimatedText text="Contact Me"/></h1>
        <form action="" id='contactForm'>
            <label htmlFor='contactName'>
                Name:
                <input type='text' id='contactName' name='contactName' placeholder='Jordan Schulte' required/>
            </label>
            <label htmlFor='contactEmail'>
                Email:
                <input type='email' id='contactEmail' name='contactEmail' placeholder='jordanschulte@email.com' required/>
            </label>
            <label htmlFor='contactSubject'>
                Subject:
                <input type='text' id='contactSubject' name='contactSubject' required/>
            </label>
            <label htmlFor='contactBody'>
                Message:
                <textarea  id="contactBody" name="contactBody" required></textarea>
            </label>
            <button className='contact-button'>Send Message</button>
        </form>
    </div>
  </div>
  )
}

export default Contact