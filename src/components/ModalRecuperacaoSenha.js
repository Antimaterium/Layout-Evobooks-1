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


export default class ModalRecuperacaoSenha extends React.Component {
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
        label="Enviar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton style={{color : '#fff'}}label="Esqueceu a Senha?" onTouchTap={this.handleOpen} />
        <Dialog
          title="Recuperação de Senha"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styles.modal}
        >
        <TextField
            hintText="E-mail"
            floatingLabelText="Digite seu e-mail"
            fullWidth={true}
        /><br />
        </Dialog>
      </div>
    );
  }
}