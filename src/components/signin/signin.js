import React from 'react';

const SignIn = ({imageUrl, box, onRouteChange}) => {
  return (
    <div className='center ma mt3-l'>
    	<article className=" w-30 w-50-m center br3 pa3 pa3-ns mv2 ba shadow-2">
	   		<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 br2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 br2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="password" name="password"  id="password" />
				      </div>				      
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={() => {onRouteChange('home')}}
				      	className="ph3 br2 bg-dark-blue white pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
				      	type="submit" 
				      	value="Sign in" />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => {onRouteChange('register')}} className="f6 link black db pointer">Register</p>
				    </div>
					</div>
				</main>
			</article>
    </div>
  );
}

export default SignIn;