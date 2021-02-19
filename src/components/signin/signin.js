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
			fetch('https://desolate-harbor-55159.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		}).then(response => response.json())
			.catch(() => {
				this.changemessage('Could not fetch data')
				this.setState({popupstate:true})
			})
				.then(user => {
					if (user.email === this.state.signInEmail) {
						this.props.loadUser(user)
						this.props.onRouteChange('home') 
					} else {
						return (
							this.setState({popupmessage: 'wrong credentials'}),
							console.log('message from return', this.popupmessage),						
							this.changemessage('wrong credentials')
						)
					}						
				})							
	}

	togglePop = () => {
    this.setState({popupstate: !this.state.popupstate});
  }

  changemessage = (message) => {
  	this.setState({popupmessage: message})
  	console.log('fromchangemessage',this.popupmessage)
  }

	onSubmitSignIn = (props) => {
		this.setState({popupstate: !this.state.popupstate}) //this is working - proven!!!!
		this.setState({popupmessage: 'loading...'}) // this works too !!!
		console.log('fetch initiated')
		this.dataFetching()
	
	}

	onRegisterPress = () => {
		this.props.onRouteChange('register')
	}
 
	render() {
		return (
			<div className='slide-in-right'>
				<div className='center mt4'>		
					 {this.state.popupstate ? <Popup className='center w-100 flex' toggle={this.togglePop} message={this.state.popupmessage}/> : null}		
				</div>
				 <div className='center  ma mt3-l'>
							<article className="signin w-30-l w-50-m center br3 pa3 pa3-ns ba shadow-2">
								   		<main className="pa4 black-80">
											  <div className="measure">
											    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
											      <legend className="text-focus-in f2 fw6 ph0 mh0">Sign In</legend>
											      <div className="text2-focus-in mt3">
											        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
											        <input 
											        	className="pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100" 
											        	type="email" 
											        	name="email-address"  
											        	id="email-address"
											        	onChange={this.onEmailChange}
											        />
											      </div>
											      <div className="text3-focus-in mv3">
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
											    <div className="text4-focus-in">
											      <input 
											      	onClick={this.onSubmitSignIn}
											      	className="ph3 br2 bg-dark-blue white pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
											      	type="submit" 
											      	value="Sign in" />
											    </div>
											    <div className="text4-focus-in lh-copy mt3">
											      <p 
											      onClick={this.onRegisterPress} 
											      className="f6 link black db pointer">Register</p>
											    </div>
												</div>
											</main>
										</article>
						</div>
						
			</div>
	  );
	}
}

export default SignIn;