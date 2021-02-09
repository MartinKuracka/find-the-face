import React from 'react';

const Rank = ({name, entries}) => {
	return (
	  <div className=''>
			<div className='white f3'>
				<div className='center w-40'>
					<h3 className='fw1-l'>
						Find links to face images ending with <span className='yellow'>.jpg</span> or <span className='yellow'>.png </span>and click 'Detect'
					</h3>
				</div>
				<div className='w-30 center b--light-green bw2 br3 pa3 b--solid'>
						{name}{', your current entry count is ...'}
				</div>
			</div>
			<div className='white f1'>
				{entries}
			</div>
	  </div>
	);
}

export default Rank;