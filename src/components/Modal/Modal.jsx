import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Conditions, Button } from "components";
import { AiOutlineClose } from "react-icons/ai";
import {
	ModalWrap,
	Overlay,
	ImageWrap,
	Title,
	WorldAccent,
	InfoCar,
	Description,
	TitleInfo,
	Info,
	CloseBtn,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, car }) => {
	const [isOpen] = useState(true);

	const {
		id,
		img,
		make,
		model,
		year,
		address,
		type,
		fuelConsumption,
		engineSize,
		description,
		accessories,
		functionalities,
		rentalConditions,
		mileage,
		rentalPrice,
	} = car;

	const obj = {
		id,
		year,
		type,
		fuelConsumption,
		engineSize,
	};
	const resultArray = obj =>
		Object.keys(obj).map(key => {
			const formattedKey = key.replace(/([a-z])([A-Z])/g, "$1 $2");
			return `${formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1)}: ${obj[key]}`;
		});

	const infoAddress = address.split(", ").slice(1);
	const info = [...infoAddress, ...resultArray(obj)];

	useEffect(() => {
		const onKeyDown = e => {
			if (e.code === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", onKeyDown);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [onClose]);

	const isModalOpen = () => {
		if (isOpen) {
			return (document.body.style.overflow = "hidden");
		}
		return (document.body.style.overflow = "auto");
	};

	isModalOpen();

	const onOverlayClick = e => {
		e.stopPropagation();
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleClick = () => {
		window.location.href = "tel:+380961111111";
	};

	return createPortal(
		<Overlay onClick={onOverlayClick}>
			<ModalWrap>
				<ImageWrap>
					<img src={img} alt={`Foto ${make} ${model}`}></img>
				</ImageWrap>
				<Title>
					<span>{make}</span>
					<WorldAccent>{` ${model}`}</WorldAccent>
					<span>{`, ${year}`}</span>
				</Title>
				<InfoCar>
					{info.map(item => (
						<li key={item}>{item}</li>
					))}
				</InfoCar>
				<Description>{description}</Description>
				<TitleInfo>Accessories and functionalities:</TitleInfo>
				<Info>
					{Object.values(accessories).map(value => (
						<li key={value}>{value}</li>
					))}
				</Info>
				<Info marginTop>
					{Object.values(functionalities).map(value => (
						<li key={value}>{value}</li>
					))}
				</Info>
				<TitleInfo>Rental Conditions:</TitleInfo>
				<Conditions rentalConditions={rentalConditions} mileage={mileage} rentalPrice={rentalPrice} />
				<Button type="button" minWidth="168px" onClick={handleClick}>
					Rental car
				</Button>
				<CloseBtn>
					<AiOutlineClose size={20} onClick={onClose} />
				</CloseBtn>
			</ModalWrap>
		</Overlay>,
		modalRoot,
	);
};

Modal.propTypes = {
	car: PropTypes.shape({
		id: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired,
		make: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		address: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		fuelConsumption: PropTypes.string.isRequired,
		engineSize: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
		functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
		rentalConditions: PropTypes.string.isRequired,
		mileage: PropTypes.number.isRequired,
		rentalPrice: PropTypes.string.isRequired,
	}),
	onClose: PropTypes.func.isRequired,
};

export default Modal;
