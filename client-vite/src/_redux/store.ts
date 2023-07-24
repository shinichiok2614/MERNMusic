import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './features/music';
const store = configureStore({
	reducer: {
		music: musicReducer,
	},
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
