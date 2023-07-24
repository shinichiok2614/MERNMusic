import { createAsyncThunk, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import { useAppSelector } from '../hooks';

interface IInitState {
	status: string;
	data: string;
}
const initialState = {
	status: '',
	data: '',
};
export const musicAsync = createAsyncThunk('music/fetchdata', async () => {
	const getdata = () => {
		axios.get('http://localhost:8080/api/music').then((res) => {
			console.log(res);
		});
	};
	return getdata;
});
const musicSlice = createSlice({
	name: 'music',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(musicAsync.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(musicAsync.fulfilled, (state, action) => {
				state.status = 'success';
			})
			.addCase(musicAsync.rejected, (state, action) => {
				state.status = 'reject';
			});
	},
});
export default musicSlice.reducer;
