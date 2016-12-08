import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {

    modal: {
        width: '500px',
        marginLeft: 'calc(50% - 250px)',
        fontSize: '10px'
    }

}

export default class ModalAlterarSenha extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Confirmar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton style={{color : '#fff'}}label="Alterar Senha" onTouchTap={this.handleOpen} />
        <Dialog
          title="Alterar Senha"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styles.modal}
        >
        <TextField
            hintText="Senha Atual"
            floatingLabelText="Digite sua atual senha"
            fullWidth={true}
        /><br />
        <TextField
            hintText="Nova senha"
            floatingLabelText="Digite sua nova senha"
            fullWidth={true}
        /><br />
        <TextField
            hintText="Confirmação de senha"
            floatingLabelText="Digite a nova senha novamente"
            fullWidth={true}
        /><br />
        </Dialog>
      </div>
    );
  }
}