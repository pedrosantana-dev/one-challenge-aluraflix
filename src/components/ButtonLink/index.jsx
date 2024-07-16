import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const ButtonLinkEstilizado = styled(Link)`
	background: transparent;
	color: rgb(255, 255, 255);
	border: 3px solid #fff;
	padding: 15px 34px;
	font-size: 20px;
	font-weight: bold;
	line-height: 24px;
	text-decoration: none;
	border-radius: 15px;
	cursor: pointer;

	&:hover {
		border-color: var(--color-blue);
		box-shadow: inset 0 0 10px 3px var(--color-blue);
	}

	&.active {
		border-color: var(--color-blue);
		box-shadow: inset 0 0 10px 3px var(--color-blue);
	}
`;

export default function ButtonLink({ children, to }) {
	const localizacao = useLocation();
	return (
		<ButtonLinkEstilizado
			className={localizacao.pathname === to ? "active" : ""}
			to={to}
		>
			{children}
		</ButtonLinkEstilizado>
	);
}

ButtonLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
};
