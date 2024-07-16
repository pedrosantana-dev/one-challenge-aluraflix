import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import EstiloGlobal from "./components/EstiloGlobal";
import PaginaBase from "./pages/PaginaBase";
import { PlaylistProvider } from "./context/PlaylistContext";

function App() {
	return (
		<BrowserRouter>
			<PlaylistProvider>
				<PaginaBase>
					<Routes>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path="novo-video"
							element={<NovoVideo />}
						/>
					</Routes>
				</PaginaBase>
			</PlaylistProvider>
			<EstiloGlobal />
		</BrowserRouter>
	);
}

export default App;
