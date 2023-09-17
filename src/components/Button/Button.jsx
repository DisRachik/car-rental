import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

const Button = ({ disabled, minWidth, minHeight, children, onClick }) => {
	return (
		<StyledButton disabled={disabled} minWidth={minWidth} minHeight={minHeight} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	disabled: PropTypes.bool,
	minWidth: PropTypes.string,
	minHeight: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default Button;
