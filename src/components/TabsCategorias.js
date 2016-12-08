import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import GridListCategoria from './GridListCategoria';
import { request } from '../utils/Request';
import {browserHistory} from 'react-router';

const styles = {
  headline: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  tabs: {
    background: '#FAFAFA',
    color: '#424242'
  },
  inkBar: {
    background: 'rgb(138,3,130)',
    marginBottom: '20px'
  }
};

class TabsCategorias extends Component {

  state = {
    modelos: [],
    slideIndex: 0,
    categorias: []
  }
  montarCategorias(){


    var categs = [
      '2B825107-99D3-4458-87CE-11B7514A4122',
      '98221FC8-CD2A-4A90-A461-6F0085A41419',
      '85913F81-D655-4262-AFD6-A4CB859CB69C',
      'F89BBAAA-FF49-4B1D-9B10-1758127C2AAE',
      '7A109BD9-C57B-4FA3-BE6B-2561C10F8D5A',
      '58155866-CD2E-4388-AE9A-DFCFA19AC4D5',
      'A1F82B67-19E8-4BC6-99D3-2AD1C5A729CC',
      'A44A97F2-4252-4207-86B7-FBB39E308E9B',
      'F26C54E6-074C-485C-B4C7-25633E77ADEA',
      '430E3C7F-9B20-4869-A345-24CB434CEBAF'
    ];
    this.setState({categorias: categs});

  }
  requestModelos() {

     var id = this.state.categorias[this.state.slideIndex];
    var header = { "Authorization": "Bearer " + localStorage.getItem("token") };
    request("File/Category?categoryId=" + id ,"GET", header, null)
      .then(response => response.json())
      .then((response) => {
        
        if (response.access_token !== undefined) {
          console.log(response);
          
           this.setState({
            modelos: response
           });
        }
        else {
            browserHistory.push('/');
        }
      }).catch(error => {
            console.log(error);
            browserHistory.push('/');
      });



   
  }

  componentDidMount(){
    this.montarCategorias();
    this.requestModelos();
    
  }

  handleChange = (value) => {

    this.setState({
      slideIndex: value
    });
    this.requestModelos();
  };

  render() {
    return (
      <div>
        <Tabs
          inkBarStyle={styles.inkBar}
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
          <Tab style={styles.tabs} label="Todos" value={0} />
          <Tab style={styles.tabs} label="Biologia" value={1} />
          <Tab style={styles.tabs} label="Veiculos" value={2} />
          <Tab style={styles.tabs} label="Anatomia" value={3} />
          <Tab style={styles.tabs} label="Animais" value={4} />
          <Tab style={styles.tabs} label="Química" value={5} />
          <Tab style={styles.tabs} label="Arquitetura" value={6} />
          <Tab style={styles.tabs} label="Móveis" value={7} />
          <Tab style={styles.tabs} label="Automóveis" value={8} />
          <Tab style={styles.tabs} label="Tecnologia" value={9} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          >
          <div>
            <GridListCategoria modelos={this.state.modelos} /><br />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
          <div style={styles.slide}>
            <GridListCategoria modelos={this.state.modelos} />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default TabsCategorias;