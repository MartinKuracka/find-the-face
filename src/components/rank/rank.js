import React from 'react';
import './rank.css';
import NoRank from './numberank';

const Rank = ({name, entries}) => {
	return (
	  <div className=''>
			<div className='f4'>
				<div className=''>
					<h3 className='tc fw1-l'>
						Find links to face images ending with <span className='yellow'>.jpg</span> or <span className='yellow'>.png </span>and click 'Detect'
					</h3>
				</div>
				<div className='b--light-green bw2 br3 b--solid'>
						{name}{', your current entry count is ...'}
				</div>
			</div>
			<NoRank entries={entries} className='black rank-number'/>
	  </div>
	);
}

export default Rank;