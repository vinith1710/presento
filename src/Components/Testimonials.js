import React from 'react'
import OwlCarousel from 'react-owl-carousel';
// Assets 
import testimonial1 from '../Assets/testimonials/testimonials-1.jpg';
import testimonial2 from '../Assets/testimonials/testimonials-2.jpg';
import testimonial3 from '../Assets/testimonials/testimonials-3.jpg';
import testimonial4 from '../Assets/testimonials/testimonials-4.jpg';
import testimonial5 from '../Assets/testimonials/testimonials-5.jpg';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
const Testimonials = () => {
    return (
        <div id='testimonials'>
            <h1>TESTIMONIALS</h1>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <OwlCarousel className='owl-theme owl-testimonial' loop dotsEach  autoplayTimeout={2000} responsive={{0:{items:1},600:{items:2},1000:{items:3}}}>
                <div class='item'>
                    <img src={testimonial1} alt='' />
                    <h5>Saul Goodman</h5>
                    <p>Ceo & Founder</p>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <div class='item'>
                    <img src={testimonial2} alt='' />
                    <h5>Sara Wilsson</h5>
                    <p>Designer</p>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <div class='item'>
                    <img src={testimonial3} alt='' />
                    <h5>Jena Karlis</h5>
                    <p>Store Owner</p>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <div class='item'>
                    <img src={testimonial4} alt='' />
                    <h5>Matt Brandon</h5>
                    <p>Free Lancer</p>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <div class='item'>
                    <img src={testimonial5} alt='' />
                    <h5>John Larson</h5>
                    <p>Entrepreneur</p>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Testimonials