import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PersonIcon from 'material-ui/svg-icons/social/person';
import FormLogin from './FormLogin';
import {request} from '../utils/Request';


 const styles = {
    modal: {
      width: '400px',
      marginLeft: 'calc(50% - 200px)',
      fontSize: '10px'
    },
    icon: {
      width: '28',
      height: '28',
      display: 'inline-block',
      cursor: 'pointer',
      margin: '0px',
      minWidth: '88px',
      position: 'relative',
      overflow: 'hidden'
    },
    button: {
      color: '#FFF'
    }
  }

class ModalLogin extends React.Component {
  state = {
    open: false,
    pageRegister: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleClose = () => {
    this.setState({open: false});
  };

  togglePageRegister(){
    
    this.setState({
      pageRegister: !this.state.pageRegister
    });

     var dados = this.refs.formLogin.state;


     request("Account/Login", "POST", dados)
      .then(response => response.json())
      .then(response => {
       localStorage.setItem('token', response.access_token)
       
      })

  }


  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Entrar"
        primary={true}
        onTouchTap={this.togglePageRegister.bind(this)}
      />,
    ];


    return (
      <div>
        <FlatButton 
          icon={<PersonIcon/>} label="Entrar"
          labelPosition="before"
          style={styles.button}
          onTouchTap={this.handleOpen} 
          
        />
        <Dialog
          title="LOGIN"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styles.modal}
        >
          <FormLogin ref="formLogin" />
          <RaisedButton label="CADASTRE-SE" onTouchTap={this.togglePageRegister.bind(this)} />
        </Dialog>
      </div>
    );
  }
}

export default ModalLogin;