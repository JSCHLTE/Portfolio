import { useState } from 'react'
import AnimatedText from '../utils/AnimatedText'
import '../CSS/contact.css'

const Contact = () => {

      const [formValues, setFormValues] = useState({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactBody: ''
      })

      const handleChange = (e) => {
        const { name, value } = e.target

        setFormValues((prev) =>  ({
            ...prev,
            [name]: value,
        }))
      }

  return (
    <>
    <div className="contact-wrapper">
        <h1><AnimatedText text="Contact Me"/></h1>
        <form action="https://formsubmit.co/email.jordanschulte@gmail.com" method="POST" id='contactForm'>
            <label htmlFor='contactName'>
                Name:
                <input type='text' id='contactName' name='contactName' placeholder='Jordan Schulte' required onChange={handleChange} value={formValues.contactName}/>
            </label>
            <label htmlFor='contactEmail'>
                Email:
                <input type='email' id='contactEmail' name='contactEmail' placeholder='jordanschulte@email.com' required onChange={handleChange} value={formValues.contactEmail}/>
            </label>
            <label htmlFor='contactSubject'>
                Subject:
                <input type='text' id='contactSubject' name='contactSubject' required onChange={handleChange} value={formValues.contactSubject}/>
            </label>
            <label htmlFor='contactBody'>
                Message:
                <textarea  id="contactBody" name="contactBody" required onChange={handleChange} value={formValues.contactBody}></textarea>
            </label>
            <button className='contact-button'>Send Message</button>
        </form>
    </div>
    </>
  )
}

export default Contact