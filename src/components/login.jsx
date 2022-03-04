import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
	//username = React.createRef(); when we want to get the actual dom element value we have to use React.createRef() Method

	state = {
		data: { username: "", password: "" },
		errors: {},
	};

	schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	};

	doSubmit = () => {
		console.log("submitted", this.state.username);
	};

	render() {
		return (
			<div>
				<h1>Login </h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}

					{this.renderButton("Login")}
				</form>
			</div>
		);
	}
}

export default Login;
