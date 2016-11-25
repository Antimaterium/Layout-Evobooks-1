import React, { Component} from 'react';
import { Row, Col} from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import Lista from './Lista';
import Chips from './Chips';
import Image from './Image';
import Paper from 'material-ui/Paper';
import '../css/Editor.css';

const styles = {
  height: '100%',
  width: '97%',
  margin: '1%',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#FAFAFA',
};

class StepperEditor extends Component{
	render() {
		return (
            <div className="main">		
                <Row >
                    <Col md={12} >
                        <Row> 
                            <Col  md={8} style={{ border: '1px solid silver' }}>
                                <div className="containerImage"> 
                                    <Image/>
                                </div>
                            </Col>
                            <Col  md={4} >
                                <Lista titulo="Camadas"/>
                            </Col>
                        </Row> 
                        <Row> 
                            <Col  md={8} >
                                <h3> Tags :</h3>
                                <Chips/>
                            </Col>
                            <Col  md={4} >
                                <Lista titulo="Animações"/>
                            </Col>
                        </Row>

                        <Row>
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
			
    );
	}
}

export default StepperEditor;