import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
	 console.log('recog',box)
  return (
    <div className='item-e center ma'>
    	<div className='absolute mt2 z-2'>
    		<img className='image br4 ma4 z-2' id='inputImage' src={imageUrl} alt=''/>
    			{ box.map((element) => {
	    			return (
	    				<div className='bounding-box' style={{top: element.topRow, right: element.rightCol, bottom: element.bottomRow, left: element.leftCol}}>
		    			</div>
	    				)	
    					}
    				)
    			}
    	</div>
    </div>
  );
}

export default FaceRecognition;

	
    						