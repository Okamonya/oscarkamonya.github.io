import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

// import Swiper core and required modules
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Experience() {
  return (
    <section id='experience' className='experience'>
      <h5>My Tech Stack</h5>
      <h2>Experience</h2>

      <Swiper
      
      // install Swiper modules
      modules={[ Pagination, Autoplay]}
      spaceBetween={50}
      breakpoints={{

          480: {
            slidesPerView: 1,
            noSwiping: true,
            allowSlidePrev: true,
            allowSlideNext: true
          },
      
          992: {
            slidesPerView: 2,
            noSwiping: false,
            allowSlidePrev: false,
            allowSlideNext: false,
          },
      
          1024: {
            slidesPerView: 2,
            noSwiping: false,
            allowSlidePrev: false,
            allowSlideNext: false,
            pagination: false
          }
      }}
      loop={true}
      autoplay={{delay: 4000}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
              <h4>HTML</h4>
                <small className='text-light'>Experience</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Thymleaf</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='container experience__container'>
        <div className='experience__backend'>
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Springboot</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>novice</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>C</h4>
                <small className='text-light'>advanced beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>
  )
}

export default Experience