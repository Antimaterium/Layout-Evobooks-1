import React, { Component } from 'react';
import '../css/App.css';
import PaperBackground from './PaperBackground';
import IconsDescription from './IconsDescription'
import Banner from './Banner';

const styles = {
	divisao: {
		background: 'rgb(138, 3, 130)',
		boxShadow: '0px 1px 2px #888888',
		width: '100%',
		height: '4px',
		margin: '8% 0 8% 0'
	}

}

class App extends Component {
	render() {
		
		return (
			<div>
				<Banner />
				<IconsDescription/>				
				
				<div style={styles.divisao}></div>

				<h2 className="categorias">Categorias</h2>				
				<PaperBackground />
			</div>
		);
	}
}

export default App;
