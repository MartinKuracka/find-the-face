import React from 'react';
import './rank.css';

const NoRank = ({entries}) => {
		return (
			<div className='animaterank item-b br4 pt5 pb mb5 tc ma5 mt4 mr0'>
				{entries}
			</div>
		)
}

export default NoRank;