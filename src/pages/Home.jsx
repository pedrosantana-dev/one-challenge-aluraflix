import styled from "styled-components";
import Banner from "../components/Banner";
import Categoria from "../components/Categoria";
import categorias from "@/mocks/categorias.json";
import ModalEditar from "@/components/ModalEditar";
import { useEffect, useState } from "react";

const ContainerCategoriasEstilizado = styled.div`
	display: flex;
	flex-direction: column;
	gap: 93px;

	@media (max-width: 1024px) {
		margin-top: 150px;
	}
`;

export default function Home() {
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

	return (
		<>
			{isLargeScreen && <Banner />}
			<ContainerCategoriasEstilizado>
				{categorias.map((item) => (
					<Categoria
						id={item.id}
						nome={item.nome}
						cor={item.cor}
						key={item.id}
					/>
				))}
			</ContainerCategoriasEstilizado>

			<ModalEditar />
		</>
	);
}
