import { useEffect, useState } from "react";
import { Gallery } from "./CarsGallery.styled";
import { getCars } from "service";
import { CarGalleryItem, LoadMoreBtn } from "components";

const CarsGallery = () => {
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
			<Gallery>{Boolean(cars.length) && cars.map(car => <CarGalleryItem key={car.id.toString()} car={car} />)}</Gallery>
			{moreCars && <LoadMoreBtn onClick={addNextCars} />}
			{error && <h1>{error}</h1>}
		</>
	);
};

CarsGallery.propTypes = {};

export default CarsGallery;
