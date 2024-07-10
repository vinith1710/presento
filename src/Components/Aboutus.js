import { useState } from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSuitcase, faGem, faTowerBroadcast, faFaceSmile, faBook, faHeadphonesSimple, faUserGroup, faBinoculars, faBox, faSun, faTerminal, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
//Assets
import working1 from '../Assets/images/working-1.jpg';
import working2 from '../Assets/images/working-2.jpg';
import working3 from '../Assets/images/working-3.jpg';
import working4 from '../Assets/images/working-4.jpg';

const Aboutus = () => {

    const [tabIndex, setTabIndex] = useState(1);
    const changeIndex = (index) => {
        setTabIndex(index);
    }


    return (
        <>
            <div id='about' className='about-top'>
                <Container>
                    <Row className='rowResponsive'>
                        <Col>
                            <h1>Voluptatem dignissimos</h1>
                            <h1>provident quasi</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                            <div className='about-button'>
                                <span>ABOUT US</span><FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </Col>
                        <Col className='about-top-right'>
                            <Row className='rowResponsive'>
                                <Col><FontAwesomeIcon icon={faSuitcase} />
                                    <h4>Corporis voluptates sit</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </Col>
                                <Col><FontAwesomeIcon icon={faGem} />
                                    <h4>Ullamco laboris nisi</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p></Col>
                            </Row>
                            <Row className='rowResponsive'>
                                <Col><FontAwesomeIcon icon={faTowerBroadcast} />
                                    <h4>Labore consequatur</h4>
                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p></Col>
                                <Col><FontAwesomeIcon icon={faUserGroup} />
                                    <h4>Beatae veritatis</h4>
                                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='about-middle'>
                <Row className='rowResponsive'>
                    <Col>
                        <div className='top-cirle'><FontAwesomeIcon icon={faFaceSmile} /></div>
                        <div className='middle-box'>

                            <h2>232</h2>
                            <p>Happy Clients</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='top-cirle'><FontAwesomeIcon icon={faBook} /></div>
                        <div className='middle-box'>

                            <h2>521</h2>
                            <p>Projects</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='top-cirle'><FontAwesomeIcon icon={faHeadphonesSimple} /></div>
                        <div className='middle-box'>

                            <h2>1463</h2>
                            <p>Hours of Support</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='top-cirle'><FontAwesomeIcon icon={faUserGroup} /></div>
                        <div className='middle-box'>

                            <h2>15</h2>
                            <p>Hard Workers</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='about-bottom'>
                <ul >
                    <li>
                        <div className={tabIndex === 1 ? 'about-bottom-heading-active' : 'about-bottom-heading'} onClick={() => changeIndex(1)}>
                            <FontAwesomeIcon icon={faBinoculars} />
                            <h4>Modi sit est dela pireda nest</h4>
                        </div>
                    </li>
                    <li>
                        <div className={tabIndex === 2 ? 'about-bottom-heading-active' : 'about-bottom-heading'} onClick={() => changeIndex(2)}>
                            <FontAwesomeIcon icon={faBox} />
                            <h4>Unde praesenti mara setra le</h4>
                        </div>

                    </li>
                    <li>
                        <div className={tabIndex === 3 ? 'about-bottom-heading-active' : 'about-bottom-heading'} onClick={() => changeIndex(3)}>
                            <FontAwesomeIcon icon={faSun} />
                            <h4>Pariatur explica nitro dela</h4>
                        </div>

                    </li>
                    <li>
                        <div className={tabIndex === 4 ? 'about-bottom-heading-active' : 'about-bottom-heading'} onClick={() => changeIndex(4)}>
                            <FontAwesomeIcon icon={faTerminal} />
                            <h4>Nostrum qui dile node ffeddce</h4>
                        </div>

                    </li>
                </ul>

                <div className='about-bottom-content'>
                    <div className={tabIndex === 1 ? 'tab-content-active' : 'tab-content'}>
                        <div className='aboutImgRes d-none '>
                            <img src={working1} alt='' />
                        </div>
                        <div className='left'>
                            <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className='d-none d-md-block'>
                            <img src={working1} alt='' />
                        </div>
                    </div>
                    <div className={tabIndex === 2 ? 'tab-content-active' : 'tab-content'}>
                    <div className='aboutImgRes d-none '>
                            <img src={working2} alt='' />
                        </div>
                        <div className='left'>
                            <h2>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h2>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>

                        </div>
                        <div className='d-none d-md-block'>
                            <img src={working2} alt='' />
                        </div>
                    </div>
                    <div className={tabIndex === 3 ? 'tab-content-active' : 'tab-content'}>
                    <div className='aboutImgRes d-none '>
                            <img src={working3} alt='' />
                        </div>
                        <div className='left'>
                            <h2>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h2>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='d-none d-md-block'>
                            <img src={working3} alt='' />
                        </div>
                    </div>
                    <div className={tabIndex === 4 ? 'tab-content-active' : 'tab-content'}>
                    <div className='aboutImgRes d-none '>
                            <img src={working4} alt='' />
                        </div>
                        <div className='left'>
                            <h2>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h2>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span><br />
                            <FontAwesomeIcon icon={faCheckDouble} /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                        </div>
                        <div className='d-none d-md-block'>
                            <img src={working4} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Aboutus