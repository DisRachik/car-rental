import PropTypes from "prop-types";

import { Button } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ onClick }) => (
	<Button type="button" onClick={onClick}>
		Load more
	</Button>
);

LoadMoreBtn.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
