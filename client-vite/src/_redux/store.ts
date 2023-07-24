import { configureStore } from "@reduxjs/toolkit";
import musicReducer from './features/music'
const store = configureStore({
    reducer: {
        music: musicReducer,
    }
}) 
export default store