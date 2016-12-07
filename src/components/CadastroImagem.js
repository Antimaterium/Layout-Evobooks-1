import React, {Component} from 'react';
import InputImage from './InputImage';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {request} from '../utils/Request';

const styles = {
    paper: {
        height: '100%',
        width: '97%',
        margin: 20,
        marginTop: '100px',
        paddingBottom: 50,
        textAlign: 'center',
        display: 'inline-block',
        backgroundColor: '#FAFAFA',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

class CadastroImagem extends Component {

state = {
    imageName: ''
}

sendFile(){



var header = {
    "Authorization": "Bearer "+localStorage.getItem("token"),
    "Content-Type": "multipart/form-data"
}


var formData = new FormData();

formData.append('filename', this.refs.image.state.image.name);
formData.append('description', this.state.description);
formData.append('tags', 'dawefwea,fawefawefawe,fawe');
formData.append('categoryId', '06b94ae4-3b63-448c-b27c-ee2a45e9491b');
formData.append('file', this.refs.image.state.image);

console.log(this.refs.image);
 console.log('a');

  var xhr = new XMLHttpRequest();
 console.log('b');

 xhr.open('POST', 'File/Novo');
 console.log('c');
 xhr.setRequestHeader('Authorization',`Bearer ${localStorage.getItem('token')}`);

 xhr.send(formData);
 console.log(formData);
 console.log('d');
// request("POST","File/Novo", header, formData)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//     })
     // request("File/Novo", "POST", header, formData)
     //  .then(response => response.json())
     //  .then(response => {
     //  localStorage.setItem('token', response.access_token)
     //  console.log(response.userName)
     //   localStorage.setItem('userName', response.userName)
     //  })

        
}

   
 render() {
      return( 
        <div>
            <Paper 
                style={styles.paper} 
                zDepth={1} 
                children={
                <div>
                    <form id="formImage">

                        <InputImage ref="image" 
                            onChange={file => this.setState({imageName: file.name})} />
                     
                        <TextField 
                            disabled={true}
                            value={this.state.imageName}
                            name="filename"
                            style={{width: '30%'}}
                            hintText="Digite um Nome"
                            floatingLabelText="Nome da Imagem"
                        /><br />

                        <TextField
                            onChange={e => this.setState({description: e.target.value})}
                            name="description"
                            style={{width: '30%'}}
                            hintText="Digite uma Descrição"
                            floatingLabelText="Descrição"
                        /><br />

                        <div style={styles.buttons}>
                        <RaisedButton 
                            label="Salvar" 
                            primary={true} 
                            onClick={this.sendFile.bind(this)} />
                        </div>
                    </form>
                </div>
                }
            />
        </div>
     );
 }
    
}

export default CadastroImagem;
