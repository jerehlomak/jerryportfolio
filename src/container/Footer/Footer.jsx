import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!name || !email || !message) {
    //   toast.error('Please fill all fields.')
    // }

    setLoading(true)


    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    await client.create(contact)
      .then(() => {
        setLoading(false)
        setIsSubmitted(true)
      })
  }

  return (
    <>
      <h2 className="head-text">Contact <span>Me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jerehlomak@gmail.com" className='p-text'>
            jerehlomak@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +234 703 653 9035" className='p-text'>
            +234 703 653 9035
          </a>
        </div>
      </div>

      {!isSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className='app__flex'>
            <input 
              type="text" 
              className="p-text" 
              placeholder='Enter Your Name'
              name='name'
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='app__flex'>
            <input 
              type="text" 
              className="p-text" 
              placeholder='Enter Your Email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea 
              name="message" 
              className='p-text'
              placeholder='Enter Your Message' 
              value={message}
              onChange={handleChange} 
              required
            />
          </div>
          <button className='p-text app__flex' type='button' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)