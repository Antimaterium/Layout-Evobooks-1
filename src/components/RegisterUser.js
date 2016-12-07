import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class RegisterUser extends Component {
    render() {
        return(
            <div>
                <TextField
                    hintText="Digite seu nome"
                    floatingLabelText="Nome completo"
                /><br />
                <TextField
                    hintText="Digite sua e-mail"
                    floatingLabelText="Email"
                />
                <TextField
                    hintText="Digite sua senha"
                    floatingLabelText="Senha"
                />
                <TextField
                    hintText="Digite sua senha novamente"
                    floatingLabelText="Confirmar senha"
                />
            </div>
        )

    }

}

export default RegisterUser;