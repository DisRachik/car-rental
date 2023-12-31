import PropTypes from "prop-types";
import { RiHeart3Line, RiHeartFill } from "react-icons/ri";
import { Button, Modal } from "components";
import { Card, ImgWrap, TitleWrap, Title, WorldAccent, Price, InfoCar, IconButton } from "./CarGalleryItem.styled";
import { useState } from "react";

const CarGalleryItem = ({ car, isCarInFavorite, addFavorite }) => {
	const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, accessories } = car;
	const [modalOpen, setModalOpen] = useState(false);

	const infoAddress = address.split(", ").slice(1);
	const accessor = accessories.reduce((smallest, current) => {
		return current.length < smallest.length ? current : smallest;
	});
	const info = [...infoAddress, rentalCompany, type, make, id, accessor];

	const toggleModal = () => setModalOpen(prevState => !prevState);

	return (
		<Card>
			<ImgWrap aria-label={`Foto ${make} ${model}`} imageUrl={img} />
			<TitleWrap>
				<Title>
					<span>{make}</span>
					<WorldAccent>{` ${model}`}</WorldAccent>
					<span>{`, ${year}`}</span>
				</Title>
				<Price>{rentalPrice}</Price>
			</TitleWrap>
			<InfoCar>
				{info.map(item => (
					<li key={item}>{item}</li>
				))}
			</InfoCar>
			<Button type="button" minWidth="100%" onClick={toggleModal}>
				Learn more
			</Button>
			<IconButton
				type="button"
				onClick={() => {
					addFavorite(car);
				}}
				isCarInFavorite={isCarInFavorite}
			>
				{isCarInFavorite ? <RiHeartFill size={18} /> : <RiHeart3Line size={18} />}
			</IconButton>

			{modalOpen && <Modal onClose={toggleModal} car={car} />}
		</Card>
	);
};

CarGalleryItem.propTypes = {
	car: PropTypes.shape({
		id: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired,
		make: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		rentalPrice: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		rentalCompany: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
	}),
	isCarInFavorite: PropTypes.bool.isRequired,
	addFavorite: PropTypes.func.isRequired,
};

export default CarGalleryItem;
