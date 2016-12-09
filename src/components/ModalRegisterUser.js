import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PersonIconAdd from 'material-ui/svg-icons/social/person-add';
import FormRegister from './FormRegister';
import {request} from '../utils/Request';


 const styles = {
    modal: {
    width: '500px',
    marginLeft: 'calc(50% - 250px)',
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
      color: "#FFF"
    }
    
  }

class ModalRegisterUser extends React.Component {


  state = {
    open:false
  };


  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleClose = () => {
    this.setState({open: false});
  };

  Cadastrar(){
    console.log("HITOU");
    console.log(this.refs);
    // delete dados._senha;

    var header = {"Content-Type":"application/json"};
    var body = JSON.stringify(this.refs.formRegister.state);

    request("Account/Register","POST", header, body)
      .then((response) => {
        console.log(response);
        if(response.status === 200)
        {
<<<<<<< HEAD
          this.handleClose();
=======

          this.handleClose();

>>>>>>> 3cf75bafabda5e9e02b75d91618cae1429960f65
        }
        response.json()
      })
      .then((response) => {
      
      }).catch(error=> {
        
      });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cadastrar"
        primary={true}
        onTouchTap={this.Cadastrar.bind(this)}
      />,
    ];


    return (
      <div>
        <FlatButton 
          icon={<PersonIconAdd/>} 
          label="Cadastre-se"
          labelPosition="before"
          style={styles.button}
          onTouchTap={this.handleOpen} 
        />
        <Dialog
          title="CADASTRE-SE"
          actions={actions}
          modal={this.state.open}
          open={this.state.open}
          style={styles.modal}
          ref="EstadoCadastro"
        >
          <FormRegister ref="formRegister" />
        </Dialog>
      </div>
    );
  }
}

export default ModalRegisterUser;