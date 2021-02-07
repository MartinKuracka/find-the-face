import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
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

	onSubmitRegister = (props) => {
		const ValidateEmail = (mail) => {			 
			 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email))
			  {
			  	return (true)
			  }
			  	this.props.state.popup('invalid email')
			  	alert("You have entered an invalid email address!")			           
		}
		const ValidatePassword = (pass) => {
			if (this.state.password.length > 6) {
				return (true)
			} alert('Password must be longer than 6 characters')			 
		}
		if (this.state.name !== '' && this.state.email !== '' && this.state.password !== ''){
			if (ValidateEmail(true) && ValidatePassword(true)) {
				fetch('http://localhost:3000/register', {
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
							alert('This user email is already registered')
						}
					})
			}
		} else {
			alert('All fields must be filled')
		}
	}

	render() {
	  return (
	    <div className='center ma mt3-l'>
	    	<article className=" w-30 w-50-m center br3 pa3 pa3-ns mv2 ba shadow-2">
		   		<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f2 fw6 ph0 mh0">Register</legend>
					       <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input 
					        	className="pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100" 
					        	type="text" 
					        	name="name"  
					        	id="name" 
					        	onChange={this.onNameChange}
					        />
					      </div>
					      <div className="mt3">
					        <label className="db bafw6 lh-copy f6" htmlFor="email-address">Email</label>
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
					    <div className='center w-100'>
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
	  );
	}
}

export default Register;