import React from 'react';
import './rank.css';


const Rank = ({name}) => {
	name = name.toUpperCase();
	return (
	  <div className='item-a f4 mt4'>
		<div className='white fw1-l'>
			<div className='animatename'>
				<span className='animatename f2 fw7'>Hi {name},</span>
			</div>
			<br/>
				{'your current entry count is'}
			</div>			
      </div>  
	);
}

export default Rank;