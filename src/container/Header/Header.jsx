import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Header.scss'

import { AppWrap } from '../../wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opcaity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const downloadCVHandler = async () => {
  const url = 'https://drive.google.com/file/d/1MyoXe3tfmDOAc_XlJonDITo5BJRFTELB/view?usp=sharing'
  
  const link = document.createElement('a');
  link.href = url;
  link.target = "_blank";
  link.download = 'JerryLomak CV.pdf';
  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)
}

const Header = () => {
  return (
    <div className='app__header app_flex'>
      <motion.div
        whileInView={{ X: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.85 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Jereh Lomak</h1>
            </div>
          </div>

          <div className="tag-cmp app_flex">
            <p className="p-text">A   Frontend Dev</p>
            <p className="p-text">Backend Dev</p>
            <p className="p-text">Graphics Designer</p> 
          </div>
          
        </div>
        <div className='app__header-button'>
          <button><a href="#contact">Contact Me</a></button>
          <button onClick={downloadCVHandler}>Download CV</button>
        </div>
        
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.85, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile1} alt='profile_bg' style={{ borderRadius: '50%'  }} />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
  
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >

         {[images.redux, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))} 
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')