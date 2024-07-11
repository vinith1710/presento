import React, { useState } from 'react'
// CSS 
import './components.css'

//Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id='header' className='header-container'>
        <div className='header-logo'>
          <h2>Presento<span>.</span></h2>
        </div>
        <div className='header-nav d-none d-md-flex'>
          <span><a style={{ color: 'red' }} href='#home'>Home</a></span>
          <span><a href='#about'>About</a></span>
          <span><a href='#services'>Services</a></span>
          <span><a href='#portfolio'>Portfolio</a> </span>
          <span><a href='#team'>Team</a></span>
          <span><a href='blog'>Blog</a></span>
          <span><NavDropdown title="Dropdown" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action1">Dropdown 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Dropdown 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Dropdown 3</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Dropdown 4</NavDropdown.Item>
          </NavDropdown></span>
          <span><a href='#contact'>Contact</a></span>
          <Button variant="danger">Get Started</Button>{' '}
        </div>


        <div className='headerSidenav'>
        <Button variant="danger" className='headerButton' >Get Started</Button>{' '}
          <Button variant="primary" className='headerButton2' onClick={handleShow}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><h2>Presento<span>.</span></h2></Modal.Title>
            </Modal.Header>
            <Modal.Body className='header-nav'>
              <span><a style={{ color: 'red' }} href='#home' onClick={handleClose}>Home</a></span>
              <span><a href='#about' onClick={handleClose}>About</a></span>
              <span><a href='#services' onClick={handleClose}>Services</a></span>
              <span><a href='#portfolio' onClick={handleClose}>Portfolio</a> </span>
              <span><a href='#team' onClick={handleClose}>Team</a></span>
              <span><a href='#blog' onClick={handleClose}>Blog</a></span>
              <span><NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">Dropdown 1</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Dropdown 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Dropdown 3</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Dropdown 4</NavDropdown.Item>
              </NavDropdown></span>
              <span><a href='#contact' onClick={handleClose}>Contact</a></span></Modal.Body>

          </Modal>

        </div>
      </div>
      <div id='toTheTop'>
        <a href='#home'>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </>
  )
}

export default Header