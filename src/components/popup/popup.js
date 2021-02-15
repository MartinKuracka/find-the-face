import React from 'react';
import './popup.css';

class Popup extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			togglepopup: '',
			popupmessage: 'loading'
		}
	}

	tooglePopup = (value) => {
		this.setState({togglepopup: ''})
		console.log('toggled')
	}

	render () {
		return (
			<div className='popup-box center w-30 br3 mt5' onClick={this.tooglepopup} >
				{ 
					<h1>
						{this.state.popupmessage}
					</h1>
				}
			</div>
		)
	}
}

export default Popup;