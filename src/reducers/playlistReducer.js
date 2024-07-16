export const ADD_VIDEO = "ADD_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const UPDATE_VIDEO = "UPTADE_VIDEO";

export const playlistReducer = (state, action) => {
	switch (action.type) {
		case ADD_VIDEO: {
			const novoVideo = action.payload;
			return [...state, { id: state.length + 1, ...novoVideo }];
		}
		case REMOVE_VIDEO: {
			const videoId = action.payload;
			return state.filter((video) => video.id !== videoId);
		}
		case UPDATE_VIDEO: {
			const { id, video } = action.payload;
			return state.map((item) =>
				item.id === id ? { ...item, ...video } : item
			);
		}
		default:
			return state;
	}
};
