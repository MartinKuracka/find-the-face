import React from 'react';
import './header.css';
import image from '../../img/hdrimg.png';

const Header = () => {
	return (
		<div className=' header'>
			<img className='slide-in-left head-img content-start tl' src={image} alt='header' width='15%' />
			<h2 className='slide-in-left hd-margin w-25'>
				Magic App to detect face in Your pictures
			</h2>
		</div>
	)
}

export default Header;