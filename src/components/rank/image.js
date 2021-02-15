import React from 'react';
import pic from '../../img/face.png'

const Image = () => {
	return(
		<div className='item-e center ma5 mt6' style={{width: 200, height: 200}}>
			<img src={pic} />
		</div>
		)
}

export default Image