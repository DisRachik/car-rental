import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { CarsGallery } from "components";

const Favorites = ({ favorite, addFavorite }) => {
	const [cars, setCars] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(prevState => !prevState);
		setCars(favorite);
		setIsLoading(prevState => !prevState);
	}, [favorite]);

	return (
		<>
			{isLoading && <h1>WAIT...</h1>}
			<CarsGallery cars={cars} favorite={favorite} addFavorite={addFavorite} />
		</>
	);
};

Favorites.propTypes = {
	favorite: PropTypes.array.isRequired,
	addFavorite: PropTypes.func.isRequired,
};

export default Favorites;
