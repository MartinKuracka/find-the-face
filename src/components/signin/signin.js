import React from 'react';
import './signin.css';
import Popup from '../popup/popup'

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			popupstate: false,
			popupmessage: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	dataFetching = (props) => {
			console.log('toggleModal after feth is ',this.state.popupstate)
			fetch('https://desolate-harbor-55159.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		}).then(response => response.json()).then(console.log('data fetched'))
				.then(user => {
					if (user.email === this.state.signInEmail) {
						this.props.loadUser(user)
						this.props.onRouteChange('home') 
					} else {
						return (
							alert('Wrong Credentials'),
							console.log('message from return'),
							this.setState({popupstate: false})
						)
					}
				})
	}

	// progressIndicator = () => {
	// 	console.log('triggered')
	// 	this.toggleModal()
	// }

	togglePopup = () => {
    this.setState({popupstate: true});
    console.log('popupstate is ',this.state.popupstate)
  }

	onSubmitSignIn = (props) => {
		this.togglePopup()
		console.log('fetch initiated')
		this.dataFetching()
	
	}

	onRegisterPress = () => {
		this.props.onRouteChange('register')
	}
 
	render() {
		return (
			<div>
				{this.state.popupstate === true
					? <Popup popupmessage={this.state.popupmessage} />
					: <div className='center  ma mt3-l'>
										<article className="signin w-30 w-40-m center br3 pa3 pa3-ns ba shadow-2">
								   		<main className="pa4 black-80">
											  <div className="measure">
											    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
											      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
											      <div className="mt3">
											        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
											        <input 
											        	className="pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100" 
											        	type="email" 
											        	name="email-address"  
											        	id="email-address"
											        	onChange={this.onEmailChange}
											        />
											      </div>
											      <div className="mv3">
											        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
											        <input 
											        	className="b pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100" 
											        	type="password" 
											        	name="password"  
											        	id="password"
											        	onChange={this.onPasswordChange}
											        />
											      </div>				      
											    </fieldset>
											    <div className="">
											      <input 
											      	onClick={this.onSubmitSignIn}
											      	className="ph3 br2 bg-dark-blue white pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
											      	type="submit" 
											      	value="Sign in" />
											    </div>
											    <div className="lh-copy mt3">
											      <p 
											      onClick={this.onRegisterPress} 
											      className="f6 link black db pointer">Register</p>
											    </div>
												</div>
											</main>
										</article>
						</div>}
			</div>
	  );
	}
}

export default SignIn;