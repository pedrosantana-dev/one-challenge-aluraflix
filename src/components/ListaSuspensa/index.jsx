import styled from "styled-components";
import propTypes from "prop-types";

const CampoTextoEstilizado = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	label {
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
		color: #fff;
	}

	select {
		background-color: transparent;
		border: 3px solid var(--color-blue);
		border-radius: 15px;

		padding: 20px 15px;
		font-size: 20px;
		line-height: 24px;
		color: var(--color-light-grey);
	}
`;

export default function ListaSuspensa({ label, itens, placeholder, ...props }) {
	return (
		<CampoTextoEstilizado>
			<label>{label}</label>
			<select
				type="text"
				{...props}
			>
				{placeholder ? <option>{placeholder}</option> : <option></option>}

				{itens.map((item) => (
					<option
						key={item.id}
						value={item.id}
					>
						{item.nome}
					</option>
				))}
			</select>
		</CampoTextoEstilizado>
	);
}

ListaSuspensa.propTypes = {
	label: propTypes.string.isRequired,
	itens: propTypes.array.isRequired,
	placeholder: propTypes.string,
};
