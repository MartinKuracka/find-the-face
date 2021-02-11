import React from 'react';
// import './rank.css';
import NoRank from './numberank';

const Rank = ({name}) => {
	return (
	  <div className='item-b f5 mt4'>
		<div className='fw1-l'>
			<span className='f3'>Hi {name},</span>
			<br/>
				{'your current entry count is ...'}
			</div>			
      </div>  
	);
}

export default Rank;