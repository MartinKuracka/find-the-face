import React from 'react';
import FootImage from '../../img/logo_footer.png'

const Footer = () => {
    return(
        <div className='w-100 flex center'>
             <div className='footer white'>
                <img className='f-i-size' src={FootImage}></img>
                <br/>
                {'Designed with love by WebMarK'}           
             </div>
        </div>
       
    )
}

export default Footer;