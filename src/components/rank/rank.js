import React from 'react';
import './rank.css';


const Rank = ({name}) => {
	name = name.toUpperCase();
	return (
	  <div className='item-a f4 mt4'>
		<div className='card-box fw1-l pa2'>
			<div className='tracking-in-expand'>
				<span className='tracking-in-expand content-center  f3 fw7'>Hi {name},</span>
			</div>
			<div className='tracking-in-expand'>
			{'your current entry count is'}
			</div>
				
		</div>			
      </div>  
	);
}

export default Rank;