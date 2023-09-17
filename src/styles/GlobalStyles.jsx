import { css } from "@emotion/react";
import "modern-normalize";
import theme from "./theme";

const GlobalStyles = css`
	#root {
		width: 100%;
		font-family: "Manrope", sans-serif;
		font-size: ${theme.fontSizes.ultraSmall};
		line-height: 1.5;
		font-weight: 500;

		color: ${theme.colors.dark};
		background-color: ${theme.colors.light};

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		display: flex;
		min-width: 320px;
		min-height: 100vh;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	ul,
	ol {
		margin: 0;
		padding-left: 0;
		list-style: none;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

	button {
		padding: 0;
		font: inherit;
		color: inherit;
		border: none;
		${"" /* background-color: transparent; */}
		cursor: pointer;
	}
`;

export default GlobalStyles;
