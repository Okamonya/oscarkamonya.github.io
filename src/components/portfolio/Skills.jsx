import React from 'react'
import './skills.css'
import './projects'
import { Projects } from './projects'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Skills() {
  return (
    <section id='skills'>
      <h5>My Recet Work</h5>
      <h2>Portfolio</h2>

        
        <Swiper className="container portfolio__container"
              // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          breakpoints={{
            992: {
              slidesPerView: 3,
              noSwiping: false,
              allowSlidePrev: true,
              allowSlideNext: true
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{delay: 4000}}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          >
          {
            Projects.map((details) => {
              return (
          <SwiperSlide key={details.id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={details.image} alt={details.title} />
            </div>
              <h3>{details.title}</h3>
              <div className="portfolio__item-cta">
                <a href={details.github} className='btn' target='_blank'>Github</a>
                <a href={details.demo} className='btn btn-primary' target='_blank'> Live Demo</a>
              </div>
          </SwiperSlide>
              )
            })
          }
        </Swiper>
        


    </section>
  )
}

export default Skills