import React from 'react';

const Navigation = ({onRouteChange}) => {
	return (
			<nav className='ma4 mt0'>
				<p className='f3 link dim black underline pa3 pt5 pointer br2 shadow-2' onClick={() => onRouteChange('signin')} style={{ height: 150, width: 150 }}> Sign Out</p>
			</nav>
	)
}

export default Navigation;