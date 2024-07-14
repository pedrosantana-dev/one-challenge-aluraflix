import PropTypes from "prop-types";
import Header from "../components/Header";
import styled from "styled-components";

const MainContainer = styled.main`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 51px;
`;

export default function PaginaBase({ children }) {
	return (
		<>
			<Header />
			<MainContainer>{children}</MainContainer>
		</>
	);
}

PaginaBase.propTypes = {
	children: PropTypes.node.isRequired,
};