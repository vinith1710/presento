import React from 'react'

//Bootstrap
import Button from 'react-bootstrap/Button';
//Assets
import homeImage from '../Assets/images/hero-bg.jpg';
// import videoSvg from '../Assets/SVG/circle-play-regular.svg';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'


const Home = () => {
  return (
    <>
      <div className='home-container' id='home' >
        <img src={homeImage} alt='' />
      </div>
      <div className='home-wrapper'>
        <h1>Better Digital experience</h1>
        <h1>with Presento</h1>
        <p>We are team of talented designers making websites with</p>
        <p>Bootstrap</p>
        <div className='home-video'>
          <Button variant="danger">Get Started</Button>{' '}
          <span className='home-video-span'><FontAwesomeIcon icon={faCirclePlay} style={{ color: 'red' }} /><span>Watch Video</span></span>
        </div>
      </div>
    </>
  )
}

export default Home