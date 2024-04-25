
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'


const App = () => {

  return (
    <div className='app'>
      <Navbar />
      <Header />
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
