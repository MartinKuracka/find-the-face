import React from 'react';
import './header.css';
import image from '../../img/hdrimg.png'

const Header = () => {
	return (
		<div className='header'>
			<img className='head-img content-start tl' src={image} alt='header' width='15%' />
			<h2 className='hd-margin h1-color skew-back w-25'>
				Magic App to detect face in Your picture
			</h2>
		</div>
	)
}

export default Header;