import styled from "styled-components";
import propTypes from "prop-types";
import videos from "@/mocks/videos.json";

import Card from "./Card";

const TituloEstilizado = styled.h3`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 432px;
	height: 70px;
	background-color: ${(props) => props.$cor};
	border-radius: 15px;
	font-size: 32px;
	font-weight: 700;
	text-transform: uppercase;
`;

const ContainerEstilizado = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	gap: 30px;
	list-style: none;
	padding: 0;
	padding-bottom: 20px;
	overflow-x: auto;
	white-space: nowrap;

	/* Customizando a barra de rolagem */
	&::-webkit-scrollbar {
		height: 20px; /* altura da barra de rolagem */
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(
			34,
			113,
			209,
			0.5
		); /* cor da trilha da barra de rolagem */
		border-radius: 15px; /* bordas arredondadas da trilha */
	}

	&::-webkit-scrollbar-thumb {
		background: #2271d1; /* cor do polegar da barra de rolagem */
		border-radius: 15px; /* bordas arredondadas do polegar */
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #555; /* cor do polegar ao passar o mouse */
	}
`;

export default function Categoria({ nome, cor, id }) {
	const videosDaCategoria = videos.filter((item) => item.categoriaId === id);
	return (
		<div>
			<TituloEstilizado $cor={cor}>{nome}</TituloEstilizado>
			<ContainerEstilizado>
				{videosDaCategoria.map((item) => (
					<Card
						item={item}
						cor={cor}
						key={item.id}
					/>
				))}
			</ContainerEstilizado>
		</div>
	);
}

Categoria.propTypes = {
	nome: propTypes.string.isRequired,
	cor: propTypes.string.isRequired,
	id: propTypes.number.isRequired,
};
