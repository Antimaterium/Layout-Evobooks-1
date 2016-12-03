import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ModalLogin from '../components/ModalLogin';
import ModalRegisterUser from '../components/ModalRegisterUser';

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
    boxShadow: 'rgba(0,0,0,0)',
  },
  logo: {
    width: '190px'
  },
  containerList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',   
    marginTop: '7px'
  },
  menuButtons: {
    color: '#FAFAFA',
    fontWeight: 'bold'
  },
  container: {
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


  state = {

        estadoAbertura: false,
        acoesLogin: [],

      };



/*  state = {
    login: false,
    register: false
  };

  xaplaustos(){
    this.setState({login: !this.state.login});
    this.setState({register: !this.state.register});
  }*/



  componentDidMount()
  {

  }


  render() {
    
    return (
      
		  <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            style={styles.appBar}
            iconElementLeft={(
                <img style={styles.logo} src={require("../img/EvoLearn-logo.png")}/>
            )}
            iconElementRight={(
              <div style={styles.containerList}>
                <ModalLogin />
             
              </div>
            )}
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