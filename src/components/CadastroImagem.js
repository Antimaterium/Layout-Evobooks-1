import React, {Component} from 'react';
import Stepper from './Stepper';
import Paper from 'material-ui/Paper';

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

class CadastroImagem extends Component {
    
 render() {
      return(
        <div className="container">      
            <div>
            <Paper 
                style={style} 
                zDepth={1} 
                children={
                <div>
                    <Stepper/>
                </div>
                }
            />

            
            </div>
        </div>
     );
 }
    
}

export default CadastroImagem;
