import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ModalLogin from '../components/ModalLogin';
<<<<<<< HEAD

import ModalRecuperacaoSenha from '../components/ModalRecuperacaoSenha';


=======
import ModalRecuperacaoSenha from '../components/ModalRecuperacaoSenha';

>>>>>>> 3cf75bafabda5e9e02b75d91618cae1429960f65

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
  menuButtons: {
    color: '#FAFAFA',
    fontWeight: 'bold'
  },

  rigthButtons: {
    display:    'flex',
    alignItems: 'center'
  }
<<<<<<< HEAD
=======

>>>>>>> 3cf75bafabda5e9e02b75d91618cae1429960f65
}

class Layout extends Component {

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



  componentDidMount() {

  }


  render() {

    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            style={styles.appBar}
            iconElementLeft={(
              <img alt="EvoLearn" style={styles.logo} src={require("../img/EvoLearn-logo.png")} />
            )}
            iconElementRight={(

<<<<<<< HEAD
=======
              
>>>>>>> 3cf75bafabda5e9e02b75d91618cae1429960f65
              <div style={styles.rigthButtons}>
                <ModalRecuperacaoSenha/>
                <ModalLogin />
              </div>
<<<<<<< HEAD
              
=======

>>>>>>> 3cf75bafabda5e9e02b75d91618cae1429960f65
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