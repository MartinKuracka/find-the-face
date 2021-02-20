import React from 'react';
import './navigation.css';
import Tilt from 'react-tilt';

const Navigation = ({onRouteChange}) => {
	return (
		<div className='nav tc content-end'>
			<Tilt className="Tilt br2" options={{ max : 55 }} >
		  	<nav className='content-end '>
					<p className='nav-size link dim underline pointer br2'
					 	 onClick={() => onRouteChange('signin')}> Sign Out</p>
				</nav>
			</Tilt>
			
		</div>
		)
	
}

export default Navigation;