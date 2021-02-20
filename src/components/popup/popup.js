import React from 'react';
import './popup.css';

class Popup extends React.Component {

	handleClick = () => {
	   this.props.toggle();
	};

	render () {
		return (
			<div className='bounce-in-top popup-box pointer center pa2 w-20 br3 mt5 b--green b--solid' onClick={this.handleClick} >
				{ <div className='tc'>
						<h2>
							{this.props.message}
						</h2>
						<div>
							{this.props.message === 'loading...' || this.props.message === 'reading faces...'
							? null
							: <p>click me</p>}
						</div>						
					</div>
				}
			</div>
		)
	}
}

export default Popup;