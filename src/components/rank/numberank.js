import React from 'react';
import './rank.css';

const NoRank = ({entries}) => {
		return (
			<div className='item-b'>
				<div className='flextext'>
					<div className='shake-bottom br4 pb mb5 pa3 tc ma5 mt4 mr0 b--light-green b--solid 	number '>
						{entries}
					</div>
				</div>
			</div>
			
			
		)
}

export default NoRank;