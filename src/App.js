import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Movie from "./components/movie";
import NavBar from "./components/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/common/not-found";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import Register from "./components/register";

import "./App.css";
import "font-awesome/css/font-awesome.css";
import NewMovie from "./components/newMovie";

class App extends Component {
	state = {};

	render() {
		return (
			<div>
				<NavBar />

				<main className="container mt-5">
					<Switch>
						{/* <Route path="/movie/new" component={MovieForm}></Route> */}
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/movies" component={Movie} />
						<Redirect from="/" exact to="/movies" />
						<Route path="/customers" component={Customers} />
						<Route path="/rentals" component={Rentals} />
						<Route path="/movie/:id?" component={MovieForm} />

						<Route path="/not-found" component={NotFound} />
						<Redirect to="/not-found" />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
