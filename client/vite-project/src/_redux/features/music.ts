import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Musics } from '../../types/music';
import { useAppSelector } from '../hooks';
import axios from 'axios';
import { BASE_URL } from '../../apis';

interface MusicState {
	musics: {
		loading: boolean | undefined;
		error?: any; // TODO add type for the errors here?
		data: Musics;
	};
}

const initialState: MusicState = {
	musics: {
		loading: false,
		error: null,
		data: [],
	},
};

const musicSlice = createSlice({
	name: 'music',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getMusicAction.pending, (state) => {
				console.log('loading...');
				state.musics.loading = true;
			})
			.addCase(getMusicAction.fulfilled, (state, action) => {
				console.log(`done!`);
				state.musics.loading = false;
				// state.musics.data = [
				// 	{
				// 		id: 'm1234567890',
				// 		url: 'song 1',
				// 		album: 'my album',
				// 		title: 'dfsdf',
				// 		lyrics: 'sdfdf',
				// 		user: 'sdfdsf',
				// 	},
				// ];
				state.musics.data = action.payload.list;
			})
			.addCase(getMusicAction.rejected, (state) => {
				console.log('Error');
				state.musics.loading = false;
				state.musics.data = [];
			});
	},
});
const getMusicAction = createAsyncThunk('api/music', async () => {
	// return await getMusic();
	return await axios.get(`http://localhost:8080/api/music`).then((res) => {
		return { list: res.data };
	});
});

export const MusicSelector = () => useAppSelector((state) => state.music.musics);
export default musicSlice.reducer;
