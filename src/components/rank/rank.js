import React from 'react';
import './rank.css';
import NoRank from './numberank';

const Rank = ({name}) => {
	return (
	  <div className='item-b mt4'>
			<div className='f4'>
				<div className='item-b b--light-green bw2 br3 b--solid'>
						{name}{', your current entry count is ...'}
				</div>
			</div>
      </div>  
	);
}

export default Rank;