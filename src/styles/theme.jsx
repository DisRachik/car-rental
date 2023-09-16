const theme = Object.freeze({
	colors: {
		accent: "#3470FF",
		hover: "#0B44CD",
		// green: "#0fd20f",
		// red: "#FF002B",
		gray: "#8A8A89",
		light: "#FFFFFF",
		lightInput: "#F7F7FB",
		dark: "#121417",
		darkAccent: "#363535",
		darkOpacity: "#12141780",
		textList: "#12141733",
	},

	fontSizes: {
		ultraSmall: "12px",
		small: "14px",
		medium: "16px",
		large: "18px",
	},

	spacing: value => `${4 * value}px`,

	shadows: {
		small: "0 5px 7px -1px rgba(237, 226, 226, 0.50)",
		regular: "0px 4px 10px 4px #9e9e9e",
		medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
	},

	animation: value => {
		const animationValue = value.split(",").map(property => {
			return `${property.trim()} 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)`;
		});
		return animationValue.join(", ");
	},
});

export default theme;
