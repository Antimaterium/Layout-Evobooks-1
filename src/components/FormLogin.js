import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class FormLogin extends Component {

    state={
        Username: '',
        Password: ''  
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
                hintText="Digite seu email"
                floatingLabelText="Email..."
                onChange={this.onChangeHandler.bind(this)}
                /><br />
            <TextField
                name="Password"
                hintText="Digite sua senha"
                floatingLabelText="Senha..."
                onChange={this.onChangeHandler.bind(this)}
                />
            </div>
        )

    }

}

export default FormLogin;