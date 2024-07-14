import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import EstiloGlobal from "./components/EstiloGlobal";
import PaginaBase from "./pages/PaginaBase";

function App() {
	return (
		<BrowserRouter>
			<EstiloGlobal />
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
		</BrowserRouter>
	);
}

export default App;
