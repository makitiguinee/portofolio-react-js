import React from 'react'
import Wave from '../../img/wave.png';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Twite from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}} />
        <div className="f-content">
            <span>bailoconde623@gmai.com</span>
            <div className="f-icons">
              <a href="https://www.facebook.com/mamadoubailo.conde.393"><Facebook color="white" size="3rem"/></a>
              <a href="https://www.linkedin.com/in/bailo-conde-762330205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Insta color="white" size="3rem"/></a>
              <a href="https://github.com/makitiguinee/makitiguinee.github.io"><Twite color="white" size="3rem"/></a>
              <a href="https://www.instagram.com/bailo_conde?igsh=eHR0YzNqdzBjNW1ohttps://www.instagram.com/bailo_conde?igsh=eHR0YzNqdzBjNW1o"><Linkedin color="white" size="3rem"/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
