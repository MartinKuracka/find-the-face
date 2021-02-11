import React from 'react';
import './rank.css';

const NoRank = ({entries}) => {
		return (
			<div className='rank-number tc f1'>
				{entries}
			</div>
		)
}

export default NoRank;