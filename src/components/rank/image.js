import React from 'react';
import pic from '../../img/face.png'

const Image = () => {
	return(
		<div className='item-e center ma4 mt6' style={{width: 300, height: 300}}>
			<img src={pic} />
		</div>
		)
}

export default Image