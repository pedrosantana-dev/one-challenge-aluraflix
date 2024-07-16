import styled from "styled-components";
import propTypes from "prop-types";

const ButtonEstilizado = styled.button`
	color: #fff;
	background-color: transparent;
	border: 2px solid #fff;
	border-radius: 15px;
	width: 180px;
	height: 54px;
	font-size: 20px;
	font-weight: 500;
	transition: all 0.3s;

	&:hover {
		color: var(--color-blue);
		background-color: #000;
		border-color: var(--color-blue);
		box-shadow: inset 0 0 10px 3px var(--color-blue);
	}
`;

export default function Button({ children, ...props }) {
	return <ButtonEstilizado {...props}>{children}</ButtonEstilizado>;
}

Button.propTypes = {
	children: propTypes.node.isRequired,
};
