import React, {Component} from 'react';
import TextField from 'material-ui/TextField';



class FormRegister extends Component {
    render() {
        return(
            <div>
                <TextField
                    hintText="Digite seu nome"
                    floatingLabelText="Nome..."
                    fullWidth= "true"
                /><br />
                <TextField
                    hintText="Digite seu email"
                    floatingLabelText="Email..."
                    fullWidth= "true"
                /><br />
                <TextField
                    hintText="Digite sua senha"
                    floatingLabelText="Senha..."
                    fullWidth= "true"
                />
                <TextField
                    hintText="Confirme sua senha"
                    floatingLabelText="Confirmar senha..."
                    fullWidth= "true"
                />
            </div>
        )

    }

}

export default FormRegister;