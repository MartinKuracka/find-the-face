import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import Face from './face.png';

const Logo = () => {
	return (
	  <div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2 pa2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
		  <img className="Tilt-inner" src={Face} alt='logo'/>
		</Tilt>
	  </div>
	);
}

export default Logo;