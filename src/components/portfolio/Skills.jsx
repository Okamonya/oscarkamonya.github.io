import React from 'react'
import './skills.css'
import IMG from '../../assets/purple.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'name of project',
    github: 'http://github.com',
    demo: 'http://demo.com'
  },
  {
    id: 2,
    image: IMG,
    title: 'name of project',
    github: 'http://github.com',
    demo: 'http://demo.com'
  },
  {
    id: 3,
    image: IMG,
    title: 'name of project',
    github: 'http://github.com',
    demo: 'http://demo.com'
  },
  {
    id: 4,
    image: IMG,
    title: 'name of project',
    github: 'http://github.com',
    demo: 'http://demo.com'
  },
  {
    id: 5,
    image: IMG,
    title: 'name of project',
    github: 'http://github.com',
    demo: 'http://demo.com'
  },
  {
    id: 6,
    image: IMG,
    title: 'name of project',
    github: 'http://github.com',
    demo: 'http://demo.com'
  }
]
function Skills() {
  return (
    <section id='skills'>
      <h5>My Recet Work</h5>
      <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG} alt={title} />
            </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'> Live Demo</a>
              </div>
          </article>
              )
            })
          }
        </div>


    </section>
  )
}

export default Skills