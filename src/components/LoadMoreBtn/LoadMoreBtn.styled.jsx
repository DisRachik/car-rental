import styled from "@emotion/styled";
import { theme } from "styles";

export const Button = styled.button`
	display: block;
	margin: 0 auto ${theme.spacing(37.5)};

	color: ${theme.colors.accent};
	font-size: ${theme.fontSizes.medium};

	transition: ${theme.animation("color")};

	&:hover,
	&:focus {
		color: ${theme.colors.hover};
	}
`;
