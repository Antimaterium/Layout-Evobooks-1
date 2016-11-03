import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperBackground from './PaperBackground';
import '../css/App.css';

class App extends Component {

  render() {
    return (  

      <MuiThemeProvider>
        <div>
          <div className="banner">
            
            <h1 id="titulo">EvoBooks</h1>
            <h2 id="subTitulo">Encontre modelos 3D, adicione à sua biblioteca, crie tags de identificação <br/>e adicione seus comentários</h2>

            <div id="searchHorizontal divPai">
              <form id="searchVertical">
                <input id="search" name="search" placeholder="Procurar..."/>
              </form>
            </div>
          </div>

          <p className="categorias">Categorias</p>
          
          <PaperBackground/>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
