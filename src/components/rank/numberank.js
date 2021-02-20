import React from 'react';
import './rank.css';

const NoRank = ({entries}) => {
		return (
			<div className='item-b'>
				<div className='flextext'>
					<div className='card-box black shake-bottom pb mb5 pa3 tc ma5 mt4 mr0 	number '>
						{entries}
					</div>
				</div>
			</div>
			
			
		)
}

export default NoRank;