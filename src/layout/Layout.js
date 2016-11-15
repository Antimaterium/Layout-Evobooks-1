import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ModalLogin from '../components/ModalLogin';
import '../css/layout.css'

const listaMenu = {
    listStyleType: 'none',
    paddingBottom: "5px"
};

const listaMenuli = {
  display:'inline',
};

const titulo = {
  paddingTop: '10px',
  fontSize: '30px',
}


class Layout extends Component {

  render() {
    return (
      
		  <MuiThemeProvider>
        <div>
          <AppBar
            title="Evobooks"
            titleStyle={titulo}
            iconElementRight={(
              <ul style={listaMenu}> 
                <li style={listaMenuli}> <FlatButton label="HOME" /> </li>
                <li style={listaMenuli}> <FlatButton label="EDITAR" /> </li>
                <li style={listaMenuli}> <FlatButton label="SOBRE" /> </li>
                <li style={listaMenuli}> <FlatButton label="CONTATO" /> </li>     
              </ul>
            )}
            showMenuIconButton={false}
          />

          {this.props.children}

          <footer id="footer">
            <div>
              <p id="textoRodape" style={{fontFamily: 'Roboto' }}>Evobooks - <a className="linkPreto" href="http://evobooks.com.br/cases/">http://evobooks.com.br/cases/</a></p>
            </div>
          </footer>
        </div>  
		  </MuiThemeProvider>    
    );
  }
}

export default Layout;