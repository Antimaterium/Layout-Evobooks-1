import React, { Component} from 'react';
import { Row, Col } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import Image from './Image';
import '../css/Editor.css';

const style = {
  height: '100%',
  width: '97%',
  margin: 20,
  marginTop: '100px',
  paddingBottom: 50,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#FAFAFA',
};

class ViewImage extends Component{
	render() {
		return (

			<Paper 
				style={style} 
				zDepth={1} 
				children={
					<div className="main">		
						<Row>
							<Col md={12} >
								<Row> 
									<Col md={8} style={{ border: '1px solid silver', margin: '30px' }}>
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
				}
			/>

    );
}
}


export default ViewImage;