import React from 'react'
import './about.css'
import fotomezelf from '../../assets/fotomezelf.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={fotomezelf} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>+ lorem</small>
          </article>
          <article className="about__card">
            <HiOutlineOfficeBuilding className='about__icon' />
            <h5>Employers</h5>
            <small>UZ Gent</small><br/>
            <small>VandenBorre</small><br/>
            <small>Uitvaartzorg Verheyden</small>
          </article>
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>+ lorem</small>
          </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque repudiandae soluta vitae quis fuga accusamus ratione enim optio similique maiores. Iste molestias repellat magnam incidunt explicabo reprehenderit ullam similique sapiente.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About