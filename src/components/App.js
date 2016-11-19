import React, { Component } from 'react';
import '../css/App.css';
import PaperBackground from './PaperBackground';
import Banner from './Banner';

class App extends Component {

	render() {
		return (
			<div>
				<Banner />
				<h2 className="categorias">Categorias</h2>
				<PaperBackground />

			</div>
		);
	}
}

export default App;
