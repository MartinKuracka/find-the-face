import React from 'react';

const Navigation = () => {
	return (
		<div className='pt1'>
			<nav className='mt0'>
				<p className='f3 link dim black underline pa3 pointer br2 shadow-2' style={{ height: 60, width: 150 }}> Sign In</p>
			</nav>
			<nav className='mr4'>
				<p className='f3 link dim black underline pa3 pointer br2 shadow-2' style={{ height: 60, width: 150 }}> Sign Out</p>
			</nav>
		</div>
	)
}

export default Navigation;