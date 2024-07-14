import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonEstilizado = styled.button`
	background: transparent;
	color: rgb(255, 255, 255);
	border: 3px solid #fff;
	padding: 15px 34px;
	font-size: 20px;
	font-weight: bold;
	line-height: 24px;
	border-radius: 15px;
	cursor: pointer;

	&:hover {
		border-color: var(--color-blue);
		box-shadow: inset 0 0 10px 3px var(--color-blue);
	}
`;

export default function Button({ children }) {
	return <ButtonEstilizado>{children}</ButtonEstilizado>;
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
};
