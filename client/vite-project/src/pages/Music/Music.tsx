// import { MusicSelector } from '../../_redux/features/music';

import axios from 'axios';
import { useEffect, useState } from 'react';

// const musicSelector = MusicSelector();
// const music = musicSelector.data;
function Music() {
	const client = axios.create({
		baseURL: 'http://localhost:8080/api/music',
	});
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		client.get('?_limit=10').then((response) => {
			setPosts(response.data.musics);
		});
	}, []);

	return (
		<div className="app">
			<h2>All Posts 📫</h2>
			{posts.map((post) => {
				return (
					<div className="post-card" key={post.id}>
						<h2 className="post-title">{post.title}</h2>
						{/* <p className="post-body">{post.body}</p> */}
						<div className="button">
							<div className="delete-btn">Delete</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Music;
