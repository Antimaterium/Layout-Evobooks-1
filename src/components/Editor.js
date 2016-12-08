import React, { Component} from 'react';
import { Row, Col} from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import ListaCamadas from './ListaCamadas';
import ListaAnimacoes from './ListaAnimacoes';
import Chips from './Chips';
import Image from './Image';
import '../css/Editor.css';

const styles = {
	paper: {
		height: '100%',
		width: '97%',
		margin: '1%',
		textAlign: 'center',
		display: 'inline-block',
		backgroundColor: '#FAFAFA',
		position: 'relative',
		top: '100px'
	},
	editor: {
		padding: '50px'
	},
	footerEditor: {
		marginTop: '100px;'
	}
};

class Editor extends Component{
	render() {
		return (
			<Paper 
				style={styles.paper} 
				zDepth={2} 
				children={
					<div className="main" style={styles.editor}>		
						<Row >
							<Col md={12} >
								<Row> 
									<Col  md={8} style={{ border: '1px solid silver' }}>
										<div className="containerImage"> 
											<Image/>
										</div>
									</Col>
									<Col  md={4} >
										<ListaCamadas titulo="Camadas"/>
									</Col>
								</Row> 
								<Row> 
									<Col  md={8} >
										<h3> Tags :</h3>
										<Chips/>
									</Col>
									<Col  md={4} >
										<ListaAnimacoes titulo="Animações"/>
									</Col>
								</Row>

								<Row  className="footerEditor">
								<Col md={12} >
										<RaisedButton
											
											label="Verificar alterações "
											labelPosition="before"
											primary={true}
									/>  
								</Col> 
								</Row> 
							</Col>
						</Row>
					</div>
				}
			/>

    );
	}
}


export default Editor;