// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/carousel1.jpg'
import bgimg2 from '../assets/images/carousel2.jpg'
import bgimg3 from '../assets/images/carousel3.jpg'
import bgimg4 from '../assets/images/carousel4.jpg'
import bgimg5 from '../assets/images/carousel5.jpg'

export default function Carousel() {
  return (
    <div className='container px-6 py-5 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='.'
            
          />
      
        
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
            image={bgimg2}
            text='Embark on a Literary Adventure Like Never Before! Dive into a World of Imagination and Knowledge.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Embark on a Literary Adventure Like Never Before! Dive into a World of Imagination and Knowledge.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text='Embark on a Literary Adventure Like Never Before! Dive into a World of Imagination and Knowledge.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg5}
            
            text='Embark on a Literary Adventure Like Never Before! Dive into a World of Imagination and Knowledge.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
