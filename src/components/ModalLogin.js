import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PersonIcon from 'material-ui/svg-icons/social/person';
import FormLogin from './FormLogin';
import {request} from '../utils/Request';
import ModalRegisterUser from './ModalRegisterUser';

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
    loged: false
  };

  togglePageRegister = () =>{
    this.setState({
      open: !this.state.open
    })
  }
  ErroDeLogin(response){
    console.log(response);
  }
  Login(){

    var header = {"Content-Type":"application/json"};
     var body = this.refs.formLogin.state;

    request("POST","Account/Login", header, body)
      .then(response => response.json())
      .then((response) => {
        console.log(response.access_token);
        if(response.access_token != undefined)
        {
          console.log(response);
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('username', response.userName);
          this.setState({loged: true});
          this.togglePageRegister();
        }
        else
        {
          this.ErroDeLogin(response);
        }
      }).catch(error=> {
        
      });


  }

  Logout = () => {

      localStorage.setItem('token', '');    
      localStorage.setItem('username', '');
      this.setState({loged: false});
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.togglePageRegister}
      />,
      <FlatButton
        label="Entrar"
        primary={true}
        onTouchTap={this.Login.bind(this)}
      />,
    ];

    if(this.state.loged)
    {
      return (
      <div>
        <FlatButton 
          label={"Olá, " + localStorage.getItem('username')}
          labelPosition="after"
          style={styles.button}
          disabled='true'
        />
        <FlatButton 
          icon={<PersonIcon/>} label="Logout"
          labelPosition="before"
          style={styles.button}
          onTouchTap={this.Logout} 
        />
      </div>
    );
    }
    else
    {
    return (
      <div>
        <FlatButton 
          icon={<PersonIcon/>} label="Entrar"
          labelPosition="before"
          style={styles.button}
          onTouchTap={this.togglePageRegister} 
          
        />
        <Dialog
          title={this.props.mamao}
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styles.modal}
        >
          <FormLogin ref="formLogin" />
        </Dialog>
           <ModalRegisterUser/>
      </div>
    );
  }
  }
}

export default ModalLogin;