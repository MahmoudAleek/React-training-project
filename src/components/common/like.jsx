import React, { Component } from "react";

class Like extends Component {
	render() {
		let likeClasses = "fa fa-heart";
		if (!this.props.liked) likeClasses += "-o";
		return (
			<i
				onClick={this.props.onLike}
				className={likeClasses}
				aria-hidden="true"
				style={{ cursor: "pointer" }}
			></i>
		);
	}
}

export default Like;
