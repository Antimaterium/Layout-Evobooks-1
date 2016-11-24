import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ModalLogin from '../components/ModalLogin';
import ModalRegisterUser from '../components/ModalRegisterUser'
import '../css/layout.css'

const muiTheme = getMuiTheme({
  palette: {
    background: '#FFFFFF',
  },
  appBar: {
    height: 50,
  },
});

const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#3B3B3B',
    boxShadow: 'rgba(0,0,0,0)'
  },
  titulo: {
    marginTop: '3px',
    fontSize: '35px',
  },
  containerList: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px'
  },
  menuButtons: {
    color: '#FAFAFA',
    fontWeight: 'bold'
  },
  container: {
    minHeight: '500px',
  }
}

class Layout extends Component {
  constructor(props){
    super(props);

    // Evento ao rolar o scroll na página
    window.onscroll=(ev)=>{
      console.log(ev);
    }

  }
  render() {
    
    return (
      
		  <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            style={styles.appBar}
            title="EvoLearn"
            titleStyle={styles.titulo}
            iconElementRight={(
              <div style={styles.containerList}>
                <ModalLogin/>
                <ModalRegisterUser/>
              </div>
            )}
            showMenuIconButton={false}
          />
          
          <div id="container">
            {this.props.children}
          </div>

          <footer id="footer">
            <div>
              <p className="linkCinza">Evobooks - <a className="linkCinza" href="http://evobooks.com.br/cases/">http://evobooks.com.br/cases/</a></p>
            </div>
          </footer>
        </div>  
		  </MuiThemeProvider>    
    );
  }
}

export default Layout;