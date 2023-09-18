import styled from "@emotion/styled";
import { theme } from "styles";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.darkOpacity};
	z-index: 1200;

	@media (max-height: 800px) {
		align-items: start;
		padding: ${theme.spacing(6)} 0;
		overflow-y: auto;
	}
`;

export const ModalWrap = styled.div`
	position: relative;
	max-width: ${theme.spacing(135.25)};
	padding: ${theme.spacing(10)};

	width: 100%;
	font-family: "Manrope", sans-serif;
	font-size: ${theme.fontSizes.ultraSmall};
	line-height: 1.5;
	font-weight: 400;

	color: ${theme.colors.dark};
	background-color: ${theme.colors.light};
`;

export const ImageWrap = styled.div`
	width: 100%;

	border-radius: ${theme.spacing(3.5)};
	overflow: hidden;

	& img {
		width: 100%;
	}
`;

export const Title = styled.h1`
	margin-top: ${theme.spacing(3.5)};

	font-size: ${theme.fontSizes.large};
	font-weight: 500;
	line-height: 1.34;
`;

export const WorldAccent = styled.span`
	color: ${theme.colors.accent};
`;
export const InfoCar = styled.div`
	width: ${theme.spacing(69.25)};
	margin: 0;
	padding-left: 0;
	list-style: none;
	color: ${theme.colors.accent};

	margin-top: ${theme.spacing(2)};

	display: flex;
	flex-wrap: wrap;
	gap: ${theme.spacing(1)} ${theme.spacing(3)};
	max-height: ${theme.spacing(10)};
	overflow: hidden;
	color: ${theme.colors.darkOpacity};
`;

export const Description = styled.p`
	margin-top: ${theme.spacing(3.5)};
	font-size: ${theme.fontSizes.small};
	line-height: 1.43;
`;

export const TitleInfo = styled.h3`
	margin-top: ${theme.spacing(6)};
	font-size: ${theme.fontSizes.small};
	line-height: 1.43;
`;

export const Info = styled.ul`
	margin-top: ${props => (props.marginTop ? theme.spacing(2) : theme.spacing(1))};

	display: flex;
	gap: ${theme.spacing(6)};
	letter-spacing: -0.24px;
`;

export const CloseBtn = styled.button`
	position: absolute;
	top: ${theme.spacing(4)};
	right: ${theme.spacing(4)};

	width: ${theme.spacing(6)};
	height: ${theme.spacing(6)};
	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;

	&:hover,
	&:focus {
		color: ${theme.colors.accent};
	}
`;
