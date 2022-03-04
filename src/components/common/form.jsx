import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import DropDownList from "./dropdownlist";

class Form extends Component {
	state = { data: {}, error: {} };

	validate = () => {
		const options = {
			abortEarly: false,
		};
		const { error } = Joi.validate(this.state.data, this.schema, options);

		if (!error) return null;

		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;

		return errors;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		//console.log({ error });
		return error ? error.details[0].message : null;

		//Hardcode way
		// if (name === "username") {
		// 	if (value.trim() === "") return "Username is required";
		// }
		// if (name === "password") {
		// 	if (value.trim() === "") return "Password is required";
		// }
	};

	// currentTarget : is a property from e.currentTarget we do here objectDestructuring
	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		console.log(data);
		this.setState({ data, errors });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		// Call the server
		// const username = document.getElementById("username").value;
		// const username = this.username.current.value;
		//console.log("submitted : ", username);

		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (errors) return;

		this.doSubmit();
	};

	renderButton(label) {
		return (
			<button disabled={this.validate()} className="btn btn-primary">
				{label}
			</button>
		);
	}

	renderDropDownList(options, label, name) {
		const { data, errors } = this.state;
		return (
			<DropDownList
				options={options}
				label={label}
				name={name}
				value={data[name]}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}

	renderInput(name, label, type = "text") {
		const { data, errors } = this.state;

		return (
			<Input
				type={type}
				name={name}
				label={label}
				value={data[name]}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}
}

export default Form;
