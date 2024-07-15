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

	input {
		background-color: transparent;
		border: 3px solid var(--color-blue);
		border-radius: 15px;

		padding: 20px 15px;
		font-size: 20px;
		line-height: 24px;
		color: var(--color-light-grey);
	}
`;

export default function CampoTexto({ label, ...props }) {
	return (
		<CampoTextoEstilizado>
			<label>{label}</label>
			<input
				type="text"
				{...props}
			/>
		</CampoTextoEstilizado>
	);
}

CampoTexto.propTypes = {
	label: propTypes.string.isRequired,
};
