import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Layout from './layout/Layout';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import CadastroImagem from './components/CadastroImagem';
import Editor from './components/Editor';
import Bibliotecas from './components/Bibliotecas';
import ViewImage from './components/ViewImage';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
      <Route path="cadastroimagem" component={CadastroImagem}/>
      <Route path="visualizador" component={ViewImage}/>
      <Route path="libs" component={Bibliotecas}/>
    </Route>
  </Router>,
  document.getElementById('root')
);