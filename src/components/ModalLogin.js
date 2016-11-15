import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FormLogin from './FormLogin';


 const styleModal = {
    width: '400px',
    marginLeft: 'calc(50% - 200px)',
    fontSize: '10px'
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
        <FlatButton label="Login" onTouchTap={this.handleOpen} />
        <Dialog
          title="Login"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styleModal}
        >
          <FormLogin/>
          <RaisedButton label="CADASTRE-SE" onTouchTap={this.togglePageRegister.bind(this)} />
        </Dialog>
      </div>
    );
  }
}

export default ModalLogin;