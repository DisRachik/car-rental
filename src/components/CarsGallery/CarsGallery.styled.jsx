import styled from "@emotion/styled";
import { theme } from "styles";

export const Gallery = styled.ul`
	display: grid;
	max-width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(${theme.spacing(68.5)}, 1fr));
	grid-gap: ${theme.spacing(7.25)};
	margin: ${theme.spacing(12.5)} auto ${theme.spacing(25)};
`;
