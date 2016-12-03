import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class FormRegister extends Component {
    
     state={
        Username: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    }

    onChangeHandler(ev){ 
        var key = ev.target.getAttribute('name');
        var json = {};
        json[key] = ev.target.value;
        this.setState(json);
        // console.log(ev.target.value);
       // console.log(this.state)
    }

    render() {
        return(
            <div>
                <TextField
                    name="Username"
                    hintText="Digite seu nome"
                    floatingLabelText="Nome..."
                    fullWidth= "true"
                    onChange={this.onChangeHandler.bind(this)}
                /><br />
                <TextField
                    name="Email"
                    hintText="Digite seu email"
                    floatingLabelText="Email..."
                    fullWidth= "true"
                     onChange={this.onChangeHandler.bind(this)}
                /><br />
                <TextField
                    name="Password"
                    hintText="Digite sua senha"
                    floatingLabelText="Senha..."
                    fullWidth= "true"
                     onChange={this.onChangeHandler.bind(this)}
                    errorText=""
                />
                <TextField
                    name="ConfirmPassword"
                    hintText="Confirme sua senha"
                    floatingLabelText="Confirmar senha..."
                    fullWidth= "true"
                     onChange={this.onChangeHandler.bind(this)}
                    errorText="Confirme uma Senha"
                />
            </div>
        )

    }

}

export default FormRegister;