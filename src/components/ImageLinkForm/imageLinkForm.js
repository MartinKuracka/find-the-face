import React from 'react';
import './imagelinkform.css';
import Popup from '../popup/popup';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
	return (
		<div className='item-d items-baseline'>
			<div className='tc center'>
				<div className='items-baseline form center pa-m br3 shadow-3'>
				<input className='f5 pa2 w-70 center' type='text' placeholder='Find The Face' 
							onChange={onInputChange}/>
				<button className='w-30 grow f5 link ph3 pv2 dib white bg-blue'
								onClick={onPictureSubmit}>
								Detect
				</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm; 