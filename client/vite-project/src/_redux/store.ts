import axios from 'axios';
import { BASE_URL } from '.';
import { createSlice } from '@reduxjs/toolkit';

const getlistmusic = axios.get(BASE_URL).then((res) => res.data);
console.log(getlistmusic);
const initialState = {
	status: 'none',
	list: 'none',
};
const store = createSlice({
    name: 'haha',
    initialState,
    reducers: {},
extraReducers(builder) {
    builder.addCase
},
})