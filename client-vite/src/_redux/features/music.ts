import { createSlice } from '@reduxjs/toolkit';

interface IInitState {
	status: string;
	data: string;
}
const initialState = {
	status: '',
	data: '',
};
const musicSlice = createSlice({
	name: 'music',
	initialState,
	reducers: {},
	extraReducers(builder) {},
});
export default musicSlice.reducer