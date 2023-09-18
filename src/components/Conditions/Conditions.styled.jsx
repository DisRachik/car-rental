import styled from "@emotion/styled";
import { theme } from "styles";

export const List = styled.ul`
	margin-top: ${theme.spacing(3.75)};
	margin-bottom: ${theme.spacing(7.75)};
	display: flex;
	flex-wrap: wrap;
	gap: ${theme.spacing(5.5)} ${theme.spacing(9)};

	letter-spacing: -0.24px;

	li:nth-of-type(2) {
		margin-right: ${theme.spacing(20)};
	}
`;

export const WorldAccent = styled.span`
	color: ${theme.colors.accent};
	font-weight: 600;
`;
