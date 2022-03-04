import React, { Component } from "react";

class DropDownList extends Component {
	state = {};

	isSelected = () => {
		return "selected";
	};
	render() {
		const { options, label, name, onChange, value, error } = this.props;
		return (
			<div className="form-group">
				<label htmlFor={name}>{label}</label>
				<select
					id={name}
					onChange={onChange}
					value={value}
					name={name}
					className="form-control"
				>
					<option value=""></option>
					{options.map((option) => (
						<option key={option._id} value={option._id}>
							{option.name}
						</option>
					))}
					{error && <div className="alert alert-danger">{error}</div>}
				</select>
			</div>
		);
	}
}

export default DropDownList;
