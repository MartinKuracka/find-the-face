import React from 'react';
import './header.css';
import image from '../../img/hdrimg.png';
import HeaderBackground from '../../img/sample.png';

const Header = () => {
	return (
		<div className=' header'>
			<img className='header-background' src={HeaderBackground}/>
			<img className='slide-in-left head-img content-start tl' src={image} alt='header'/>
			<h2 className='slide-in-left hd-margin w-30'>
				Magic App to detect faces in Your pictures
			</h2>
		</div>
	)
}

export default Header;