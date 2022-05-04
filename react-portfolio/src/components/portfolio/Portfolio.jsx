import React from 'react'
import './portfolio.css'
import project1 from '../../assets/project1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects i learned a lot from</h2>

      <div className="div container project__container">
        {/* TODO:Refactor to project component */}
        {/* project 1 */}
        <article className="article project__item">
          <div className="project__item-image">
            <img src={project1} alt="" />
          </div>
          <h3>Project Title</h3>
          <a href="" className='btn'target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          {/* end of project 1 */}
        {/* project 2 */}
        <article className="article project__item">
          <div className="project__item-image">
            <img src={project1} alt="" />
          </div>
          <h3>Project Title</h3>
          <a href="" className='btn'target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          {/* end of project 2 */}
        {/* project 3 */}
        <article className="article project__item">
          <div className="project__item-image">
            <img src={project1} alt="" />
          </div>
          <h3>Project Title</h3>
          <a href="" className='btn'target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          {/* end of project 3 */}
        {/* project 4 */}
        <article className="article project__item">
          <div className="project__item-image">
            <img src={project1} alt="" />
          </div>
          <h3>Project Title</h3>
          <a href="" className='btn'target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          {/* end of project 4 */}
        {/* project 5 */}
        <article className="article project__item">
          <div className="project__item-image">
            <img src={project1} alt="" />
          </div>
          <h3>Project Title</h3>
          <a href="" className='btn'target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          {/* end of project 5 */}
        {/* project 6 */}
        <article className="article project__item">
          <div className="project__item-image">
            <img src={project1} alt="" />
          </div>
          <h3>Project Title</h3>
          <a href="" className='btn'target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          {/* end of project 6 */}
      </div>
    </section>
  )
}

export default Portfolio