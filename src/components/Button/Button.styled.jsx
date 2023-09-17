import styled from "@emotion/styled";
import { theme } from "styles";

const getMinWidthStyle = props => {
	return {
		display: props.minWidth ? "flex" : "inline-flex",
		width: props.minWidth ? props.minWidth : "auto",
	};
};
const getMinHeightStyle = props => {
	return {
		minHeight: props.minHeight ? props.minHeight : "auto",
	};
};

export const StyledButton = styled.button`
	align-items: center;
	justify-content: center;
	padding: ${theme.spacing(3)};
	flex-grow: 1;
	background-color: ${theme.colors.accent};
	border-radius: ${theme.spacing(3)};
	font-size: ${theme.fontSizes.small};
	font-weight: 600;
	line-height: 1.43;
	color: ${theme.colors.light};

	transition: ${theme.animation("background-color, box-shadow")};

	${getMinWidthStyle}
	${getMinHeightStyle}

	&:hover,
	&:focus {
		background-color: ${theme.colors.hover};
		box-shadow: ${theme.shadows.regular};
	}

	&:disabled {
		background-color: ${theme.colors.gray};
		box-shadow: none;
		cursor: not-allowed;
	}
`;
