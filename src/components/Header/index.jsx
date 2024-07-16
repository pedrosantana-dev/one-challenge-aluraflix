import styled from "styled-components";
import ButtonLink from "../ButtonLink";
import { useEffect, useState } from "react";

const HeaderEstilizado = styled.header`
	border-bottom: 4px solid var(--color-blue);
	position: fixed;

	top: 0;
	left: 0;
	right: 0;
	z-index: 2;

	background-color: var(--color-dark-grey);

	box-shadow: 0px 0px 29px 5px var(--color-blue);

	&.scrolled {
		background-color: #000;
		opacity: 0.9;
	}
`;

const HeaderContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;

	height: 125px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 51px;
	img {
		width: 168px;
	}

	nav {
		display: flex;
		gap: 25px;
	}
`;

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<HeaderEstilizado className={isScrolled ? "scrolled" : ""}>
			<HeaderContainer>
				<img
					src="./LogoMain.png"
					alt="Logo"
				/>

				<nav>
					<ButtonLink to="/">HOME</ButtonLink>
					<ButtonLink to="/novo-video">NOVO VIDEO</ButtonLink>
				</nav>
			</HeaderContainer>
		</HeaderEstilizado>
	);
}
