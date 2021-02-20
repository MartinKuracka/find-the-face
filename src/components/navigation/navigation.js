import React from 'react';
import './navigation.css';
import Tilt from 'react-tilt';

const Navigation = ({onRouteChange}) => {
	return (
		<div className='nav tc content-end'>
			<Tilt className="Tilt br2" options={{ max : 55 }} >
		  	<nav className='content-end '>
					<p className='nav-size nav-box link dim white underline pa3 pt3 pointer br2 shadow-2 b--light-green b--solid'
					 	 onClick={() => onRouteChange('signin')}> Sign Out</p>
				</nav>
			</Tilt>
			
		</div>
		)
	
}

export default Navigation;