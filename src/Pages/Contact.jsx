import { use, useEffect, useState } from 'react'
import AnimatedText from '../utils/AnimatedText'
import '../CSS/contact.css'

const Contact = () => {

      const [formValues, setFormValues] = useState({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactBody: ''
      })

      const [messageSent, setMessageSent] = useState(null);
      const [messageFailed, setMessageFailed] = useState(null);
      const [sending, setSending] = useState(null);

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

        if(contactBody.trim() == "" || contactSubject.trim() == "") {
            return;
        }

        setSending(true)

        try {
            const res = await fetch("https://portfolio-evln.onrender.com/contact", {
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
            setMessageSent(result)
            setMessageFailed(null)
            setSending(null)
            setFormValues({
                contactName: '',
                contactEmail: '',
                contactSubject: '',
                contactBody: ''
              })
        } catch (err){
            setMessageFailed(err);
            setMessageSent(null)
            setSending(null)
        }
      }

      useEffect(() => {
        let timeout;

        if(messageFailed) {
            timeout = setTimeout(() => {
                setMessageFailed(null)
            }, 7500)
        }

        if(messageSent) {
            timeout = setTimeout(() => {
                setMessageSent(null)
            }, 7500)
        }

        return () => clearTimeout(timeout)
      }, [messageFailed, messageSent])

  return (
    <>
    <div className="contact-wrapper">
        <h1><AnimatedText text="Contact Me"/></h1>
        {messageSent ? 
        <div className='contact-success-wrapper'>
            <div className='contact-success-title'>
                <span>Message Sent</span><i class="fa-solid fa-circle-check"></i>
            </div>
            <div className='contact-success-text'>
                <p>Thank you for contacting me! I will try to get back to you as soon as possible.</p>
            </div>
        </div> 
        : ''}

{messageFailed ? 
        <div className='contact-failed-wrapper'>
            <div className='contact-failed-title'>
                <span>Message Failed</span><i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div className='contact-failed-text'>
                <p>Uh-oh, something went wrong sending the email. Please refresh the page and try again.</p>
            </div>
        </div> 
        : ''}
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
            {sending ? <button className='contact-button disabled' disabled>Sending...</button> : <button className='contact-button'>Send Message</button>}
        </form>
    </div>
    </>
  )
}

export default Contact