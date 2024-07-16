import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import Home from "@/assets/icons/home.svg?react";
import NovoVideo from "@/assets/icons/NuevoVideo.svg?react";

const NavLinkEstilizado = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 62px;
`;

const ButtonLinkEstilizado = styled(Link)`
	color: #fff;
	text-decoration: none;

	&.active {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 12px 22px;
		border: 3px solid var(--color-blue);
		color: var(--color-blue);
		border-radius: 50px;
		font-size: 20px;
		font-weight: 800;
		background-color: rgba(34, 113, 209, 0.2);

		& > *:first-child {
			width: 30px;
			height: 30px;
		}
	}
`;

const ButtonNavLink = ({ to, texto, icone }) => {
	const localizacao = useLocation();
	return (
		<ButtonLinkEstilizado
			className={localizacao.pathname === to ? "active" : ""}
			to={to}
		>
			{icone}
			{localizacao.pathname === to && texto}
		</ButtonLinkEstilizado>
	);
};

ButtonNavLink.propTypes = {
	to: propTypes.string.isRequired,
	texto: propTypes.string.isRequired,
	icone: propTypes.node.isRequired,
};

export default function NavLinkMobile() {
	return (
		<NavLinkEstilizado>
			<ButtonNavLink
				to="/"
				texto="HOME"
				icone={<Home />}
			/>
			<ButtonNavLink
				to="/novo-video"
				texto="NOVO VIDEO"
				icone={<NovoVideo />}
			/>
		</NavLinkEstilizado>
	);
}
