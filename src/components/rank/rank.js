import React from 'react';
// import './rank.css';


const Rank = ({name}) => {
	name = name.toUpperCase();
	return (
	  <div className='item-a f4 mt4'>
		<div className='white fw1-l'>
			<span className='f2 fw7'>Hi {name},</span>
			<br/><br/>
				{'your current entry count is'}
			</div>			
      </div>  
	);
}

export default Rank;