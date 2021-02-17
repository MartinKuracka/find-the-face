import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import WM from './merged_logo_icon.png';

const Logo = () => {
	return (
	  <div className='ma4 mt3 pt2'>
			<Tilt className=" Tilt br2 shadow-3 pa2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			  <img className="Tilt-inner" src={WM} alt='logo'/>
			</Tilt>
	  </div>
	);
}

export default Logo;