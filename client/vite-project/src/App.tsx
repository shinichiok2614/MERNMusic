import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import browserRouters from './router/router';
function App() {
	const router = createBrowserRouter(browserRouters);
	return <RouterProvider router={router} />;
}

export default App;
