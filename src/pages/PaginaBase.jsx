import PropTypes from "prop-types";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import Banner from "@/components/Banner";
import { useEffect, useState } from "react";

const MainContainer = styled.main`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 51px;
`;

export default function PaginaBase({ children }) {
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const localizacao = useLocation();
	return (
		<>
			<Header />
			{localizacao.pathname === "/" && isLargeScreen && <Banner />}
			<MainContainer>{children}</MainContainer>
			<Footer />
		</>
	);
}

PaginaBase.propTypes = {
	children: PropTypes.node.isRequired,
};
