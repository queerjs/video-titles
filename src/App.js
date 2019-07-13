import React from 'react';
import './App.css';
import fly from './fly.svg';

const PrerollScreen = ({ photo, name, talk }) => {
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

const VideoScreen = ({ photo, name, talk }) => {
	return (
		<div className={'canvas'}>
			<div className="bow" data-short />
			<main>
				<x-video />
				<x-speaker-video />
				<div>
					<h2>Laura González {name}</h2>
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
