import React from 'react'
// Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
//Assets
import teamPhoto1 from '../Assets/team/team-1.jpg';
import teamPhoto2 from '../Assets/team/team-2.jpg';
import teamPhoto3 from '../Assets/team/team-3.jpg';
import teamPhoto4 from '../Assets/team/team-4.jpg';
const Team = () => {
    return (
        <div id='team'>
            <h1>TEAM</h1>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className='teamMembers container'>
                <div className='teamMember'>
                    <img src={teamPhoto1} alt='' />
                    <div className='teamMemberDetails'>
                        <h5>Walter White</h5>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div className='teamMenberSocial'>
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <div className='teamMember'>
                    <img src={teamPhoto2} alt='' />
                    <div className='teamMemberDetails'>
                        <h5>Sarah Jhonson</h5>
                        <p>Product Manager</p>
                    </div>
                    <div className='teamMenberSocial'>
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <div className='teamMember'>
                    <img src={teamPhoto3} alt='' />
                    <div className='teamMemberDetails'>
                        <h5>William Anderson</h5>
                        <p>CTO</p>
                    </div>
                    <div className='teamMenberSocial'>
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <div className='teamMember'>
                    <img src={teamPhoto4} alt='' />
                    <div className='teamMemberDetails'>
                        <h5>Amanda Jepson</h5>
                        <p>Accountant</p>
                    </div>
                    <div className='teamMenberSocial'>
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team