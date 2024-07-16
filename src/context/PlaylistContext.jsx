import propTypes from "prop-types";
import { createContext, useReducer } from "react";
import estadoInicial from "@/mocks/videos.json";
import { playlistReducer } from "@/reducers/playlistReducer";

export const PlaylistContext = createContext();
PlaylistContext.displayName = "Playlist";

export function PlaylistProvider({ children }) {
	const [playlist, dispatch] = useReducer(playlistReducer, estadoInicial);

	return (
		<PlaylistContext.Provider value={{ playlist, dispatch }}>
			{children}
		</PlaylistContext.Provider>
	);
}

PlaylistProvider.propTypes = {
	children: propTypes.node.isRequired,
};
