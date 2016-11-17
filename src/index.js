import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Layout from './layout/Layout';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import CadastroImagem from './components/CadastroImagem';
import Editor from './components/Editor';
import Bibliotecas from './components/Bibliotecas';
import Profile from './components/Profile';
import TabsProfile from './components/TabsProfile';
import ViewImage from './components/ViewImage';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
//Tá renderizanu aqui
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
      <Route path="imageRegister" component={CadastroImagem}/>
      <Route path="view" component={ViewImage}/>
      <Route path="libs" component={Bibliotecas}/>
      <Route path="edit" component={Editor}/>
      <Route path="profile" component={Profile}/>
      <Route path="Tabs" component={TabsProfile}/>
    </Route>
  </Router>,
  document.getElementById('root')
);