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

      const handleSubmit = async(e) => {
        e.preventDefault();

        const { contactName, contactEmail, contactSubject, contactBody } = formValues

        try {
            const res = await fetch("http://localhost:3000/contact", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: contactName,
                    email: contactEmail,
                    subject: contactSubject,
                    body: contactBody
                }),
            })

            const result = await res.json()
            console.log(`Message sent! ${result}`)

        } catch (err){
            console.log(`Contact Form Error ${err}`)
        }
      }

  return (
    <>
    <div className="contact-wrapper">
        <h1><AnimatedText text="Contact Me"/></h1>
        <form onSubmit={handleSubmit} id='contactForm'>
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