import styled from "styled-components";

const FooterEstilizado = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 125px;
	background-color: rgba(0, 0, 0, 0.9);
	box-shadow: 0px 0px 29px 5px var(--color-blue);
	margin-top: 159px;
`;

export default function Footer() {
	return (
		<FooterEstilizado>
			<img src="./LogoMain.png" />
		</FooterEstilizado>
	);
}
