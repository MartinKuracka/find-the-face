import React from 'react';

const Navigation = ({onLoginIn}) => {
	return (
			<nav className='ma4 mt0'>
				<p className='f3 link dim black underline pa3 pt5 pointer br2 shadow-2' onClick={onLoginIn} style={{ height: 150, width: 150 }}> Sign In</p>
			</nav>
	)
}

export default Navigation;