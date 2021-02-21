import React from 'react';
import './navigation.css';

const Navigation = ({onRouteChange}) => {
	return (
		<div className='nav tc content-end'>
			<nav className='content-end '>
				<p className='nav-size link dim underline pointer br2'
					onClick={() => onRouteChange('signin')}> Sign Out</p>
			</nav>
		</div>
		)
}

export default Navigation;