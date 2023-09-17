import styled from "@emotion/styled";
import { theme } from "styles";

export const ContainerWrap = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 ${theme.spacing(5)};

	@media screen and (min-width: 768px) {
		padding: 0 ${theme.spacing(8)};
	}

	@media screen and (min-width: 1200px) {
		padding: 0 ${theme.spacing(32)};
	}
`;
