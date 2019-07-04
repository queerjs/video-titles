import React from 'react';
import logo from './logo.svg';
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
		<div className="App">
			<VideoScreen {...JSON.parse(params.get('data'))} />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
