import React from 'react';

const Register = ({onRouteChange}) => {
  return (
    <div className='center ma mt6-l'>
    	<article className=" w-30 w-50-m center br3 pa3 pa3-ns mv2 ba shadow-2">
	   		<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Register</legend>
				       <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
				      </div>				      
				    </fieldset>
				    <div className='center w-100'>
					    <div className="center">
					      <input 				      	
					      	onClick={() => onRouteChange('signin')} className="pa3 pv2 input-reset br2 ba b--black bg-transparent bg-blue white grow pointer f5 dib" 
					      	type="submit" 
					      	value="Sign In" />
					    </div>		
					    <div className="center">
					      <input 				      	
					      	onClick={() => onRouteChange('home')} className="pa3 pv2 input-reset ba b--black br2 bg-transparent bg-blue white grow pointer f5 dib" 
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

export default Register;