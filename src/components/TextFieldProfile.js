import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RadioOptionsForm from './RadioOptionsForm';
import ChipInput from 'material-ui-chip-input';
import ChipArray from './ChipArray';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import './Profile.css';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';




class TextFieldProfile extends Component {
  state = {
    tags: [],
  }

  constructor(){
    super();
    this.formacoesAcademicas = [
      {
        value:"T",
        label:"Tecnico"
      },
      {
        value:"G",
        label:"Graduação"
      },
      {
        value:"M",
        label:"Mestrado"
      },
      {
        value:"D",
        label:"Doutorado"
      }
    ];

  }

  handleAddChip(chip) {
    //LOGICA AQUI
    var tags = this.state.tags;
    tags.push(chip);
    this.setState({
      tags: tags
    });
  }

  handleDeleteChip(chip) {
    //LOGICA AQUI 
    console.log(chip);
    var tags = this.state.tags;
    var index = tags.indexOf(chip);
    tags.splice(index, 1);

    this.setState({
      tags: tags
    });
  }

  render() {


    const styles = {
      radioButton: {
        marginBottom: 16,
        width: "auto",
        paddingRight: "20px"
      },
      default:{
        padding: 60
      },
      inline:{
        display: "flex"
      }
    };

    return (
      <div style={styles.default}>
        <Paper zDepth={5} style={styles.default} >
          <h2> Perfil </h2>
          <Divider />

          <div>
            <TextField
              id="text-field-default"
              defaultValue="Victor Matheus"
              floatingLabelText="Nome"
              floatingLabelFixed={true}
              />
          </div>

          


          <TextField
            id="text-field-default"
            defaultValue="Santos Batista"
            floatingLabelText="Sobrenome"
            floatingLabelFixed={true}
            /><br />

          <TextField
            id="text-field-default"
            defaultValue="senai@senai.com"
            floatingLabelText="Email"
            floatingLabelFixed={true}
            /><br />

          <TextField
            id="text-field-default"
            defaultValue="(11)1234-56789"
            floatingLabelText="Telefone"
            floatingLabelFixed={true}
            /><br />
          <h2> Mais Sobre si </h2>
          <Divider />
          <br />
          <TextField
            hintText="EUA"
            floatingLabelText="Pais"
            floatingLabelFixed={true}
            /><br />

          <TextField
            hintText="Detroid"
            floatingLabelText="Cidade"
            floatingLabelFixed={true}
            /><br />

          <h2>Formação Academica </h2>
          <Divider />
          <br />

          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={styles.inline}>
            {this.formacoesAcademicas.map((fa)=><RadioButton
                value={fa.value}
                label={fa.label}
                style={styles.radioButton}
                />)}
          </RadioButtonGroup>

          <TextField
            hintText="Bacharel CCP"
            floatingLabelText="Curso"
            floatingLabelFixed={true}
            /><br />

          <TextField
            hintText="Senai SP"
            floatingLabelText="Instituição"
            floatingLabelFixed={true}
            /><br />

          <h2>Trabalho </h2>
          <Divider />
          <br />

          <div>
          <p>Instituição de Trabalho</p>
            <ChipInput hintText="Senai SP"
              value={this.state.tags}
              onRequestAdd={(chip) => this.handleAddChip(chip)}
              onRequestDelete={(chip) => this.handleDeleteChip(chip)}
              />
          </div>
        </Paper>
      </div>
    );
  }

};

export default TextFieldProfile;