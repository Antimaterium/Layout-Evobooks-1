import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class FormLogin extends Component {
    render() {
        return(
            <div>
                <TextField
                hintText="Digite seu email"
                floatingLabelText="Email..."
                /><br />
            <TextField
                hintText="Digite sua senha"
                floatingLabelText="Senha..."
                />
            </div>
        )

    }

}

export default FormLogin;