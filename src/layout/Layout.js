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
    marginTop: '3px',
    fontSize: '30px'
  },
  containerList: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px'
  },
  container: {
    minHeight: '500px'
  }
}

class Layout extends Component {

  render() {
    return (
      
		  <MuiThemeProvider>
        <div style={styles.container}>
          <AppBar
            style={styles.appBar}
            title="EvoLearn"
            titleStyle={styles.titulo}
            iconElementRight={(
              <div style={styles.containerList}>
                <FlatButton label="HOME" /> 
                <FlatButton label="SOBRE" /> 
                <FlatButton label="CONTATO" /> 
                <ModalLogin/>
              </div>
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