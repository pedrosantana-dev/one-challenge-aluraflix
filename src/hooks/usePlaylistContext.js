import { useContext } from "react";
import { PlaylistContext } from "@/context/PlaylistContext";
import {
	ADD_VIDEO,
	REMOVE_VIDEO,
	UPDATE_VIDEO,
} from "@/reducers/playlistReducer";

const addVideoAction = (novoVideo) => ({
	type: ADD_VIDEO,
	payload: novoVideo,
});

const removeVideoAction = (videoId) => ({
	type: REMOVE_VIDEO,
	payload: videoId,
});

const uptadeVideoAction = (id, video) => ({
	type: UPDATE_VIDEO,
	payload: { id, video },
});

export const usePlaylistContext = () => {
	const { playlist, dispatch } = useContext(PlaylistContext);

	function adicionarVideo(novoVideo) {
		dispatch(addVideoAction(novoVideo));
	}

	function removerVideo(videoId) {
		dispatch(removeVideoAction(videoId));
	}

	function uptadeVideo(id, video) {
		dispatch(uptadeVideoAction(id, video));
	}

	return {
		playlist,
		adicionarVideo,
		removerVideo,
		uptadeVideo,
	};
};
