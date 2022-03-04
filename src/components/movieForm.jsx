import React from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieForm extends Form {
	state = {
		data: {
			title: "",
			genreId: "",
			numberInStock: "",
			dailyRentalRate: "",
		},
		genres: [],
		errors: {},
	};

	schema = {
		_id: Joi.string(),
		title: Joi.string().required().label("Title"),
		genreId: Joi.string().required().label("Genre"),
		numberInStock: Joi.number()
			.required()
			.min(0)
			.max(100)
			.label("Number In Stock"),
		dailyRentalRate: Joi.number()
			.required()
			.min(0)
			.max(10)
			.label("Daily Rental Rate"),
	};

	componentDidMount() {
		const genres = getGenres();
		this.setState({ genres });

		const movieId = this.props.match.params.id;
		if (movieId === "new") return;

		const movie = getMovie(movieId);
		if (!movie) return this.props.history.replace("/not-found");

		this.setState({ data: this.mapToViewModel(movie) });
	}

	mapToViewModel(movie) {
		return {
			_id: movie._id,
			title: movie.title,
			genreId: movie.genre._id,
			numberInStock: movie.numberInStock,
			dailyRentalRate: movie.dailyRentalRate,
		};
	}

	// constructor(props) {
	// 	super(props);
	// 	//console.log("movieForm constructor ", this.props);
	// 	const { params } = this.props.match;
	// 	const movieId = params.id;
	// 	const movie = getMovie(movieId);
	// 	this.state.data._id = movie._id;
	// 	this.state.data.genreId = movie.genre._id;
	// 	this.state.data.title = movie.title;
	// 	this.state.data.numberInStock = movie.numberInStock;
	// 	this.state.data.dailyRentalRate = movie.dailyRentalRate;
	// 	console.log(movie);
	// }

	handleSave = () => {
		this.props.history.replace("/movies");
	};

	doSubmit = () => {
		saveMovie(this.state.data);

		this.props.history.push("/movies");
		// const { data } = this.state;

		// updateMovie(data);

		console.log("this is do Submit", this.state.data.genreId);
	};

	render() {
		return (
			<div>
				<h1>Movie Form</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("title", "Title")}
					{this.renderDropDownList(this.state.genres, "Genre", "genreId")}
					{this.renderInput("numberInStock", "Number In Stock", "number")}
					{this.renderInput("dailyRentalRate", "Rate")}
					{this.renderButton("Save")}
				</form>
			</div>
		);
	}
}

export default MovieForm;
