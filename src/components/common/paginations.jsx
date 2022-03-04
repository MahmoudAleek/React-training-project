import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
	const { itemsCount, pageSize, onPageChange, currentPage } = props;

	const pagesCount = itemsCount / pageSize;

	const pages = _.range(1, pagesCount + 1);

	return (
		<React.Fragment>
			<nav>
				<ul className="pagination">
					{pages.map((page) => (
						<li
							key={page}
							className={
								page === currentPage ? "page-item active" : "page-item"
							}
						>
							<a onClick={() => onPageChange(page)} className="page-link">
								{page}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</React.Fragment>
	);
};

Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	onPageChange: propTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
};
export default Pagination;
