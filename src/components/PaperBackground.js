import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListCategoria from './GridListCategoria';


const style = {
  height: '100%',
  width: '97%',
  margin: 20,
  paddingBottom: 50,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#FAFAFA',
};

const PaperBackground = () => (
  <MuiThemeProvider>
    <div>
      <Paper 
        style={style} 
        zDepth={2} 
        children={
          <div>
            <p className="textoCategoria">Biologia</p>
            <GridListCategoria/>

            <p className="textoCategoria">Quimica</p>
            <GridListCategoria/>

            <p className="textoCategoria">Animais</p>
            <GridListCategoria/>

            <p className="textoCategoria">Frutas</p>
            <GridListCategoria/>

            <p className="textoCategoria">Carros</p>
            <GridListCategoria/>
          </div>
        }
      />

      
    </div>
  </MuiThemeProvider>
);

export default PaperBackground ;
