import React from 'react'
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <div id='footer'>
                <div className='footerTop'>
                    <div className='column1'>
                        <h3>Presento</h3><br /><br />
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p><br />
                        <p>Phone: +1 5589 55488 55</p>
                        <p>Email: info@example.com</p>
                        <div className='social'>
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                    <div className='column2'>
                        <h5>Useful Links</h5>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Terms of service</p>
                        <p>Privacy policy</p>
                    </div>
                    <div className='column3'>
                        <h5>Our Services</h5>
                        <p>Web Design</p>
                        <p>Web Development</p>
                        <p>Product Management</p>
                        <p>Marketing</p>
                        <p>Graphic Design</p>
                    </div>
                    <div className='column4'>
                        <h5>Our Newsletter</h5>
                        <h6 className='d-none d-md-flex'>Subscribe to our newsletter and receive the latest news about our </h6>
                        <h6 className='d-none d-md-flex'>products and services!</h6>
                        <h6 className='d-none footerC4Res'>Subscribe to our newsletter and receive the latest news about our products and services!</h6>
                        <div className='search'>
                            <div className='textbox'></div>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='footerBottom'>
                    <h6>© Copyright Presento All Rights Reserved</h6>
                    <p>Designed by <span>Vinith.M</span></p>
                </div>
            </div>

        </>
    )
}

export default Footer