import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ModalLogin from '../components/ModalLogin';
import '../css/layout.css'

const styles = {
  appBar: {
    position: 'fixed',
    margin: '-3px 0px -3px 0px' 
  },
  listaMenu:{
    listStyleType: 'none',
  },
  listaMenuli : {
      display:'inline',
  },
  titulo: {
    paddingTop: '5px',
    fontSize: '30px'
  }
}

class Layout extends Component {

  render() {
    return (
      
		  <MuiThemeProvider>
        <div>
          <AppBar
            style={styles.appBar}
            title="EvoLearn"
            titleStyle={styles.titulo}
            iconElementRight={(
              <ul style={styles.listaMenu}> 
                <li style={styles.listaMenuli}> <FlatButton label="HOME" /> </li>
                <li style={styles.listaMenuli}> <FlatButton label="EDITAR" /> </li>
                <li style={styles.listaMenuli}> <FlatButton label="SOBRE" /> </li>
                <li style={styles.listaMenuli}> <FlatButton label="CONTATO" /> </li>
                <li style={styles.listaMenuli}> <FlatButton label="CONTATO" /> </li>     
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