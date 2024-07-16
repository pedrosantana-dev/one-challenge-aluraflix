import styled from "styled-components";
import ButtonLink from "../ButtonLink";

const NavLinkEstilizado = styled.nav`
	display: flex;
	gap: 25px;
`;

export default function NavLink() {
	return (
		<NavLinkEstilizado>
			<ButtonLink to="/">HOME</ButtonLink>
			<ButtonLink to="/novo-video">NOVO VIDEO</ButtonLink>
		</NavLinkEstilizado>
	);
}
