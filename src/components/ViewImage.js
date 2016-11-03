import React, { Component, PropTypes } from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

import Image from './Image';
import '../css/Editor.css';

class ViewImage extends Component{
	render() {
		return (
<div className="main">		
<Row>
  <Col md={12} >
	<Row> 
		<Col md={8} style={{ border: '1px solid silver' }}>
			<div className="containerImage"> 
				<Image/>
			</div>
 		</Col>
		<Col md={4} >
			<div> 
                 <h3> Deseja manter as alterações no modelo e salvar ? </h3> 
			</div> 
		</Col>
	</Row> 
	</Col>	
</Row>
</div>
    );
}
}


export default ViewImage;