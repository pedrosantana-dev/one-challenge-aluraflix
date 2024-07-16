import styled from "styled-components";
import propTypes from "prop-types";
import iconDelete from "@/assets/icons/delete.png";
import iconEdit from "@/assets/icons/edit.png";

const CardEstilizado = styled.li`
	position: relative;
	display: inline-block;
	max-width: 432px;
	min-width: 420px;
	background-color: rgba(0, 0, 0, 0.9);
	border-radius: 15px;
	border: 3px solid ${(props) => props.$cor};

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		box-shadow: inset 0 0 10px 5px ${(props) => props.$cor};
		display: block;
		border-radius: 10px;
		pointer-events: none;
	}

	img {
		width: 100%;
		max-height: 258px;
		object-fit: cover;
		border-radius: 15px 15px 0 0;
	}
`;

const FooterEstilizado = styled.div`
	display: flex;
	gap: 20px;
	justify-content: space-around;
	padding: 20px;
`;

const ButtonEstilizado = styled.button`
	display: flex;
	align-items: center;
	gap: 20px;
	background: transparent;
	color: #fff;
	font-size: 16px;
	font-weight: 700;
	border: none;
	outline: none;
	cursor: pointer;
`;

export default function Card({ cor, item, aoEditarCard, removerVideo }) {
	return (
		<CardEstilizado $cor={cor}>
			<img
				src={item.imagem}
				alt=""
			/>
			<FooterEstilizado>
				<ButtonEstilizado onClick={() => removerVideo(item.id)}>
					<img src={iconDelete} />
					DELETAR
				</ButtonEstilizado>
				<ButtonEstilizado onClick={() => aoEditarCard(item)}>
					<img src={iconEdit} />
					EDITAR
				</ButtonEstilizado>
			</FooterEstilizado>
		</CardEstilizado>
	);
}

Card.propTypes = {
	cor: propTypes.string.isRequired,
	item: propTypes.object.isRequired,
	aoEditarCard: propTypes.func.isRequired,
	removerVideo: propTypes.func.isRequired,
};
