import React, { Component} from 'react';
import { Row, Col } from 'react-grid-system';
import Image from './Image';
import '../css/Editor.css';

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
	}
}

class ViewImage extends Component{
	render() {
		return (
			<Row>
				<Col md={12} >
					<Row style={styles.container}> 
						<Col md={12} style={{ border: '1px solid silver' }}>
							<div className="containerImage"> 
								<Image/>
							</div>
						</Col>
						<Col md={12} >
							<div> 
								<h3> Deseja manter as alterações no modelo e salvar ? </h3> 
							</div> 
						</Col>
					</Row> 
				</Col>	
			</Row>	
    	);
	}
}


export default ViewImage;