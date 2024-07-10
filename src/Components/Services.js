//Bootstrap
import React from 'react'
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faCalendar, faClipboardCheck, faSignal, faSuitcase, faSun } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <>
            <div id='services'>
                <h1>SERVICES</h1>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                <div className='services-grid'>
                    <div className='gridItem gridItem1'>
                        <FontAwesomeIcon icon={faSuitcase} />
                        <div className='gridItemText'>
                            <h3>lorem ipsum</h3>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className='gridItem gridItem2'>
                    <FontAwesomeIcon icon={faClipboardCheck} />
                        <div className='gridItemText'>
                            <h3>lorem ipsum</h3>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className='gridItem gridItem3'>
                    <FontAwesomeIcon icon={faSignal} />
                        <div className='gridItemText'>
                            <h3>lorem ipsum</h3>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className='gridItem gridItem4'>
                    <FontAwesomeIcon icon={faBinoculars} />
                        <div className='gridItemText'>
                            <h3>lorem ipsum</h3>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className='gridItem gridItem5'>
                    <FontAwesomeIcon icon={faSun} />
                        <div className='gridItemText'>
                            <h3>lorem ipsum</h3>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className='gridItem gridItem6'>
                    <FontAwesomeIcon icon={faCalendar} />
                        <div className='gridItemText'>
                            <h3>lorem ipsum</h3>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services