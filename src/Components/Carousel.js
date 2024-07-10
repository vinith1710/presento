import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//Assets
import carouselImg1 from '../Assets/carousel/client-1.png';
import carouselImg2 from '../Assets/carousel/client-2.png';
import carouselImg3 from '../Assets/carousel/client-3.png';
import carouselImg4 from '../Assets/carousel/client-4.png';
import carouselImg5 from '../Assets/carousel/client-5.png';
import carouselImg6 from '../Assets/carousel/client-6.png';
import carouselImg7 from '../Assets/carousel/client-7.png';
import carouselImg8 from '../Assets/carousel/client-8.png';

const Carousel = () => {
  return (
    <>
        <OwlCarousel className='owl-theme owl-theme-1' loop margin={10} dotsEach autoplay  autoplayTimeout={2000} responsive={{0:{items:2},600:{items:3},1000:{items:6}}}>
          <div class='item'>
            <img src={carouselImg1} alt='' />
          </div>
          <div class='item'>
            <img src={carouselImg2} alt='' />
          </div>
          <div class='item'>
            <img src={carouselImg3} alt='' />
          </div>
          <div class='item'>
            <img src={carouselImg4} alt='' />
          </div>
          <div class='item'>
            <img src={carouselImg5} alt='' />
          </div>
          <div class='item'>
            <img src={carouselImg6} alt='' />
          </div>
          <div class='item'>
            <img src={carouselImg7} alt='' />
          </div>
          <div class='item'>
            <img src={carouselImg8} alt='' />
          </div>
        </OwlCarousel>
    </>
  )
}

export default Carousel