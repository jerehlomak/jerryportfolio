import { AppWrap, MotionWrap } from '../../wrapper'
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <>
    <div className="app__aboutme">
        <h2 className="head-text">
          About <span>Me</span>
        </h2>
        <div className='div-text '>
            <p className="p-text">
            I’m an ambitious problem solver with a passion for online businesses, who would love to join a team of like-minded developers. I take responsibility for my personal development, I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development. I have proven myself by successfully completing projects for IT consultancies, web design agencies and IT departments. I have interest in technology, user experience, user interface design and providing web-based solutions.
            </p>
        </div>
        <div className=''>
            <h3>Education:</h3>
            <p className='p-text'>B.SC
                Computer Science
                Federal University of Petroleum Resources Effurun
                2018 – 2023
            </p>
        </div>
        <div>
            <h3>Certifications:</h3>
            <p className='p-text'>
                Professional Certificate in Computer Programming (NetAccess Communications Ltd, Jos, Nigeria) 2022
            </p>
            <p className='p-text'>
                Professional Certificate in Web Design and Development (NetAccess Communications Ltd, Jos, Nigeria) 2022
            </p>
            <p className='p-text'>
                Professional Certificate in CISCO IT Essentials (NetAccess Communications Ltd, Jos, Nigeria) 2022
            </p>
        </div>
    </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(AboutMe, 'app__about'), 
    'about',
    'app__whitebg'
    )