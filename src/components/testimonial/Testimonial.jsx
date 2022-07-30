import React from 'react'
import './testimonial.css'
import IMG from '../../assets/mee.png'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: IMG,
    name: 'Oscar Kamonya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius ipsum, facilis esse at assumenda vel, eos cupiditate et accusantium hic, aliquam dolores quos obcaecati? Maiores pariatur reiciendis vel! Veniam.'
  },
  {
    avatar: IMG,
    name: 'Oscar Kamonya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius ipsum, facilis esse at assumenda vel, eos cupiditate et accusantium hic, aliquam dolores quos obcaecati? Maiores pariatur reiciendis vel! Veniam.'
  },
  {
    avatar: IMG,
    name: 'Oscar Kamonya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius ipsum, facilis esse at assumenda vel, eos cupiditate et accusantium hic, aliquam dolores quos obcaecati? Maiores pariatur reiciendis vel! Veniam.'
  },
  {
    avatar: IMG,
    name: 'Oscar Kamonya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius ipsum, facilis esse at assumenda vel, eos cupiditate et accusantium hic, aliquam dolores quos obcaecati? Maiores pariatur reiciendis vel! Veniam.'
  },
  
]
function Testimonial() {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>


      <Swiper className='container testimonial__container'
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>



    </section>
  )
}

export default Testimonial