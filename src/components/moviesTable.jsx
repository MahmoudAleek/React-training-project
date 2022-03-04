import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

//Columns : Array
//sortColumn : obj
//onSort : func

class MoviesTable extends Component {
	columns = [
		{
			path: "title",
			lable: "Ttile",
			content: (movie) => (
				<Link to={`/movie/${movie._id}`}> {movie.title}</Link>
			),
		},
		{ path: "genre.name", lable: "Genre" },
		{ path: "numberInStock", lable: "Stock" },
		{ path: "dailyRentalRate", lable: "Rate" },
		{
			key: "like",
			content: (movie) => (
				<Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
			),
		},
		{
			key: "delete",
			content: (movie) => (
				<button
					onClick={() => this.props.onDelete(movie)}
					className="btn btn-danger"
				>
					Delete
				</button>
			),
		},
	];
	render() {
		const { movies, onSort, sortColumn } = this.props;

		return (
			<Table
				data={movies}
				sortColumn={sortColumn}
				onSort={onSort}
				columns={this.columns}
			/>
		);
	}
}

export default MoviesTable;
