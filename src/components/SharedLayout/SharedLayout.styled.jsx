import styled from "@emotion/styled";
import { theme } from "styles";

export const NavMenu = styled.ul`
	display: flex;
	gap: ${props => props.theme.spacing(4)};

	font-size: ${theme.fontSizes.large};
`;
