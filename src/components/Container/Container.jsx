import PropTypes from "prop-types";
import { ContainerWrap } from "./Container.styled";

const Container = ({ children }) => <ContainerWrap>{children}</ContainerWrap>;

export default Container;

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};
