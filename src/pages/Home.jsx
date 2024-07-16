import styled from "styled-components";
import Categoria from "../components/Categoria";
import categorias from "@/mocks/categorias.json";
import ModalEditar from "@/components/ModalEditar";
import { useState } from "react";

const ContainerCategoriasEstilizado = styled.div`
	display: flex;
	flex-direction: column;
	gap: 93px;

	@media (max-width: 1024px) {
		margin-top: 150px;
	}
`;

export default function Home() {
	const [cardEmEdicao, setCardEmEdicao] = useState(null);

	const aoFechar = () => {
		setCardEmEdicao(null);
	};

	return (
		<>
			<ContainerCategoriasEstilizado>
				{categorias.map((item) => (
					<Categoria
						id={item.id}
						nome={item.nome}
						cor={item.cor}
						key={item.id}
						aoEditarCard={(card) => setCardEmEdicao(card)}
					/>
				))}
			</ContainerCategoriasEstilizado>

			<ModalEditar
				card={cardEmEdicao}
				aoFechar={() => aoFechar()}
			/>
		</>
	);
}
