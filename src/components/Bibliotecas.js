import React, {Component} from 'react';
import HeaderUserProfile from './HeaderUserProfile';
import GridListExampleSimple from './GridListExampleSimple';
import TabsExampleControlled from './TabsExampleControlled';
import Paper from 'material-ui/Paper';

const styles = {
	paper: {
		height: '100%',
		width: '97%',
		margin: 20,
		textAlign: 'center',
		display: 'inline-block',
		backgroundColor: '#FAFAFA'
	}
};

class Bibliotecas extends Component {

  render() {
    return (
      <div>
				<p style={{fontSize: '49px', textAlign: 'center', paddingTop: '80px'}}>Biblioteca</p>
				<Paper 
					style={styles.paper} 
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
