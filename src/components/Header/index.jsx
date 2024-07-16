import styled from "styled-components";
import { useEffect, useState } from "react";
import NavLink from "../NavLink";
import NavLinkMobile from "../NavLinkMobile";

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

	@media (max-width: 768px) {
		top: inherit;
		bottom: 0;
		left: 0;
		right: 0;
		border-bottom: none;
		border-top: 4px solid var(--color-blue);
		box-shadow: 0px -5px 29px 5px var(--color-blue);
		background-color: #000;

		img {
			display: none;
		}
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
`;

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 1024);

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

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<HeaderEstilizado
			className={isScrolled && !isSmallScreen ? "scrolled" : ""}
		>
			<HeaderContainer>
				<img
					src="./LogoMain.png"
					alt="Logo"
				/>

				{isSmallScreen ? <NavLinkMobile /> : <NavLink />}
			</HeaderContainer>
		</HeaderEstilizado>
	);
}
