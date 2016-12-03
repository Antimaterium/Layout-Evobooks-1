import React, { Component } from 'react';
import GridListCategoria from './GridListCategoria';
import {request} from '../utils/Request';

class Pesquisa extends Component {
    state = {
        modelos: [],
        q: ""
    }
    requestModelos(){
        var modelos = [
            {
                id:"306fe0ea-1276-4854-b6b6-5e35898ff1ea",
                Name:"xap",
                CategoryName:"Outros",
                CreatorUserName:"Evobooks",
                Descricao:"xaplaus",
                UploadDate:"2016-12-03T10:45:51.613"
            },
            {
                id:"sdasdasds-1276-4854-b6b6-5e35898ff1ea",
                Name:"demonio",
                CategoryName:"Outros",
                CreatorUserName:"Evobooks",
                Descricao:"xaplaus",
                UploadDate:"2016-12-03T10:45:51.613"
            },
            {
                id:"sdasdasds-1276-4854-b6b6-5e35898ff1ea",
                Name:"baatat",
                CategoryName:"Outros",
                CreatorUserName:"Evobooks",
                Descricao:"xaplaus",
                UploadDate:"2016-12-03T10:45:51.613"
            },{
                id:"sadasdsaddsadsad-1276-4854-b6b6-5e35898ff1ea",
                Name:"xap",
                CategoryName:"Outros",
                CreatorUserName:"Evobooks",
                Descricao:"xaplaus",
                UploadDate:"2016-12-03T10:45:51.613"
            },
            {
                id:"sdasdassadsadds-2312132-4854-b6b6-5e35898ff1ea",
                Name:"demonio",
                CategoryName:"Outros",
                CreatorUserName:"Evobooks",
                Descricao:"xaplaus",
                UploadDate:"2016-12-03T10:45:51.613"
            },
            {
                id:"sdasdasds-21321-4854-b6b6-5e35898ff1ea",
                Name:"baatat",
                CategoryName:"Outros",
                CreatorUserName:"Evobooks",
                Descricao:"xaplaus",
                UploadDate:"2016-12-03T10:45:51.613"
            }
        ];
        this.setState({
            modelos
        });
        // request("/File/Evobooks?q="+this.state.q)
        // .then(res=>res.json())
        // .then(json=>{
        //     this.setState({
        //         modelos: json
        //     });
        // });
    }
    componentDidMount(){
        var query = this.props.location.query;
        this.setState({
            q: (query.q)?query.q:""
        });

        this.requestModelos();
    }
    render() {
        return (
            <div>
                <h1>Resultado da pesquisa: {this.state.q}</h1>
                <GridListCategoria modelos={this.state.modelos} />
            </div>
        );
    }
}

export default Pesquisa;
