import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
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

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
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
          <Tab style={styles.tabs} label="Evobooks" value={0} />
          <Tab style={styles.tabs} label="Minha Biblioteca" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <GridListCategoria/><br />
          </div>
          <div style={styles.slide}>
            <GridListCategoria/>
          </div>=
        </SwipeableViews>
      </div>
    );
  }
}

export default TabsCategorias;