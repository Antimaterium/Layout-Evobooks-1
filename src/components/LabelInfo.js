import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RadioOptionsForm from './RadioOptionsForm';
import Divider from 'material-ui/Divider';
export default class LabelInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <h2>Perfil</h2>
       
      <div>
        <AutoComplete
          hintText="Nome"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Sobrenome"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Email@email.com"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />

        <AutoComplete
          hintText="(ddd)1234-5678"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />

      </div>

      <h2> Mais Sobre Si ... </h2>
       
      <div>
        <AutoComplete
          hintText="Municipio"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Cidade"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Pais"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />

      </div>

      <h2> Voce nas Redes Sociais </h2>
       
      <div>
        <AutoComplete
          hintText="Twitter"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Facebook"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}

      </div>

      <h2> Formação Academica</h2>
       
      <div>
      <RadioOptionsForm/>
      </div>
      <div>
        <AutoComplete
          hintText="Curso"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Instituição"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}

      </div>

       <h2> Trabalho</h2>
        

       <div>
        <AutoComplete
          hintText="Instituição"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}