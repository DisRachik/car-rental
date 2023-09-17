import styled from "@emotion/styled";
import { NavLink as RouteNavLink, Link } from "react-router-dom";
import { theme } from "styles";

export const Header = styled.header`
	width: 100%;
	padding: ${props => props.theme.spacing(5)} ${props => props.theme.spacing(2)};
	background-color: ${props => props.theme.colors.lightInput};
	border-bottom: 1px solid ${props => props.theme.colors.hover};
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	gap: ${props => props.theme.spacing(4)};

	font-size: ${theme.fontSizes.large};
`;

export const Logo = styled(Link)`
	display: flex;
	gap: ${props => props.theme.spacing(1)};

	color: ${props => props.theme.colors.accent};
	font-size: ${props => props.theme.fontSizes.small};

	@media screen and (max-width: 767px) {
		h1 {
			display: none;
		}
	}
`;

export const NavLink = styled(RouteNavLink)`
	display: block;
	padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};

	text-align: center;

	background-color: ${props => props.theme.colors.blue};
	border: ${props => props.theme.spacing(0.25)} solid ${props => props.theme.colors.hover};
	border-radius: ${props => props.theme.spacing(2)};
	box-shadow: ${props => props.theme.shadows.small};

	transition: ${props => props.theme.animation("background-color, box-shadow, color")};

	&:hover,
	&:focus {
		box-shadow: ${props => props.theme.shadows.regular};
		background-color: ${props => props.theme.colors.hover};
		color: ${props => props.theme.colors.light};
	}

	&.active {
		color: ${props => props.theme.colors.light};
		background-color: ${props => props.theme.colors.accent};
		box-shadow: ${props => props.theme.shadows.medium};
	}

	@media screen and (max-width: 540px) {
		padding: ${props => props.theme.spacing(2)};
	}
`;
