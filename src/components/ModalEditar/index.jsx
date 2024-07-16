import styled from "styled-components";
import propTypes from "prop-types";
import CampoTexto from "../CampoTexto";
import xCancel from "@/assets/icons/cancel.png";

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
`;

const BotoesEstilizados = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		color: #fff;
		background-color: transparent;
		border: 2px solid #fff;
		border-radius: 15px;
		width: 180px;
		height: 54px;
		font-size: 20px;
		font-weight: 500;
		transition: all 0.3s;
	}

	button:hover {
		color: var(--color-blue);
		background-color: #000;
		border-color: var(--color-blue);
		box-shadow: inset 0 0 10px 3px var(--color-blue);
	}
`;

const BotaoFechar = styled.button`
	position: absolute;
	top: 35px;
	right: 35px;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export default function ModalEditar({ card, aoFechar }) {
	console.log(card);
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
							value={card.titulo}
						/>
						<CampoTexto
							label="Categoria"
							placeholder="front-end"
							value={card.categoria}
						/>
						<CampoTexto
							label="Imagem"
							placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
							value={card.imagem}
						/>
						<CampoTexto
							label="Video"
							placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
							value={card.video}
						/>
						<BotoesEstilizados>
							<button type="button">GUARDAR</button>
							<button type="reset">LIMPAR</button>
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
