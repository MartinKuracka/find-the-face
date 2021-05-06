import React from 'react';
import Popup from '../popup/popup'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			popupstate: false,
			popupmessage: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	togglePop = () => {
    this.setState({popupstate: !this.state.popupstate});
  }

  	changemessage = (message) => {
  	this.setState({popupmessage: message})
  	console.log('fromchangemessage',this.popupmessage)
  }

	onSubmitRegister = (props) => {
		this.setState({popupstate: true})
		this.changemessage('loading...')
		const ValidateEmail = (mail) => {
			 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email))
			  {
			  	return (true)
			  } return (
			  	this.changemessage('You have entered an invalid email address!'),
					this.setState({popupstate:true})
					)
		}
		const ValidatePassword = (pass) => {
			if (this.state.password.length > 6) {
				return (true)
			} return (
			  	this.changemessage('Password must be longer than 6 characters'),
					this.setState({popupstate:true})
					)
		}
		if (this.state.name !== '' && this.state.email !== '' && this.state.password !== ''){
			if (ValidateEmail(true) && ValidatePassword(true)) {
				fetch('https://desolate-harbor-55159.herokuapp.com/register', {
					method: 'post',
					headers: {'Content-type': 'application/json'},
					body: JSON.stringify({
						name: this.state.name,
						email: this.state.email,
						password: this.state.password
					})
				})
				.then(response => response.json())
				.then(user => {
					if (user !== 'unable to register') {
						this.props.loadUser(user)
						this.props.onRouteChange('home')
					} else {
						return(
							this.changemessage('This user email is already registered'),
							this.setState({popupstate:true})
							)
					}
				})
			}
		} else {
			return(
				this.changemessage('All fields must be filled'),
				this.setState({popupstate:true})
				)
		}
	}

	render() {
	  return (
	  	<div className='scale-in-hor-center'>
	  		<div className='center mt4'>
					 {this.state.popupstate ? <Popup className='center w-100 flex' toggle={this.togglePop} message={this.state.popupmessage}/> : null}
			</div>
		  	<div className='center ma mt3-l'>
			    <article className="signin w-30 w-50-m center br3 pa3 pa3-ns ba shadow-2">
					<main className="pa4 black-80">
						<div className="measure">
							<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								<legend className="f2 fw6 ph0 mh0">Register</legend>
								<div className="text-focus-in mt3">
									<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
									<input
										className=" pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100"
										type="text"
										name="name"
										id="name"
										onChange={this.onNameChange}
									/>
								</div>
								<div className="text2-focus-in mt3">
									<label className="db bafw6 lh-copy f6" htmlFor="email-address">Email</label>
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
							<div className='text4-focus-in center w-100'>
								<div className="center">
									<input
									onClick={() => this.props.onRouteChange('signin')} className="pa3 pv2 input-reset br2 ba b--black bg-transparent bg-dark-blue white grow pointer f5 dib"
									type="submit"
									value="Sign In" />
								</div>
								<div className="center">
									<input
									onClick={this.onSubmitRegister} className="pa3 pv2 input-reset ba b--black br2 bg-transparent bg-dark-blue white grow pointer f5 dib"
									type="submit"
									value="Register" />
								</div>
							</div>
						</div>
					</main>
				</article>
			</div>
	  	</div>
	  );
	}
}

export default Register;