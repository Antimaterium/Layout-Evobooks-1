import React, {Component} from 'react';
import InputImage from './InputImage';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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
    imageName: '',
    categories: []
}

sendFile(){


 
var header = {
    "Authorization": "Bearer "+localStorage.getItem("token"),
    "Content-Type": "multipart/form-data"
}


var formData = new FormData();

formData.append('filename', this.refs.image.state.image.name);
formData.append('description', this.state.description);
formData.append('tags', this.state.tags);
formData.append('categoryId', '06b94ae4-3b63-448c-b27c-ee2a45e9491b');
formData.append('file', this.refs.image.state.image);

  var xhr = new XMLHttpRequest();



 //xhr.open('POST', 'http://localhost:63367/File/Novo'); erro de merge

 xhr.open('POST', 'File/Novo');
 console.log('c');

 xhr.setRequestHeader('Authorization',`Bearer ${localStorage.getItem('token')}`);

 xhr.send(formData);

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


  componentDidMount(){
     var header = {"Content-Type":"application/json"};
        var body = {};

       
console.log("ZsADSASDASDAS");

    request("File/Categories","Get", header, body)
      .then(response => 
        response.json()
      )
      .then(response => {
        var arr = response.map((x,i, a)=> {
            return <MenuItem value={x.Id} key={i} primaryText={x.Name} /> 
        });
        console.log("PAssou");
        console.log(arr);
         this.setState({categories: arr});
        //console.log(categories);
       
      })
      .catch(error=> {
        
      });
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
                         <SelectField
                          value={this.state.value}
                            onChange={e => this.setState({category: e.target.value})}
                           maxHeight={500}
                              >
                           {this.state.categories}
                          </SelectField><br/>
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
