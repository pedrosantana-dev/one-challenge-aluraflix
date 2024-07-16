import CampoTexto from "@/components/CampoTexto";
import ListaSuspensa from "@/components/ListaSuspensa";
import styled from "styled-components";
import categorias from "@/mocks/categorias.json";
import Button from "@/components/Button";

const ContainerEstilizado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 160px;

	h2 {
		font-size: 60px;
		font-weight: 800;
		text-transform: uppercase;
		margin-bottom: 10px;
	}
	p {
		font-size: 20px;
		font-weight: 400;
		text-transform: uppercase;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 60px;
	}
`;

const GridEstilizado = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`;

const TextareaEstilizado = styled.textarea`
	width: 100%;
	height: 120px;
	padding: 20px 15px;
	font-size: 20px;
	line-height: 24px;
	color: var(--color-light-grey);
	border-radius: 15px;
	background-color: transparent;
	border: 3px solid var(--color-blue);
	margin-top: 15px;
`;

const LabelEstilizado = styled.label`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #fff;
`;

const ButtonBoxEstilizado = styled.div`
	display: flex;
	justify-content: start;
	gap: 20px;

	button {
		border-color: var(--color-blue);
		color: var(--color-blue);
	}
`;

export default function NovoVideo() {
	return (
		<ContainerEstilizado>
			<h2>Novo Vídeo</h2>
			<p>Complete o formulário para criar um novo card de vídeo.</p>
			<form>
				<h3>Criar Card</h3>

				<GridEstilizado>
					<CampoTexto
						label="Título"
						placeholder="título do vídeo"
					/>
					<ListaSuspensa
						label="Categoria"
						itens={categorias}
						placeholder="selecione uma categoria"
					/>
					<CampoTexto
						label="Imagem"
						placeholder="link da imagem"
					/>
					<CampoTexto
						label="Vídeo"
						placeholder="link do vídeo"
					/>
					<div>
						<LabelEstilizado>Descrição</LabelEstilizado>
						<TextareaEstilizado placeholder="Sobre o que é esse vídeo?"></TextareaEstilizado>
					</div>
				</GridEstilizado>
				<ButtonBoxEstilizado>
					<Button type="submit">GUARDAR</Button>
					<Button type="reset">LIMPAR</Button>
				</ButtonBoxEstilizado>
			</form>
		</ContainerEstilizado>
	);
}
