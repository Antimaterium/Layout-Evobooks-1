import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Editor from './Editor';
import InputImage from './InputImage';
import ViewImage from './ViewImage';
import '../css/Stepper.css';


class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return(   
            <InputImage/>   
        );
      case 1:
        return(
        <Editor/>   
        );
      case 2:
        return (
           <ViewImage/> 
          );
      default:
        return '';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Adicionar</StepLabel>
          </Step>
          <Step>
            <StepLabel>Editar</StepLabel>
          </Step>
          <Step>
            <StepLabel>Salvar</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle} className="divFinal">
          {finished ? (
            <p>

            <h1> Modelo salvo com sucesso</h1>

            <h2> Deseja inserir outro modelo ? </h2> 
             <RaisedButton
                  className="btnFinal"
                  label="Sim"
                  primary={true}
                  onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
                />  
                <RaisedButton
                  label="Não"
                  secondary={true}
                  onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
                />            

           .
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Voltar"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Salvar Imagem' : 'Continuar'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;