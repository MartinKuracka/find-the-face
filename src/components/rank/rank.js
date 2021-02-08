import React from 'react';

const Rank = ({name, entries}) => {
	return (
	  <div className=''>
		<div className='white f3'>
		<div className='center w-40'>
			<h3 className=''>
				You can only submit <span className='yellow'>.jpg</span> and <span className='yellow'>.png </span>picture links, other formats will not work with this App
			</h3>
		</div>
			{name}{', your current entry count is ...'}
		</div>
		<div className='white f1'>
			{entries}
		</div>
	  </div>
	);
}

export default Rank;