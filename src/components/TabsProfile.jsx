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
        
    }

    componentDidMount() {
        
    }

    constructor() {
        super();
        this.state = {
            slideIndex: 0,
            user: {
                name: localStorage.getItem("username")
            }
        };
    };s

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
                                    floatingLabelText="Email"
                                    floatingLabelFixed={true}
                                    /><br />

                                
                                <TextField
                                    id="text-field-default"
                                    floatingLabelText="Senha"
                                    floatingLabelFixed={true}
                                    /><br />

                                <AltBtn />

                            </Paper>
                        </div>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
export default TabsProfile;
