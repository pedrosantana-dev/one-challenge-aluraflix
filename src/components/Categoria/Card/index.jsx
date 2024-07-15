import styled from "styled-components";
import propTypes from "prop-types";
import iconDelete from "@/assets/icons/delete.png";
import iconEdit from "@/assets/icons/edit.png";

const CardEstilizado = styled.li`
	display: inline-block;
	max-width: 432px;
	min-width: 420px;
	background-color: rgba(0, 0, 0, 0.9);
	border-radius: 15px;
	border: 3px solid ${(props) => props.$cor};
	box-shadow: inset 0 0 10px 3px ${(props) => props.$cor};

	img {
		width: 100%;
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

export default function Card({ cor, item }) {
	const deletar = () => {
		console.log(item.id);
	};
	const editar = () => {
		console.log(item.id);
	};

	return (
		<CardEstilizado $cor={cor}>
			<img
				src={item.src}
				alt=""
			/>
			<FooterEstilizado>
				<ButtonEstilizado onClick={deletar}>
					<img src={iconDelete} />
					DELETAR
				</ButtonEstilizado>
				<ButtonEstilizado onClick={editar}>
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
};
