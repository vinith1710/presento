import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// Font 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

    return (
        <div id='faq'>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className='faqItems container'>
                <Button onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1} className={open1 ? 'faqItemActive' : ''}> Non consectetur a erat nam at lectus urna duis?
                    {open1 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
                    <Collapse in={open1}>
                        <div id="example-collapse-text">
                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </div>
                    </Collapse>
                </Button>
                <Button onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2} className={open2 ? 'faqItemActive' : ''}> Feugiat scelerisque varius morbi enim nunc faucibus?
                    {open2 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}

                    <Collapse in={open2}>
                        <div id="example-collapse-text">
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                    </Collapse>
                </Button>
                <Button onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3} className={open3 ? 'faqItemActive' : ''}> Dolor sit amet consectetur adipiscing elit pellentesque?
                    {open3 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}

                    <Collapse in={open3}>
                        <div id="example-collapse-text">
                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </div>
                    </Collapse>
                </Button>
                <Button onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4} className={open4 ? 'faqItemActive' : ''}> Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    {open4 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}

                    <Collapse in={open4}>
                        <div id="example-collapse-text">
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                    </Collapse>
                </Button>
                <Button onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5} className={open5 ? 'faqItemActive' : ''}> Tempus quam pellentesque nec nam aliquam sem et tortor?
                    {open5 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}

                    <Collapse in={open5}>
                        <div id="example-collapse-text">
                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                        </div>
                    </Collapse>
                </Button>
                <Button onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6} className={open6 ? 'faqItemActive' : ''} >Perspiciatis quod quo quos nulla quo illum ullam?
                    {open6 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}

                    <Collapse in={open6}>
                        <div id="example-collapse-text">
                            Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.
                        </div>
                    </Collapse>
                </Button>
            </div>
        </div>
    )
}

export default Faq