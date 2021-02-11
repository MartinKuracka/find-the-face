import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onInputChange, onPictureSumit}) => {
	return (
	  <div className='item-d items-baseline'>
		<div className='tc center'>
			<div className='items-baseline form center pa4 br3 shadow-3'>
			  <input className='f4 pa2 w-70 center' type='text' placeholder='Find The Face' 
			  			 onChange={onInputChange}/>
			  <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
			  				onClick={onPictureSumit}>
			  				Detect
			  </button>
			</div>
	    </div>
	  </div>
	);
}

export default ImageLinkForm; 