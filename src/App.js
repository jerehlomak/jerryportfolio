
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { About, Footer, Header, Skills, Testimonial, Work, AboutMe } from './container'
import { Navbar } from './components'
import './App.scss'


const App = () => {

  return (
    <div className='app'>
      <Navbar />
      <Header />
      {/* <AboutMe /> */}
      <About />
      <Work />
      <Skills />
      <Testimonial /> 
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
