import styled from "styled-components";
import Button from "../Button";

const HeaderEstilizado = styled.header`
	border-bottom: 4px solid var(--color-blue);
	position: fixed;

	top: 0;
	left: 0;
	right: 0;
	z-index: 2;

	background-color: var(--color-dark-grey);

	box-shadow: 0px 0px 29px 5px var(--color-blue);
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

	div {
		display: flex;
		gap: 25px;
	}
`;

export default function Header() {
	return (
		<HeaderEstilizado>
			<HeaderContainer>
				<img
					src="./LogoMain.png"
					alt="Logo"
				/>

				<div>
					<Button>HOME</Button>
					<Button>NOVO VIDEO</Button>
				</div>
			</HeaderContainer>
		</HeaderEstilizado>
	);
}