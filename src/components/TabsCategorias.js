import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import GridListCategoria from './GridListCategoria';

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
    slideIndex: 0
  }

  requestModelos() {
    var modelos = [
            {
                id:"306fe0ea-1276-4854-b6b6-5e35898ff1ea",
                Name:"xap",
                CategoryName:"Outros",
                CreatorUserName:"Evobooks",
                Descricao:"xaplaus",
                thumbPath:"http://lugardaaimgem/dkdlkjd",
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
  }

  componentDidMount(){
    this.requestModelos();
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
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