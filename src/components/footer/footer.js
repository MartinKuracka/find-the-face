import React from 'react';
import FootImage from '../../img/logo_footer.png'
import './footer.css';

const Footer = () => {
    return(
        <div className='footer w-100 flex center'>
             <div className='white'>
                <img className='center f-i-size' src={FootImage} alt='footer'></img>
                <br/>
                <p className='center f-text'>
                  Designed with love by WebMarK
                </p>
             </div>
        </div>

    )
}

export default Footer;