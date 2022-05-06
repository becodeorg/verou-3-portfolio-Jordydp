import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import useLocalStorage from 'use-local-storage'



const App = () =>{
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light'? 'dark' : 'light';
    setTheme(newTheme)
  }
  

  return ( 
    <div className='App' data-theme={theme}>
    <Header />
    <Nav switchTheme={switchTheme} theme={theme}/>
    <About />
    <Experience />
    {/* <Services /> */}
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />

    </div>
   );
}


export default App