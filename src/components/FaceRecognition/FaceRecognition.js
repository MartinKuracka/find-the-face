import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='item-e center ma'>
    	<div className='absolute mt2 z-2'>
    		<img className='image br4 ma4 z-2' id='inputImage' src={imageUrl} alt='' />
    		<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
    		</div>
    	</div>
    </div>
  );
}

export default FaceRecognition;