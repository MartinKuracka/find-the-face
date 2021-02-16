import React from 'react';
import './popup.css';

class Popup extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			togglepopup: this.props.tooglePopup,
			popupmessage: this.props.popupmessage
		}
	}

	tooglePopup = (value) => {
		this.props.togglePopup(false)
		console.log('toggled')
	}

	render () {
		return (
			<div className='popup-box center w-20 br3 mt5 b--green b--solid' onClick={this.tooglePopup} >
				{ <div className='tc'>
						<h1>
							{this.state.popupmessage}
						</h1>
						<p>click me</p>
					</div>
				}
			</div>
		)
	}
}

export default Popup;