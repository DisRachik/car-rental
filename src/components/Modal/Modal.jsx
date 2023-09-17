import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalWrap, Overlay, ImageWrap, Title, WorldAccent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, car }) => {
	const { img, make, model, year } = car;
	console.log(car);

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

	const onOverlayClick = e => {
		e.stopPropagation();
		if (e.target === e.currentTarget) {
			onClose();
		}
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
			</ModalWrap>
		</Overlay>,
		modalRoot,
	);
};

Modal.propTypes = {
	car: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default Modal;
