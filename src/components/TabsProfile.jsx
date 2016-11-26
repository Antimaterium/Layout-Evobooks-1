import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
//import RadioOptionsForm from './RadioOptionsForm';
import ChipInput from 'material-ui-chip-input';
//import ChipArray from './ChipArray';
import AltBtn from './AltBtn';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import PasswordField from 'material-ui-password-field';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import './Profile.css';
import {request} from "../utils/Request";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

class TabsProfile extends Component {
    state = {
        tags: []
    }

    componentDidMount() {
        
    }

    logar(){
        // fetch("http://localhost/login",{
        //     method:"GET",
        //     headers:{
        //         "Authorization": "Bearer "+token,
        //         "Content-Type": "application/json"
        //     },
        //     body: "{nome: 'jwqkljdkasljlas', senha: 'jdsaskdjalsdjkl'}"
        // })
        // .then(res=>{
        //     res.json();

        // })

        request("login","POST",{nome: "usuario"})
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                token: json.token
            });
        });


        request("usuario")
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                usuarios: json.usuarios
            });
        });
    }

    constructor() {
        super();

        //  super(props);
        this.state = {
            slideIndex: 0,
            user: {
                name: 'teste'
            }
        };

        this.formacoesAcademicas = [
            {
                value: "T",
                label: "Tecnico"
            },
            {
                value: "G",
                label: "Graduação"
            },
            {
                value: "M",
                label: "Mestrado"
            },
            {
                value: "D",
                label: "Doutorado"
            }
        ];

    };

    handleAddChip(chip) {
        //LOGICA AQUI
        var tags = this.state.tags;
        tags.push(chip);
        this.setState({
            tags: tags
        });
    };

    handleDeleteChip(chip) {
        //LOGICA AQUI 
        console.log(chip);
        var tags = this.state.tags;
        var index = tags.indexOf(chip);
        tags.splice(index, 1);

        this.setState({
            tags: tags
        });
    };



    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {


        const styles = {
            radioButton: {
                marginBottom: 16,
                width: "auto",
                paddingRight: "20px"
            },
            default: {
                padding: 60
            },
            inline: {
                display: "flex"
            }
        };

        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                    >
                    <Tab label="Perfil" value={0} />
                    <Tab label="Mais Sobre Si" value={1} />
                    <Tab label="Formação Academica" value={2} />
                    <Tab label="Trabalho" value={3} />
                    <Tab label="Alterar Senha" value={4} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    >
                    <div>
                        <div style={styles.default}>
                            {/* */}
                            <Paper zDepth={5} style={styles.default} >
                            
                                <h2> Perfil </h2>
                                <Divider />

                                <div>
                                    <TextField
                                        id="text-field-default"
                                        value={this.state.user.name}
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

                                <AltBtn />

                            </Paper>
                        </div>
                    </div>
                    <div>
                        <div style={styles.default}>
                            <Paper zDepth={5} style={styles.default} >
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
                                <AltBtn />
                            </Paper>
                        </div>
                    </div>

                    <div style={styles.default}>
                        <Paper zDepth={5} style={styles.default} >
                            <h2>Formação Academica </h2>
                            <Divider />
                            <br />

                            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={styles.inline}>
                                {this.formacoesAcademicas.map((fa) => <RadioButton
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
                            <AltBtn />
                        </Paper>
                    </div>
                    <div style={styles.default}>
                        <Paper zDepth={5} style={styles.default} >
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
                            <AltBtn />
                        </Paper>
                    </div>

                    <div style={styles.default}>
                        <Paper zDepth={5} style={styles.default} >
                            <h2>Alterar Senha </h2>
                            <Divider />
                            <br />

                            <div>



                                <PasswordField
                                    hintText="Minimo 8 caracteres, ex: QWE@#41uj"
                                    floatingLabelText="Senha Atual "
                                    errorText="Your password is too short"
                                    />


                                <PasswordField
                                    hintText="Minimo 8 caracteres, ex: QWE@#41uj"
                                    floatingLabelText="Nova Senha "
                                    errorText="Your password is too short"
                                    />
                            </div>
                            <AltBtn />
                        </Paper>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
export default TabsProfile;
