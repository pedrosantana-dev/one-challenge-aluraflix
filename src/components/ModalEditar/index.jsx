import styled from "styled-components";
import propTypes from "prop-types";
import CampoTexto from "../CampoTexto";
import xCancel from "@/assets/icons/cancel.png";
import ListaSuspensa from "../ListaSuspensa";
import categorias from "@/mocks/categorias.json";
import Button from "../Button";
import { usePlaylistContext } from "@/hooks/usePlaylistContext";
import { useEffect, useState } from "react";

const Overlay = styled.div`
	background-color: rgba(3, 18, 47, 0.76);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 1000;
`;

const DialogoEstilizado = styled.dialog`
	position: absolute;
	max-width: 1440px;
	top: 50%;
	right: 0;
	/* transform: translateY(-50%); */
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: transparent;
	border: none;
	z-index: 1001;
`;

const FormEstilizado = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 43px;
	width: 90%;
	background-color: #03122f;
	border: 5px solid #6bd1ff;
	padding: 84px 200px;
	border-radius: 15px;

	h2 {
		font-size: 60px;
		font-weight: 800;
		text-align: center;
		color: #2271d1;
	}

	@media (max-width: 1024px) {
		gap: 40px;
		padding: 84px 50px;
	}

	@media (max-width: 768px) {
		gap: 20px;
		padding: 60px 12px;
	}
`;

const BotoesEstilizados = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
`;

const BotaoFechar = styled.button`
	position: absolute;
	top: 35px;
	right: 35px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media (max-width: 768px) {
		top: 16px;
		right: 16px;
	}
`;

export default function ModalEditar({ card, aoFechar }) {
	const [titulo, setTitulo] = useState("");
	const [imagem, setImagem] = useState("");
	const [video, setVideo] = useState("");
	const [descricao, setDescricao] = useState("");
	const [categoriaId, setCategoriaId] = useState("");

	const { atualizarVideo } = usePlaylistContext();

	useEffect(() => {
		if (card) {
			setTitulo(card.titulo);
			setImagem(card.imagem);
			setVideo(card.video);
			setDescricao(card.descricao);
			setCategoriaId(card.categoriaId);
		}
	}, [card]);

	function salvar() {
		atualizarVideo(card.id, {
			titulo,
			imagem,
			video,
			descricao,
			categoriaId: parseInt(categoriaId),
		});
		aoFechar();
	}
	return (
		!!card && (
			<>
				<Overlay />
				<DialogoEstilizado open={true}>
					<FormEstilizado method="dialog">
						<h2>EDITAR CARD:</h2>
						<CampoTexto
							label="Titulo"
							placeholder="oque é javascript"
							value={titulo}
							onChange={(e) => setTitulo(e.target.value)}
						/>
						<ListaSuspensa
							label="Categoria"
							itens={categorias}
							value={categoriaId}
							onChange={(e) => setCategoriaId(e.target.value)}
						/>
						<CampoTexto
							label="Imagem"
							placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
							value={imagem}
							onChange={(e) => setImagem(e.target.value)}
						/>
						<CampoTexto
							label="Video"
							placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
							value={video}
							onChange={(e) => setVideo(e.target.value)}
						/>
						<BotoesEstilizados>
							<Button
								type="button"
								onClick={salvar}
							>
								GUARDAR
							</Button>
							<Button type="reset">LIMPAR</Button>
						</BotoesEstilizados>
						<BotaoFechar onClick={aoFechar}>
							<img src={xCancel} />
						</BotaoFechar>
					</FormEstilizado>
				</DialogoEstilizado>
			</>
		)
	);
}

ModalEditar.propTypes = {
	card: propTypes.object,
	aoFechar: propTypes.func,
};
