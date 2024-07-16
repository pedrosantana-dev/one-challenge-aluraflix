import styled from "styled-components";

const BannerEstilizado = styled.div`
	position: relative;
	padding: 343px 40px 155px 40px;
	background-image: url("./img/player.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
`;

const BackroundEstilizado = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background: #001233;
	opacity: 0.5;
`;

const ConteudoEstilizado = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: start;
	flex-wrap: nowrap;
	gap: 50px;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex: 1;
		a {
			font-size: 48px;
			font-weight: 700;
			color: #f5f5f5;
			text-decoration: none;
			background-color: #6bd1ff;
			border-radius: 15px;
			padding: 15px 34px;
		}

		h3 {
			font-size: 46px;
			font-weight: 400;
			color: #f5f5f5;
			margin: 40px 0 0;
		}

		p {
			font-size: 18px;
		}
	}
`;

const ContainerImgEstilizado = styled.div`
	img {
		width: 100%;
	}
`;

export default function Banner() {
	return (
		<BannerEstilizado>
			<BackroundEstilizado />
			<ConteudoEstilizado>
				<div>
					<a href="#">FRONT END</a>
					<h3>SEO com React</h3>
					<p>
						Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
						uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
						dicas sobre performance e de quebra conhecer uma plataforma
						sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos
						nesse vídeo feito com todo o carinho do mundo construindo uma
						&quot;Pokedex&quot;!
					</p>
				</div>

				<ContainerImgEstilizado>
					<img
						src="./img/player.png"
						alt="Pokemon"
					/>
				</ContainerImgEstilizado>
			</ConteudoEstilizado>
		</BannerEstilizado>
	);
}
