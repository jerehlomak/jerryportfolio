import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'

import './Skills.scss'

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  
 
  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'
    // fetch experience
    client.fetch(query)
      .then((data) => {
        setExperience(data)
      })

    // fetch skills
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
        console.log(skills)
      })
  }, [skills, experience])
  return (
    <>
      <div className="app__skills">
        <h2 className="head-text">Skills & Experience</h2>
        
        <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
            <div className="stage-cube">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color='#F06529' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faHtml5} color='#28A4D9' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faSass} color='#DD0031' />
                    </div>
                </div>
                
            </div>
            <div className='app_skills_text'>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Sass, Tailwind CSS</li>
                    <li>Python</li>
                    <li>HTML, CSS</li>
                    <li>Redux</li>
                    <li>Next Js</li>
                    <li>Typescript</li>
                  </ul>
                </div>
          </motion.div>
          {/* experience */}
          <motion.div className='app__skills-exp'>
            {experience?.map((experience, index) => (
              <motion.div
                className='app__skills-exp-item'
                key={index}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>

                <motion.div className='app__skills-exp-works'>
                  {experience.works.map((work, index) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='app_skills-exp-work'
                        key={index}
                        data-tip
                        data-for={work.name}
                      >
                        <h4 className='bold-text'>Work: {work.name}</h4>
                        <p className='p-text'><span className='bold-text'>Company:</span> {work.company}</p>
                        <p className='p-text'><span className='bold-text'>Description:</span> {work.desc}</p>
                      </motion.div>
                      {/* <ReactTooltip
                        id={work.name}
                        effect='solid'
                        arrowColor='#fff'
                        className='skills-tooltip'
                      >
                        {work.desc}
                      </ReactTooltip> */}
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
  )