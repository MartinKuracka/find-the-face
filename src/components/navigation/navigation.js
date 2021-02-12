import React from 'react';
import './navigation.css';
import Tilt from 'react-tilt';

const Navigation = ({onRouteChange}) => {
	return (
		<div className='nav tc content-end'>
			<Tilt className="Tilt br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
		  	<nav className='content-end'>
					<p className='nav-box f3 link dim black underline pa3 pt5 pointer br2 shadow-2'
					 	 onClick={() => onRouteChange('signin')} style={{ height: 150, width: 150 }}> Sign Out</p>
				</nav>
			</Tilt>
			
		</div>
		)
	
}

export default Navigation;