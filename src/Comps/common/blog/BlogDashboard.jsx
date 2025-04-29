import React, { useState } from 'react'
import AnimatedText from '../AnimatedText'
import '../../../CSS/form.css'

const BlogDashboard = () => {

    const [formValues, setFormValues] = useState({
        blogTitle: '',
        blogBody: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <div className='admin-wrapper'>
        <h1><AnimatedText text='Create Blog'/></h1>
        <form className='admin-form'>
            <div className='form-title-wrapper'>
                <label htmlFor="blogTitle">
                    Blog title:
                    <input
                        type="text"
                        id='blogTitle'
                        name='blogTitle'
                        value={formValues.blogTitle}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className='form-body-wrapper'>
                <label htmlFor="blogBody">
                    Blog body:
                    <textarea
                        id='blogBody'
                        name='blogBody'
                        value={formValues.blogBody}
                        onChange={handleChange}>
                    </textarea>
                </label>
            </div>
            <button className='form-submit'>POST</button>
        </form>
    </div>
  )
}

export default BlogDashboard