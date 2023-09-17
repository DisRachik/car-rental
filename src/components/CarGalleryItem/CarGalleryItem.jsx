import PropTypes from "prop-types";
import { RiHeart3Line } from "react-icons/ri";
import { Button } from "components";
import { Card, ImgWrap, TitleWrap, Title, WorldAccent, Price, InfoCar, IconButton } from "./CarGalleryItem.styled";

const CarGalleryItem = ({ car }) => {
	const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, accessories } = car;
	const infoAddress = address.split(", ").slice(1);
	const accessor = accessories.reduce((smallest, current) => {
		return current.length < smallest.length ? current : smallest;
	});
	const info = [...infoAddress, rentalCompany, type, make, id, accessor];
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
			<Button minWidth="100%">Learn more</Button>
			<IconButton>
				<RiHeart3Line size={18} />
			</IconButton>
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
		accessories: PropTypes.array.isRequired,
	}),
};

export default CarGalleryItem;
