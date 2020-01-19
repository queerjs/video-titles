import React from 'react';
import './App.css';
import fly from './fly.svg';

const PrerollScreen = ({ photo, name, talk }) => {
	return (
		<div className={'canvas'} data-preroll>
			<div className="bow" />
			<main>
				{
					photo !== '' ? <img alt="" src={photo} /> : null
				}
				<h2>{name}</h2>
			</main>
			<img src={fly} alt="queerJS" className="fly" />
		</div>
	);
};

const VideoScreen = ({ name }) => {
	return (
		<div className="canvas" data-video>
			<div className="bow" data-short />
			<x-video />
			<x-speaker-video />
			<main>
				<h2>{name}</h2>
			</main>
			<img src={fly} alt="queerJS" className="fly" />
		</div>
	);
};

function App() {
	const params = new URLSearchParams(window.location.search);
	console.log(params.get('use'));
	const out = params.get('out') || 'video';
	return (
		<div>
			{out === 'video' ? (
				<VideoScreen {...JSON.parse(params.get('data'))} />
			) : (
				<PrerollScreen {...JSON.parse(params.get('data'))} />
			)}
		</div>
	);
}

export default App;
