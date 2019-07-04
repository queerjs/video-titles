import React from 'react';
import './App.css';
import fly from './fly.svg';

const VideoScreen = ({ photo, name, talk }) => {
	return (
		<div className={'canvas'}>
			<div className="bow" />
			<main>
				<img alt="" src={photo} />
				<div>
					<h2>{name}</h2>
					<h3>{talk}</h3>
				</div>
			</main>
			<img src={fly} alt="queerJS" className="fly" />
		</div>
	);
};

function App() {
	const params = new URLSearchParams(window.location.search);

	return (
		<div>
			<VideoScreen {...JSON.parse(params.get('data'))} />
		</div>
	);
}

export default App;
