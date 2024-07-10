import React, { useEffect } from 'react'
// Assets 
import portfilioImage1 from '../Assets/portfolio/app-1.jpg';
import portfilioImage2 from '../Assets/portfolio/app-2.jpg';
import portfilioImage3 from '../Assets/portfolio/app-3.jpg';
import portfilioImage4 from '../Assets/portfolio/product-1.jpg';
import portfilioImage5 from '../Assets/portfolio/product-2.jpg';
import portfilioImage6 from '../Assets/portfolio/product-3.jpg';
import portfilioImage7 from '../Assets/portfolio/branding-1.jpg';
import portfilioImage8 from '../Assets/portfolio/branding-2.jpg';
import portfilioImage9 from '../Assets/portfolio/branding-3.jpg';
import portfilioImage10 from '../Assets/portfolio/books-1.jpg';
import portfilioImage11 from '../Assets/portfolio/books-2.jpg';
import portfilioImage12 from '../Assets/portfolio/books-3.jpg';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//AOS
import Aos from 'aos';
import 'aos/dist/aos.css';
const Portfolio = () => {

    useEffect(()=> {
        Aos.init();
    })

    const gridFilter = (e) => {
        let titleList = document.querySelectorAll('#portfolio ul li')
        for (let index = 0; index < titleList.length; index++) {
            titleList[index].removeAttribute('class', 'liactive');
        }
        e.target.setAttribute('class', 'liactive');
        let itemlist = document.querySelectorAll('.grid-item');
        for (let index = 0; index < itemlist.length; index++) {
            if (itemlist[index].title === e.target.title) {
                itemlist[index].removeAttribute('hidden', '')
            }
            else if (e.target.title === 'all') {
                itemlist[index].removeAttribute('hidden', '')
            }
            else {
                itemlist[index].setAttribute('hidden', '')
            }
        }
    }

    return (
        <>
            <div id='portfolio'>
                <h1>Portfolio</h1>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                <ul>
                    <li className='liactive' onClick={gridFilter} title='all'>All</li>
                    <li onClick={gridFilter} title='app'>App</li>
                    <li onClick={gridFilter} title='product'>Product</li>
                    <li onClick={gridFilter} title='branding'>Branding</li>
                    <li onClick={gridFilter} title='books'>Books</li>
                </ul>
                <div className='portfolio-grid'>
                    <div className='grid-item' title='app'>
                        <img src={portfilioImage1} alt='' />
                        <div className='grid-content'>
                            <h6>App 1</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='product'>
                        <img src={portfilioImage2} alt='' />
                        <div className='grid-content'>
                            <h6>Product 1</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='branding'>
                        <img src={portfilioImage3} alt='' />
                        <div className='grid-content'>
                            <h6>Branding 1</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='books'>
                        <img src={portfilioImage4} alt='' />
                        <div className='grid-content'>
                            <h6>Books 1</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='app'>
                        <img src={portfilioImage5} alt='' />
                        <div className='grid-content'>
                            <h6>App 2</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='product'>
                        <img src={portfilioImage6} alt='' />
                        <div className='grid-content'>
                            <h6>Product 2</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='branding'>
                        <img src={portfilioImage7} alt='' />
                        <div className='grid-content'>
                            <h6>Branding 2</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='books'>
                        <img src={portfilioImage8} alt='' />
                        <div className='grid-content'>
                            <h6>Books 2</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='app'>
                        <img src={portfilioImage9} alt='' />
                        <div className='grid-content'>
                            <h6>App 3</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='product'>
                        <img src={portfilioImage10} alt='' />
                        <div className='grid-content'>
                            <h6>Product 3</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='branding'>
                        <img src={portfilioImage11} alt='' />
                        <div className='grid-content'>
                            <h6>Branding 3</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className='grid-item' title='books'>
                        <img src={portfilioImage12} alt='' />
                        <div className='grid-content'>
                            <h6>Books 3</h6>
                            <div className='grid-content-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio