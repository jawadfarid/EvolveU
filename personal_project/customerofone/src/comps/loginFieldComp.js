import React from 'react'
import './loginFieldComp.css'

class LoginField extends React.Component {
	render(){

		return(
				<div>
					<div className='loginBody' onClick={this.props.logOut}>
					</div>
					<div id='loginForm'>
						<img id='logo' src='favicon.ico'></img>
						<div className='loginField'>
							<h3 id='welcome'>Sign In</h3>
							<p id='continue'>to continue to Account of One</p>
						</div>
						<input placeholder='Username' onChange={this.props.inputChange}></input>
						<input placeholder='Password' type='password'></input>
						<button id='innerLog' onClick={this.props.login}>Log In</button>
					</div>
				</div>
			)
	}
}

export default LoginField