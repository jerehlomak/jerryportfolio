import React, {useState} from 'react'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'
          
const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt="logo" /> */}
        Jereh
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'contact', 'work', 'skills', 'testimonials'].map((item, index) => (
          <li className='app__flex p-text' key={index}>
            <div />
            <a href={`#${item}`}>{item}</a> 
          </li>
        ))}
      </ul>
      {/* hamburger menu icon */}
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.1, ease: 'linear' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                 </ul>
              </motion.div>
            )
          }
      </div>
    </nav>
  )
}

export default Navbar