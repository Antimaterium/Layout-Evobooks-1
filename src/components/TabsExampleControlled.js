import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import GridListExampleSimple from './GridListExampleSimple';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="EvoBooks" value="a" >
          <div>
            <h2 style={styles.headline}>EvoBooks</h2>
              <div>
                  <GridListExampleSimple/>
                  <GridListExampleSimple/>
              </div>
          </div>
        </Tab>
        <Tab label="Minha Biblioteca" value="b">
          <div>
            <h2 style={styles.headline}>Minha Biblioteca</h2>
                          <div>
                  <GridListExampleSimple/>
                  <GridListExampleSimple/>
              </div>
          </div>
        </Tab>
      </Tabs>
    );
  }
}