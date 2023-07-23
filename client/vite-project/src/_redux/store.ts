import axios from 'axios';
import { BASE_URL } from '.';
import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const getlistmusic = axios.get(BASE_URL).then((res) => res.data);
console.log(getlistmusic);
interface IMusic {
	_id: string;
	title: string;
}
type IListMusic = IMusic[];
interface initialState {
	status: string;
	list: IListMusic;
}
const initialState = {
	status: 'none',
	list: [],
};

const musicSlice = createSlice({
	name: 'haha',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getlistmusicAction.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(getlistmusicAction.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.list = action.payload;
			});
	},
});
const store = configureStore({
	reducer: {
		music: musicSlice,
	},
});
export default store;
const getlistmusicAction = createAsyncThunk('haha/hehe', async () => {
	const res = await axios.get(BASE_URL).then((res) => res.data.musics);
	return res;
});



// const list = useSelector((state: any) => state.haha.list);
// console.log('list in store', list);
