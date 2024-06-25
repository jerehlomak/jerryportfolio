import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a>
            <BsTwitter />
        </a>
        <a href='https://github.com/jerehlomak' target='_blank'>
            <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/jereh-lomak-b447031a9/' target='_blank'>
            <FaLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia