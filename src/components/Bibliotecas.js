import React, {Component} from 'react';
import HeaderUserProfile from './HeaderUserProfile';
import GridListExampleSimple from './GridListExampleSimple';
import TabsExampleControlled from './TabsExampleControlled';
import Paper from 'material-ui/Paper';

const style = {
  height: '100%',
  width: '97%',
  margin: 20,
  paddingBottom: 50,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#FAFAFA',
};

class Bibliotecas extends Component {

  render() {
    return (
      <div>
				<div>
					<HeaderUserProfile/>
				</div>
					<Paper 
						style={style} 
						zDepth={2} 
						children={
							<div>
								<TabsExampleControlled/>
							</div>
						}
					/>
   	  </div>
    );
  }
}

export default Bibliotecas;
