import PropTypes from "prop-types";
import viteLogo from "/vite.svg";
import { Gallery } from "./CarsGallery.styled";
import { CarGalleryItem } from "components";

const CarsGallery = ({ cars, favorite, addFavorite }) => {
	return (
		<>
			{!cars.length ? (
				<img src={viteLogo} alt="Car logo" />
			) : (
				<Gallery>
					{Boolean(cars.length) &&
						cars.map(car => {
							const isCarInFavorite = favorite.some(favoriteCar => favoriteCar.id === car.id);

							return (
								<CarGalleryItem
									key={car.id.toString()}
									car={car}
									isCarInFavorite={isCarInFavorite}
									addFavorite={addFavorite}
								/>
							);
						})}
				</Gallery>
			)}
		</>
	);
};

CarsGallery.propTypes = {
	cars: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	favorite: PropTypes.array.isRequired,
	addFavorite: PropTypes.func.isRequired,
};

export default CarsGallery;
