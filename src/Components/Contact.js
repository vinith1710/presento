import React from 'react'
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Contact</h1>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className='contact-content'>
                <div className='left'>
                    <div className='top contactRes'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h5>Address</h5>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                    <div className='bottom'>
                        <div className='bottom-left contactRes'>
                            <FontAwesomeIcon icon={faPhone} />
                            <h5>Call Us</h5>
                            <p>+1 5589 55488 55</p>
                        </div>
                        <div className='bottom-right contactRes'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h5>Email Us</h5>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className='right contactTextbox'>
                    <div className='inputTop'>
                    <input placeholder='Your Name'></input>
                    <input placeholder='Your Email'></input>
                    </div>
                    <input placeholder='Subject'></input>
                    <textarea placeholder='Message'></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact