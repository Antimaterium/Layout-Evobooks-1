import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PersonIconAdd from 'material-ui/svg-icons/social/person-add';
import FormRegister from './FormRegister';


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
    open: false,
    pageCadastro: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleClose = () => {
    this.setState({open: false});
  };

  togglePageCadastro(){
    
    this.setState({
      pageCadastro: !this.state.pageCadastro
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
        onTouchTap={this.togglePageCadastro.bind(this)}
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
          modal={true}
          open={this.state.open}
          style={styles.modal}
        >
          <FormRegister/>
        </Dialog>
      </div>
    );
  }
}

export default ModalRegisterUser;