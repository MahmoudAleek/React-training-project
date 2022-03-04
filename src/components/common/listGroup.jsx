import React, { Component } from "react";

class ListGroup extends Component {
	state = {};

	render() {
		const { items, textProperty, valueProperty, onItemSelecte, selectedItem } =
			this.props;

		return (
			<React.Fragment>
				<ul className="list-group text-center">
					{items.map((item) => (
						<li
							key={item[textProperty]}
							onClick={() => onItemSelecte(item)}
							className={
								selectedItem === item
									? "list-group-item active "
									: "list-group-item"
							}
							style={{ cursor: "pointer" }}
						>
							{item[valueProperty]}
						</li>
					))}
				</ul>
			</React.Fragment>
		);
	}
}

ListGroup.defaultProps = {
	textProperty: "_id",
	valueProperty: "name",
};
export default ListGroup;
