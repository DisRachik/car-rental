import styled from "@emotion/styled";
import { theme } from "styles";

export const Card = styled.li`
	position: relative;
	max-width: ${theme.spacing(68.5)};

	display: flex;
	flex-direction: column;
`;

export const ImgWrap = styled.div`
	position: relative;
	width: 100%;
	height: ${theme.spacing(67)};

	overflow: hidden;
	border-radius: ${theme.spacing(3.5)};

	background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%),
		url(${props => props.imageUrl}), no-repeat;
	background-size: cover;
	background-position: 20% center;
`;

export const TitleWrap = styled.div`
	margin-top: ${theme.spacing(3.5)};

	display: flex;
	justify-content: space-between;

	max-height: ${theme.spacing(6)};
	overflow: hidden;
`;

export const Title = styled.h2`
	font-size: ${theme.fontSizes.medium};
`;

export const WorldAccent = styled.span`
	color: ${theme.colors.accent};
`;

export const Price = styled.span`
	font-size: ${theme.fontSizes.medium};
`;

export const InfoCar = styled.ul`
	margin-top: ${theme.spacing(2)};
	margin-bottom: ${theme.spacing(10)};

	display: flex;
	flex-wrap: wrap;
	gap: ${theme.spacing(1)} ${theme.spacing(3)};
	max-height: ${theme.spacing(10)};
	overflow: hidden;
	color: ${theme.colors.darkOpacity};
`;

export const IconButton = styled.button`
	position: absolute;
	top: ${theme.spacing(3.5)};
	right: ${theme.spacing(3.5)};
	display: flex;
	justify-content: center;
	align-items: center;

	color: ${props => (props.isCarInFavorite ? theme.colors.accent : theme.colors.light)};
	background-color: transparent;
`;
