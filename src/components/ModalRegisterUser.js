import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FormRegister from './FormRegister';


 const styleModal = {
    width: '500px',
    //left: 'calc (50% - 200px)'
    marginLeft: 'calc(50% - 250px)',
    fontSize: '10px'
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
        <FlatButton label="CADASTRE-SE" onTouchTap={this.handleOpen} />
        <Dialog
          title="CADASTRE-SE"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styleModal}
        >
          <FormRegister/>
        </Dialog>
      </div>
    );
  }
}

export default ModalRegisterUser;