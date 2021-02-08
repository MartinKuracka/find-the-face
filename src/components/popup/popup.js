import React from 'react';
import './popup.css';

class Popup extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			togglepopup: ''
		}
	}

	tooglePopup = (value) => {
		this.setState({togglepopup: ''})
		console.log('toggled')
	}

	render () {
		return (
			<div className='popup-box center w-30' onClick={this.tooglePopup} >
				{ 
					<h1>
						This email is already registered
					</h1>
				}
			</div>
		)
	}
}

export default Popup;