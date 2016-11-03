import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FormLogin from './FormLogin';


 const styleModal = {
    width: '400px',
    //left: 'calc (50% - 200px)'
    marginLeft: 'calc(50% - 200px)',
    fontSize: '10px'
  }

class ModalRegisterUser extends React.Component {
  state = {
    open: false,
    pagCadastro: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleClose = () => {
    this.setState({open: false});
  };

  togglePagCadastro(){
    
    this.setState({
      pagCadastro: !this.state.pagCadastro
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
        label="Entrar"
        primary={true}
        onTouchTap={this.togglePagCadastro.bind(this)}
      />,
    ];


    return (
      <div>
        <RaisedButton label="Login" onTouchTap={this.handleOpen} />
        <Dialog
          title="Login"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styleModal}
        >
          {array}

          {content}
          <RaisedButton label="CADASTRE-SE" onTouchTap={this.togglePagCadastro.bind(this)} />
        </Dialog>
      </div>
    );
  }
}

export default ModalLogin;