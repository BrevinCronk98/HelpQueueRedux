import React from 'react';
import firebase from 'firebase/app';

function Signin() {
	function doSignUp(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function() {
				console.log('Successfully Signed Up');
			})
			.catch(function(error) {
				console.log(error.message);
			});
	}
	return (
		<React.Fragment>
			<h1>Sign Up</h1>
			<form onSubmit={doSignUp}>
				<input type="text" name="email" placeholder="Enter Email" />
				<input type="password" name="password" placeholder="Enter a Password" />
				<button type="submit">Sign Up!!</button>
			</form>
		</React.Fragment>
	);
}

export default Signin;
