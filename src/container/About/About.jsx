import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor } from '../../client'
import { client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <div className="app__about">
        <div className='app__about-header'>
        <h2 className="head-text">
          About <span>Me</span> & My <span>Services</span>
        </h2>
        <div className="about-cmp app_flex">
            <p className="p-text">
              I’m an ambitious problem solver with a passion for online businesses, who would love to join a team of like-minded developers. I take responsibility for my personal development, I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development. I have proven myself by successfully completing projects for IT consultancies, web design agencies and IT departments. I have interest in technology, user experience, user interface design and providing web-based solutions.  
            </p>           
          </div>
        </div>
        {/* <h2 className="head-text">
          My <span>Services</span>
        </h2> */}

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  )