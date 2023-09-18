import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { getCars } from "service";
import { CarsGallery, LoadMoreBtn } from "components";

const Catalog = ({ favorite, addFavorite }) => {
	const [page, setPage] = useState(1);
	const [cars, setCars] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [moreCars, setMoreCars] = useState(true);

	useEffect(() => {
		setPage(1);
	}, []);

	useEffect(() => {
		const fetchCars = async page => {
			try {
				setIsLoading(true);

				const { data, moreCars } = await getCars(page);

				if (!moreCars) {
					setMoreCars(prevState => !prevState);
				}

				setCars(prevState => (page === 1 ? [...data] : [...prevState, ...data]));
			} catch (error) {
				setError("Something went wrong, try again!");
			} finally {
				setIsLoading(false);
			}
		};

		fetchCars(page);
	}, [page]);

	const addNextCars = () => {
		setPage(prevState => prevState + 1);
	};

	return (
		<>
			{isLoading && <h1>WAIT...</h1>}
			<CarsGallery cars={cars} favorite={favorite} addFavorite={addFavorite} />
			{moreCars && <LoadMoreBtn onClick={addNextCars} />}
			{error && <h1>{error}</h1>}
		</>
	);
};

Catalog.propTypes = {
	favorite: PropTypes.array.isRequired,
	addFavorite: PropTypes.func.isRequired,
};

export default Catalog;
