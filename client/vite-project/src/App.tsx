import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './_redux';

function App() {
	const [count, setCount] = useState(0);
	const [list, setList] = useState([]);
	interface IMusic {
		_id: string;
		title: string;
	}
	type IListMusic = IMusic[];
	const getlistmusic = async () => {
		const res = await axios.get(BASE_URL).then((res) => res.data.musics);
		setList(res);
		console.log(res);
	};
	return (
		<>
			<button onClick={getlistmusic}>Get axios</button>
			<ul>
				{list.map((item: IMusic) => (
					<li key={item._id}>{item.title}</li>
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
