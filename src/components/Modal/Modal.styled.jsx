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
`;

export const ModalWrap = styled.div`
	max-width: ${theme.spacing(135.25)};
	padding: ${theme.spacing(10)};

	width: 100%;
	font-family: "Manrope", sans-serif;
	font-size: ${theme.fontSizes.ultraSmall};
	line-height: 1.5;
	font-weight: 500;

	color: ${theme.colors.dark};
	background-color: ${theme.colors.light};
`;

export const ImageWrap = styled.div`
	width: 100%;

	border-radius: ${theme.spacing(3.5)};
	overflow: hidden;
`;

export const Title = styled.h1`
	margin-top: ${theme.spacing(3.5)};

	font-size: ${theme.fontSizes.large};
`;

export const WorldAccent = styled.span`
	color: ${theme.colors.accent};
`;
