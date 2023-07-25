import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './_redux/hooks';
import { musicAsync } from './_redux/features/music';

function App() {
	const dispatch = useAppDispatch();
	const buttonClick = () => {
		dispatch(musicAsync());
	};
	const data = useAppSelector((state) => state.music.data);
	return (
		<>
			<button onClick={()=>dispatch(musicAsync())}>axios</button>
			<ul>
				{data.map((item) => (
					<li>{item.title}</li>
				))}
			</ul>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
		</>
	);
}

export default App;
