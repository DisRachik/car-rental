import PropTypes from "prop-types";
import { List, WorldAccent } from "./Conditions.styled";

const Conditions = ({ rentalConditions, mileage, rentalPrice }) => {
	const separatedStrings = rentalConditions.split("\n");
	const formattedMileage = mileage.toLocaleString().replace(/\s/g, ",");

	return (
		<List>
			<li>
				{separatedStrings[0].slice(0, -2)} <WorldAccent>{separatedStrings[0].slice(-2)}</WorldAccent>
			</li>
			<li>{separatedStrings[1]}</li>
			<li>{separatedStrings[2]}</li>
			<li>
				Mileage: <WorldAccent>{formattedMileage}</WorldAccent>
			</li>
			<li>
				Price: <WorldAccent>{rentalPrice}</WorldAccent>
			</li>
		</List>
	);
};

Conditions.propTypes = {
	rentalConditions: PropTypes.string.isRequired,
	mileage: PropTypes.number.isRequired,
	rentalPrice: PropTypes.string.isRequired,
};

export default Conditions;
