import React from "react";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "../services/fakeMovieService";
import Joi from "joi-browser";

class NewMovie extends Form {
	state = {
		data: {
			title: "",
			genreId: "",
			numberInStock: "",
			dailyRentalRate: "",
		},
		errors: {},
	};
	schema = {
		title: Joi.string().required().label("Title"),
		genreId: Joi.string().required().min(1).max(50).label("Genre"),
		numberInStock: Joi.number().required().min(0).max(100).label("Stock"),
		dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
	};

	doSubmit = () => {
		console.log("submitted");

		const newMovie = { ...this.state.data };
		//this.setState({ data: newMovie });
		const savedMovie = saveMovie(newMovie);
		console.log("submitted", savedMovie);
		this.props.history.replace("/movies");
	};
	render() {
		const genres = getGenres();
		return (
			<div>
				<h1>Movie Form</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("title", "Title")}
					{this.renderDropDownList(genres, "Genre", "genreId")}
					{this.renderInput("numberInStock", "Number In Stock")}
					{this.renderInput("dailyRentalRate", "Rate")}
					{this.renderButton("Save")}
				</form>
			</div>
		);
	}
}

export default NewMovie;
